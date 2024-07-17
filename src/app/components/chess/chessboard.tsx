"use client"

import React from "react";

const Chessboard: React.FC = () => {
    const squares: React.ReactNode[] = [];
    const test:string = "hi"

    const handleClick = (index: number) => {
        console.log("Square clicked:", index);
        
        // You can add logic here to handle the click event
    };

    for (let i = 0; i < 64; i++) {
        const isEvenRow = Math.floor(i / 8) % 2 === 0;
        const isEvenCol = i % 2 === 0;
        const isDark = (isEvenRow && isEvenCol) || (!isEvenRow && !isEvenCol);

        squares.push(
            <div
                key={i}
                className={`w-16 h-16 relative cursor-pointer ${isDark ? "bg-orange-200" : "bg-black"}
                `}
                onClick={() => handleClick(i)}
            >
                <div className="absolute inset-0 bg-red-500 opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-8 grid-rows-8 gap-0 fixed border-[16px] border-orange-700">
                {squares}
            </div>
        </div>
    );
};

export default Chessboard;
