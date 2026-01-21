import {cva, type VariantProps} from "class-variance-authority";
import * as React from "react";
import Text from "./Text.tsx";

export const BADGE_VARIANTS = cva('inline-flex items-center justify-center rounded-full py-1 px-3', {
    variants: {
        variant: {
            "pink": "bg-pink-light text-pink-dark",
            "green": "bg-green-light text-green-dark",
        }
    },
    defaultVariants: {
        variant: "pink"
    }
})

interface BadgeProps extends VariantProps<typeof BADGE_VARIANTS> {
    className?: string;
    children?: React.ReactNode;

}

export default function Bagde({
                          className,
                          variant,
                          children
                      }: BadgeProps) {
    return (
        <div className={BADGE_VARIANTS({variant, className})}>
            <Text variant="body-sm-bold"> {children} </Text>
        </div>
    );
}
