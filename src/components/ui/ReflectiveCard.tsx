import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ReflectiveCardProps {
    icon?: LucideIcon;
    title?: string;
    description?: string;
    blurStrength?: number;
    color?: string;
    metalness?: number;
    roughness?: number;
    overlayColor?: string;
    displacementStrength?: number;
    noiseScale?: number;
    specularConstant?: number;
    grayscale?: number;
    glassDistortion?: number;
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
}

const ReflectiveCard: React.FC<ReflectiveCardProps> = ({
    icon: Icon,
    title,
    description,
    blurStrength = 16,
    color = 'white',
    metalness = 1,
    roughness = 0.3,
    overlayColor = 'rgba(0, 40, 30, 0.1)',
    displacementStrength = 20,
    noiseScale = 1.2,
    specularConstant = 1.5,
    grayscale = 1,
    glassDistortion = 0.1,
    className = '',
    style = {},
    children
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [streamActive, setStreamActive] = useState(false);

    useEffect(() => {
        let stream: MediaStream | null = null;

        const startWebcam = async () => {
            try {
                stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        width: { ideal: 640 },
                        height: { ideal: 480 },
                        facingMode: 'user'
                    }
                });

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    setStreamActive(true);
                }
            } catch (err) {
                console.error('Error accessing webcam:', err);
            }
        };

        startWebcam();

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const baseFrequency = 0.03 / Math.max(0.1, noiseScale);
    const saturation = 1 - Math.max(0, Math.min(1, grayscale));

    const cssVariables = {
        '--blur-strength': `${blurStrength}px`,
        '--metalness': metalness,
        '--roughness': roughness,
        '--overlay-color': overlayColor,
        '--text-color': color,
        '--saturation': saturation
    } as React.CSSProperties;

    return (
        <div
            className={`relative w-full h-full min-h-[200px] rounded-[28px] overflow-hidden bg-[#030706] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)_inset] isolate font-sans ${className}`}
            style={{ ...style, ...cssVariables }}
        >
            <svg className="absolute w-0 h-0 pointer-events-none opacity-0" aria-hidden="true">
                <defs>
                    <filter id="metallic-displacement" x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence type="turbulence" baseFrequency={baseFrequency} numOctaves="3" result="noise" />
                        <feColorMatrix in="noise" type="luminanceToAlpha" result="noiseAlpha" />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale={displacementStrength}
                            xChannelSelector="R"
                            yChannelSelector="G"
                            result="rippled"
                        />
                        <feSpecularLighting
                            in="noiseAlpha"
                            surfaceScale={displacementStrength}
                            specularConstant={specularConstant}
                            specularExponent="30"
                            lightingColor="#10b981"
                            result="light"
                        >
                            <fePointLight x="0" y="0" z="400" />
                        </feSpecularLighting>
                        <feComposite in="light" in2="rippled" operator="in" result="light-effect" />
                        <feBlend in="light-effect" in2="rippled" mode="screen" result="metallic-result" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
                            result="solidAlpha"
                        />
                        <feMorphology in="solidAlpha" operator="erode" radius="45" result="erodedAlpha" />
                        <feGaussianBlur in="erodedAlpha" stdDeviation="15" result="blurredMap" />
                        <feComponentTransfer in="blurredMap" result="glassMap">
                            <feFuncA type="linear" slope="0.7" intercept="0" />
                        </feComponentTransfer>
                        <feDisplacementMap
                            in="metallic-result"
                            in2="glassMap"
                            scale={glassDistortion * 20}
                            xChannelSelector="A"
                            yChannelSelector="A"
                            result="final"
                        />
                    </filter>
                </defs>
            </svg>

            <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="absolute top-0 left-0 w-full h-full object-cover scale-[1.3] -scale-x-100 z-0 opacity-80 transition-[filter] duration-500"
                style={{
                    filter:
                        'saturate(var(--saturation, 0)) contrast(130%) brightness(120%) blur(var(--blur-strength, 16px)) url(#metallic-displacement)'
                }}
            />

            {/* Deep Emerald Glow (Top Left) */}
            <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none z-10" />
            {/* Subtle Glow (Bottom Right) */}
            <div className="absolute -bottom-[20%] -right-[20%] w-[80%] h-[80%] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none z-10" />

            {/* Noise Texture Over */}
            <div className="absolute inset-0 z-20 opacity-[0.2] pointer-events-none mix-blend-soft-light bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20200%20200%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cfilter%20id%3D%27noise%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%271.5%27%20numOctaves%3D%274%27%20stitchTiles%3D%27stitch%27%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url(%23noise)%27%2F%3E%3C%2Fsvg%3E')]" />

            {/* Reflective Edge Light */}
            <div className="absolute inset-0 z-30 bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_40%,transparent_50%,rgba(255,255,255,0.05)_60%,rgba(255,255,255,0.1)_100%)] pointer-events-none mix-blend-overlay opacity-[var(--metalness,1)]" />

            {/* Sharp Glass Border */}
            <div className="absolute inset-0 rounded-[28px] p-[1px] bg-[linear-gradient(135deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.05)_50%,rgba(16,185,129,0.3)_100%)] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] z-40 pointer-events-none" />

            <div className="relative z-50 h-full flex flex-col items-center justify-center p-8 text-[var(--text-color,white)] bg-[rgba(3,7,6,0.3)] backdrop-blur-[2px]">
                {children ? children : (
                    <>
                        <div className="w-16 h-16 rounded-[22px] bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 flex items-center justify-center mb-6 border border-emerald-500/30 backdrop-blur-xl shadow-[0_10px_30px_-5px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform duration-500">
                            {Icon && <Icon className="h-8 w-8 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />}
                        </div>
                        <h3 className="text-xl font-bold mb-3 font-serif text-white tracking-tight drop-shadow-md">{title}</h3>
                        <p className="text-white/70 text-center leading-relaxed font-medium text-xs max-w-[200px]">
                            {description}
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default ReflectiveCard;
