import { motion } from "framer-motion";
import { useState } from "react";

export function CircleExpandButton({ bgColor, hoverColor, textColor, text, hoverTextColor }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setMousePosition({ x, y });
    };

    const handleMouseEnter = (e) => {
        handleMouseMove(e);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <motion.button
            className={`relative overflow-hidden ${bgColor} ${textColor} hover:cursor-pointer text-center p-4 rounded-4xl border-2 border-[#F1B434]`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileTap={{ scale: 0.95 }}
        >
            {/* Círculo que expande */}
            <motion.div
                className={`absolute ${hoverColor} rounded-full pointer-events-none`}
                style={{
                    width: '225%',
                    aspectRatio: '1/1',
                    left: mousePosition.x,
                    top: mousePosition.y,
                }}
                initial={{
                    scale: 0,
                    x: '-50%',
                    y: '-50%',
                }}
                animate={{
                    scale: isHovered ? 1 : 0,
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                }}
            />

            <motion.span
                className="relative z-10"
                initial={{color: {textColor}}}
                animate={{
                    color: isHovered ? hoverTextColor : textColor
                }}
                transition={{ duration: 0.4 }}
            >
                {text}
            </motion.span>
        </motion.button>
    );
}

function BorderCircleButton() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setMousePosition({ x, y });
    };

    const handleMouseEnter = (e) => {
        handleMouseMove(e);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <motion.button
            className="relative overflow-hidden text-center p-4 rounded-4xl"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileTap={{ scale: 0.95 }}
        >
            {/* Círculo que expande */}
            <motion.div
                className="absolute bg-orange-500 rounded-full pointer-events-none"
                style={{
                    width: '225%',
                    aspectRatio: '1/1',
                    left: mousePosition.x,
                    top: mousePosition.y,
                }}
                initial={{
                    scale: 0,
                    x: '-50%',
                    y: '-50%',
                }}
                animate={{
                    scale: isHovered ? 1 : 0,
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                }}
            />
        </motion.button>
    );
}