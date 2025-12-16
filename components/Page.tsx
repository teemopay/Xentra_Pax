import { cn } from "@/lib/utils";

export const MainPage = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="px-5 md:px-[60px] mx-auto w-full">
      <div className={cn("relative max-w-[1200px] mx-auto", className)}>
        {children}
      </div>
    </div>
  );
};
