'use client'

import React from 'react';

interface SmoothScrollProps {
    targetId: string;
    children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ targetId, children }) => {
    const handleClick = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button onClick={handleClick}>
            {children}
        </button>
    );
};

export default SmoothScroll;