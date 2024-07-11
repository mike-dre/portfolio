import React from "react";

export default function Chessboard() {
    const squares:React.JSX.Element[] = [];

    for (let i = 0; i < 64; i++) {
        const isEvenRow = Math.floor(i / 8) % 2 === 0;
        const isEvenCol = i % 2 === 0;
        const isDark = (isEvenRow && isEvenCol) || (!isEvenRow && !isEvenCol);

        squares.push(
            <div
                key={i}
                className={`w-16 h-16 ${isDark ? "bg-orange-200" : "bg-black"}`}
            />
        );
    }
    return (
        <>
        <div className="min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-8 grid-rows-8 gap-0 fixed border-[18px] border-orange-700"> 
            {squares}
        </div>
        </div>
        </>
    )
}