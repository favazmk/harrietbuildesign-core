'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';

export default function MagneticSocialLinks() {
    return (
        <div className="flex items-center justify-center mt-12 mb-4">
            <UnifiedSocialButton />
        </div>
    );
}

function UnifiedSocialButton() {
    const ref = useRef<HTMLDivElement>(null);
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
        <motion.div
            ref={ref}
            className="social-button"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        >
            <span>Follow Us On</span>
            <div className="container gap-6">
                <a
                    href="https://facebook.com/HarrietBuildesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#1877F2] transition-colors duration-300 transform hover:scale-110"
                    title="Facebook"
                >
                    <Facebook size={42} />
                </a>
                <a
                    href="https://instagram.com/harriet_builders"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#E4405F] transition-colors duration-300 transform hover:scale-110"
                    title="Instagram"
                >
                    <Instagram size={42} />
                </a>
            </div>
        </motion.div>
    );
}
