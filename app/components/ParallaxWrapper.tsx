'use client';

import { useParallax } from 'react-scroll-parallax';
import { useRef } from 'react';

// app/components/ParallaxWrapper.tsx
interface ParallaxProps {
    children: React.ReactNode;
    speed?: number;
    rotate?: [number, number];
    translateX?: [string, string] | [number, number];
    translateY?: [string, string] | [number, number];
    scale?: [number, number];
    startScroll?: number;
    endScroll?: number;
    className?: string;
    opacity?: [number, number];
}

export default function ParallaxWrapper({
    children,
    speed,
    rotate,
    translateX,
    translateY,
    scale,
    startScroll,
    endScroll,
    className = '',
    opacity
}: ParallaxProps) {
    const parallax = useParallax<HTMLDivElement>({
        speed,
        rotate,
        translateX,
        translateY,
        scale,
        startScroll,
        endScroll,
        opacity
    });

    return (
        <div ref={parallax.ref} className={`relative ${className}`}>
            {children}
        </div>
    );
}
