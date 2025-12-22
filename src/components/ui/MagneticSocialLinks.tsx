'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';

export default function MagneticSocialLinks() {
    return (
        <div className="flex items-center justify-center gap-8 mt-12 mb-4">
            <MagneticLink href="https://facebook.com/harrietbuildesign" icon={<Facebook size={28} />} color="#1877F2" />
            <MagneticLink href="https://instagram.com/harrietbuildesign" icon={<Instagram size={28} />} color="#E4405F" />
        </div>
    );
}

function MagneticLink({ href, icon, color }: { href: string; icon: React.ReactNode; color: string }) {
    const ref = useRef<HTMLAnchorElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x: x * 0.3, y: y * 0.3 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.a
            ref={ref}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-24 h-14 rounded-full bg-white border border-white/40 shadow-[0_8px_16px_-6px_rgba(0,0,0,0.1),inset_0_-4px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_20px_-8px_rgba(0,0,0,0.15),inset_0_-4px_4px_rgba(0,0,0,0.05)] transition-all transform-gpu"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {/* 3D Top Highlight */}
            <div className="absolute inset-x-4 top-1 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full opacity-60 pointer-events-none" />

            {/* Hover background color fill */}
            <div
                className="absolute inset-0 rounded-full opacity-0 hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: color }}
            />

            {/* Icon */}
            <div className="relative z-10 text-harriet-700 hover:text-[color] transition-colors duration-300" style={{ '--hover-color': color } as React.CSSProperties}>
                {React.cloneElement(icon as React.ReactElement, {
                    className: `transition-colors duration-300 group-hover:text-[${color}]`
                })}
            </div>

            {/* Dynamic Glow Effect */}
            <motion.div
                className="absolute inset-0 rounded-full blur-xl opacity-0 hover:opacity-30 transition-opacity duration-300 -z-10"
                style={{ backgroundColor: color }}
                animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
            />
        </motion.a>
    );
}
