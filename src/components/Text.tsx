import * as React from "react";
import {cva, type VariantProps} from "class-variance-authority";

export const TEXT_VARIANTS = cva('flex items-center font-sans text-gray-400', {
    variants: {
        variant: {
            "body-sm-bold": "text-sm leading-5 font-semibold",
            "body-md": "text-base leading-6 font-normal",
            "body-md-bold": "text-base leading-6 font-semibold",
        }
    },
    defaultVariants: {
        variant: "body-md"
    }
})

interface TextProps extends VariantProps<typeof TEXT_VARIANTS> {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children: React.ReactNode;

}

export default function Text({
                                 as = 'span',
                                 className,
                                 variant,
                                 children,
                                 ...props
                             }: TextProps) {
    return React.createElement(
        as,
        {className: TEXT_VARIANTS({variant: variant, className}), ...props},
        children
    )
}