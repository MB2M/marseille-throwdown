import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Props<T extends string> {
  labels: T[];
  onChange?: (label: T) => void;
}

export function SwitchButton<T extends string>({ labels, onChange }: Props<T>) {
  const [selectedButton, setSelectedButton] = useState<string>("individual");
  const handleClick = (label: T) => () => {
    setSelectedButton(label);
    onChange?.(label);
  };
  return (
    <div className="flex ">
      <div
        className={
          "border border-[#3E495D] flex justify-center items-center p-1.5 w-full"
        }
      >
        {labels.map((label) => (
          <Button
            key={label}
            variant={`${selectedButton === label ? "gradient" : "ghost"}`}
            className={"w-full"}
            onClick={handleClick(label)}
          >
            {label.toUpperCase()}
          </Button>
        ))}
      </div>
    </div>
  );
}
