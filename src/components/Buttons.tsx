import {cva, type VariantProps} from "class-variance-authority";
import * as React from "react";

export const BUTTON_VARIANTS = cva({}, {
    variants: {
        variant: {
            "primary": "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
            "secondary": "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",
        }
    }
})

interface ButtonProps extends VariantProps<typeof BUTTON_VARIANTS> {
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    disabled?: boolean;

}


export const Button = ({
                           className,
                           variant = "primary",
                           onClick,
                           children,
                           disabled = false
                       }: ButtonProps) => {
    return (
        <button className={BUTTON_VARIANTS({variant, className})} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};
