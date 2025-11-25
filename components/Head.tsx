"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { MainPage } from "@/components/Page";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import SkeletonImage from "@/components/SkeletonImage";
import { usePathname } from "next/navigation";
gsap.registerPlugin(DrawSVGPlugin);
console.clear();
const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
const navList = [
  {
    name: "Página Principal",
    href: "/",
  },
  {
    name: "Productos y Servicios",
    href: "/Solution",
  },
  {
    name: "Casos de Clientes",
    href: "/Case",
  },
  {
    name: "Contáctanos",
    href: "/About",
  },
];
export default function Footer() {
  const [open, setOpen] = useState(false);
  const svgRef = useRef(null);
  const pathname = usePathname();
  useEffect(() => {
    if (!svgRef.current) return;
    gsap.set("#theBurger", { autoAlpha: 1 });
    gsap.set(".buns", { drawSVG: "0% 30%" });
    tl.to(".buns", { duration: 0.85, drawSVG: "69% 96.5%" }, 0);
    tl.to(".patty", { duration: 0.35, drawSVG: "50% 50%" }, 0);
    tl.to(".patty", { duration: 0.1, opacity: 0, ease: "none" }, 0.25);
    tl.reversed(true);
  }, []);
  const animateTheBurger = () => {
    setOpen(!open);
    tl.reversed(!tl.reversed());
  };
  const close = () => {
    setOpen(false);
    tl.reversed(true);
  };
  return (
    <div className="fixed inset-0 h-20 bg-[rgba(255,255,255,0.85)] backdrop-blur-xs flex  items-center z-20 ">
      <MainPage className="flex-1">
        <div className="flex justify-between items-center">
          <Link className="mr-5" href="/">
            <SkeletonImage src="/logo.png" alt="logo" width={316} height={46} />
          </Link>
          <div className="flex-1 ">
            <div className="hidden lg:flex items-center justify-end">
              {navList.map((i, index) => {
                return (
                  <Link
                    key={index}
                    className={`text-[16px]  relative block h-20 leading-20 mr-5 last:mr-0 xl:mr-12 
            cursor-pointer hover:text-[#FF922B] 
             underline-expand ${
               pathname === i.href
                 ? "text-[#FF922B] underline-active"
                 : "text-[#333] hover:text-[#FF922B]"
             }`}
                    href={i.href}
                  >
                    {i.name}
                  </Link>
                );
              })}
            </div>
            <div className="relative lg:hidden cursor-pointer flex items-center justify-end">
              <svg
                className="mt-5"
                ref={svgRef}
                id="theBurger"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                viewBox="0 0 200 200"
                onClick={animateTheBurger}
              >
                <g
                  id="burger"
                  fill="none"
                  stroke="#333333"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={10}
                >
                  <line className="patty" x1={50} y1={61} x2={150} y2={61} />
                  <path
                    className="buns"
                    d="M50,29h96c27,0,48-1,34,40-18.12,53.08-48.64,23.86-48.64,23.86L60.64,22.14"
                  />
                  <path
                    className="buns"
                    d="M50,94h96c27,0,48,1,34-40C161.88,1,131.36,30.17,131.36,30.17L60.64,100.88"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        {/* 移动端 */}
        <div
          className={cn(
            "fixed left-0 top-20 bg-[rgba(255,255,255,0.85)] backdrop-blur-xs z-19 w-full px-5",
            "transition-all duration-300 lg:hidden ",
            `${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`
          )}
        >
          <MainPage className="py-5">
            {navList.map((i, index) => {
              return (
                <Link
                  key={index}
                  className={`text-[16px]  relative block   
            cursor-pointer hover:text-[#FF922B]  mb-3
              ${
                pathname === i.href
                  ? "text-[#FF922B]"
                  : "text-[#333] hover:text-[#FF922B]"
              }`}
                  href={i.href}
                  onClick={close}
                >
                  {i.name}
                </Link>
              );
            })}
          </MainPage>
        </div>
      </MainPage>
    </div>
  );
}
