import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useRef } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const StoryCard = ({ title, children }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const scrollArea = scrollRef.current?.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (!scrollArea) return;

      const { scrollTop, scrollHeight, clientHeight } = scrollArea;
      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;
      const isAtTop = scrollTop === 0;
      const isAtBottom = Math.abs(scrollTop + clientHeight - scrollHeight) < 1;

      // Ngăn scroll fullpage khi chưa scroll hết content
      if ((isScrollingDown && !isAtBottom) || (isScrollingUp && !isAtTop)) {
        e.stopPropagation();
      }
    };

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-[20px] md:text-[40px] font-bold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent
        className="border-r-[0.5px] border-[#222] py-10 px-[30px]"
        ref={scrollRef}
      >
        <ScrollArea className="h-[250px] w-full rounded-md">
          <div className="space-y-6 text-[13px] pr-4">{children}</div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
