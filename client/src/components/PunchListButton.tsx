/*
  Primary call to action. Deliberately a plain <a>, not a wouter <Link>: /punch-list/ is a static
  page outside the React app, so it needs a full page load (a client-side route would 404).
*/
import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { PUNCH_LIST_PATH } from "@/lib/site";
import { cn } from "@/lib/utils";

interface PunchListButtonProps {
  size?: ButtonProps["size"];
  className?: string;
  label?: string;
}

export default function PunchListButton({
  size = "default",
  className,
  label = "Get Your Free Punch List",
}: PunchListButtonProps) {
  return (
    <Button asChild size={size} className={cn("font-semibold", className)}>
      <a href={PUNCH_LIST_PATH} data-testid="button-punch-list">
        {label}
        <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </Button>
  );
}
