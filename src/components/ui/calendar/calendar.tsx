"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        month_caption: "flex justify-center pt-1 relative items-center mb-4",
        caption_label: "text-[10px] sm:text-xs font-bold uppercase tracking-widest italic font-mono",
        nav: "flex items-center gap-1",
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-2 transition-opacity z-10"
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-2 transition-opacity z-10"
        ),
        month_grid: "w-full border-collapse",
        weekdays: "grid grid-cols-7 mb-2",
        weekday:
          "text-muted-foreground rounded-md w-full font-normal text-[8px] sm:text-[9px] uppercase tracking-normal opacity-40 font-mono text-center",
        week: "grid grid-cols-7 w-full mt-2",
        day: "h-8 w-8 hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer sm:h-9 sm:w-9 text-center text-[10px] sm:text-xs p-0 relative focus-within:relative focus-within:z-20 flex items-center justify-center",
        day_button: 
          "h-full w-full cursor-pointer p-0 font-normal tracking-normal normal-case aria-selected:opacity-100 transition-colors rounded-md",
        selected:
          "bg-muted rounded-md text-accent hover:bg-accent hover:!text-accent-foreground focus:bg-accent focus:!text-accent-foreground font-bold select-none",
        today: "bg-background text-foreground border rounded-md border-border",
        outside:
          "day-outside text-muted-foreground opacity-30 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        disabled: "text-muted-foreground opacity-50",
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: (props) => {
          if (props.orientation === "left") {
            return <ChevronLeft className="h-4 w-4" />;
          }
          return <ChevronRight className="h-4 w-4" />;
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
