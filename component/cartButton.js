"use client";

// IMPORTS
import { useEffect } from "react";

// CART BUTTON
export default function CartButton({ count, onIncrement, onDecrement }) {
    return <>
        <div className="bg-ieee-blue text-white px-3 py-1 rounded hover:opacity-90 w-full flex items-center justify-between gap-3">
            <button
                type="button"
                aria-label="Decrease quantity"
                onClick={onDecrement}
                className="bg-white/10 hover:bg-white/20 text-white w-8 h-8 flex items-center justify-center rounded"
            >
                −
            </button>

            <div className="flex-1 text-center font-medium">
                {count === 0 ? "Add to cart" : count}
            </div>

            <button
                type="button"
                aria-label="Increase quantity"
                onClick={onIncrement}
                className="bg-white/10 hover:bg-white/20 text-white w-8 h-8 flex items-center justify-center rounded"
            >
                +
            </button>
        </div>
    </>;
}