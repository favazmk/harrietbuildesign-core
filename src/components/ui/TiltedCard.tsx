import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, SpringOptions } from 'motion/react';
import { cn } from "@/lib/utils";

interface TiltedCardProps {
    children: React.ReactNode;
    className?: string;
    containerHeight?: React.CSSProperties['height'];
    containerWidth?: React.CSSProperties['width'];
    scaleOnHover?: number;
    rotateAmplitude?: number;
    showMobileWarning?: boolean;
    showTooltip?: boolean;
    captionText?: string;
    style?: React.CSSProperties;
}

const springValues: SpringOptions = {
    damping: 30,
    stiffness: 100,
    mass: 2
};

export default function TiltedCard({
    children,
    className,
    containerHeight = '100%',
    containerWidth = '100%',
    scaleOnHover = 1.05,
    rotateAmplitude = 14,
    showMobileWarning = false,
    showTooltip = false,
    captionText = '',
    style,
}: TiltedCardProps) {
    const ref = useRef<HTMLElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
        stiffness: 350,
        damping: 30,
        mass: 1
    });

    const [lastY, setLastY] = useState(0);

    useEffect(() => {
        // Mobile Handling: Gyro or Sway
        const isMobile = typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches;

        if (!isMobile) return;

        // Mobile defaults
        scale.set(1);
        opacity.set(1);

        let animationFrameId: number;
        let gyroActive = false;
        let startTime = Date.now();

        // Sway Animation (Fallback)
        const animateSway = () => {
            if (gyroActive) return;

            const now = Date.now();
            const elapsed = (now - startTime) / 1000;

            // Figure-8 / Breathing motion
            // X rotates slower, Y rotates faster slightly out of phase
            const swayX = Math.sin(elapsed * 0.5) * (rotateAmplitude / 2);
            const swayY = Math.cos(elapsed * 0.8) * (rotateAmplitude / 2);

            rotateX.set(swayX);
            rotateY.set(swayY);

            animationFrameId = requestAnimationFrame(animateSway);
        };

        // Start sway initially
        animationFrameId = requestAnimationFrame(animateSway);

        // Gyroscope Handler
        const handleOrientation = (e: DeviceOrientationEvent) => {
            if (e.beta === null || e.gamma === null) return;

            // If we receive valid data, stop sway and use gyro
            if (!gyroActive) {
                gyroActive = true;
                cancelAnimationFrame(animationFrameId);
            }

            // Portrait mode:
            // beta is x-axis tilt (-180 to 180). 
            // gamma is y-axis tilt (-90 to 90).
            // We clamp and dampen.

            // Center points (holding phone naturally at ~45 deg?)
            // Usually we just use relative change, but absolute is fine for "looking around".
            // Let's assume holding at 45deg (beta: 45).

            const beta = e.beta || 0;
            const gamma = e.gamma || 0;

            // Normalize slightly
            // We want +/- amplitude.
            // Move range: +/- 30 degrees gives full effect.

            const tiltX = Math.min(Math.max((beta - 45) / 2, -rotateAmplitude), rotateAmplitude); // Tilt forward/back
            const tiltY = Math.min(Math.max(gamma / 2, -rotateAmplitude), rotateAmplitude);   // Tilt left/right

            rotateX.set(-tiltX); // Invert for "window" effect or keep for "object" effect?
            // Mouse logic: offsetY (positive down) -> negative X rotation (top goes back).
            // Gyro beta increases as you tilt top toward you?
            // Standard: beta 90 is upright, 0 is flat on table.

            rotateY.set(tiltY);
        };

        window.addEventListener("deviceorientation", handleOrientation);

        return () => {
            window.removeEventListener("deviceorientation", handleOrientation);
            cancelAnimationFrame(animationFrameId);
        };
    }, [rotateX, rotateY, scale, opacity, rotateAmplitude]);

    function handleMouse(e: React.MouseEvent<HTMLElement>) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
        opacity.set(1);
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }

    return (
        <figure
            ref={ref}
            className={cn("relative z-[60] w-full h-full [perspective:800px] flex flex-col items-center justify-center", className)}
            style={{
                height: containerHeight,
                width: containerWidth,
                ...style
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="relative w-full h-full [transform-style:preserve-3d]"
                style={{
                    rotateX,
                    rotateY,
                    scale
                }}
            >
                {children}
            </motion.div>

            {showTooltip && (
                <motion.figcaption
                    className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
                    style={{
                        x,
                        y,
                        opacity,
                        rotate: rotateFigcaption
                    }}
                >
                    {captionText}
                </motion.figcaption>
            )}
        </figure>
    );
}
