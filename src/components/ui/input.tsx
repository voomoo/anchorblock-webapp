import * as React from "react";

import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    const [inputType, setInputType] = React.useState<string | undefined>(type);
    return (
      <div className="relative">
        <span className="absolute top-2/4 -translate-y-2/4 left-3 text-gray-500">
          {icon && icon}
        </span>
        <input
          type={inputType}
          className={cn(
            "flex h-14 w-full rounded-xl border border-input bg-background pl-8 pr-10 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <span
            className="absolute top-2/4 -translate-y-2/4 right-3 text-gray-500 cursor-pointer"
            onClick={() =>
              inputType === "password"
                ? setInputType("text")
                : setInputType("password")
            }
          >
            {inputType === "password" ? (
              <Icon icon="mdi:eye" className="h-6 w-6 text-gray-400" />
            ) : (
              <Icon icon="el:eye-close" className="h-6 w-6 text-gray-400" />
            )}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
