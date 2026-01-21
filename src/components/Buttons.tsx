import {cva, type VariantProps} from "class-variance-authority";
import * as React from "react";
import Text from "./Text.tsx";

export const BUTTON_VARIANTS = cva('flex items-center justify-center' +
    ' cursor-pointer transition rounded-lg group gap-2',
    {
        variants: {
            variant: {
                "primary": "bg-white hover:bg-gray-200 text-gray-300",
                "secondary": "bg-pink-light hover:bg-pink-base text-gray-200",
                "tertiary": "bg-green-base hover:bg-green-dark text-white"
            },
            size: {
                "small": "h-8 px-2 py-2",
                "medium": "h-14 px-5 py-4"
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "medium"
        }
    })

interface ButtonProps extends VariantProps<typeof BUTTON_VARIANTS>, React.ComponentProps<'button'> {
    variant?: "primary" | "secondary" | "tertiary";
    size?: "small" | "medium";
}



export const Button = ({
                           variant = "primary",
                           size = "medium",
                           className,
                           disabled,
                           onClick,
                           children,
                           ...props
                       }: ButtonProps) => {
    return (
        <button
            className={`${BUTTON_VARIANTS({variant, size})} ${className || ""} ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            <Text variant={"body-md-bold"}>
                {children}
            </Text>
        </button>
    );
};
