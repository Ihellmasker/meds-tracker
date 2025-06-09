import { ReactNode } from "react";

export default function Pill({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <span
            className={`${className} px-2 py-1 text-xs border-pink-300 border-1 rounded-lg`}
        >
            {children}
        </span>
    );
}
