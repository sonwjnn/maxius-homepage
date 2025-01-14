import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { useNavSheet } from "@/store/use-nav-sheet";
import { sidelinks } from "@/data/sidelinks";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export const NavSheet = () => {
  const pathname = usePathname();
  const [open, setOpen] = useNavSheet();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-[90%] flex flex-col justify-between space-y-4 md:min-w-[40%] bg-[#0d183d] p-10">
        <VisuallyHidden.Root>
          <SheetTitle></SheetTitle>
        </VisuallyHidden.Root>
        <div className="flex flex-col gap-y-2 pt-[150px]">
          {sidelinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <div
                key={item.href}
                className={cn(
                  "text-white text-[36px] transition-all duration-[2000] font-light",
                  isActive && "text-[#ff9933]"
                )}
              >
                {item.title}
              </div>
            );
          })}
        </div>

        <div className="mt-auto">
          <Separator className="bg-white" />
          <div className="flex flex-col gap-y-4 font-thin text-white text-[13px] pt-10">
            <div>
              <p>
                5F 12-30, Simin-daero 327beon-gil, Dongan-gu, Anyang-sij
                Gyeonggi- do, Republic of Korea
              </p>
              <p>Tel 02 851.2662/ Fax 02.851.2655</p>
            </div>
            <div>
              <p>View Map</p>
            </div>
            <div>
              <p>Company.</p>
              <p>support@maxius-io</p>
            </div>
            <div>
              <p>Technical support</p>
              <p>support@maxius.io</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
