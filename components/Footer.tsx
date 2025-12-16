"use client";
import { useEffect } from "react";
import Link from "next/link";
import { MainPage } from "@/components/Page";
import SkeletonImage from "@/components/SkeletonImage";
const list = [
  {
    title: "Presentación de la Empresa",
    children: [
      {
        href: "/About",
        name: "Contacto de Colaboración",
      },
    ],
  },
  {
    title: "Alcance del Servicio",
    children: [
      {
        href: "/Solution",
        name: "Soluciones de Productos",
      },
      {
        href: "/Support",
        name: "Soporte Tenico",
      },
    ],
  },
];
export default function Footer() {
  useEffect(() => {}, []);
  return (
    <div className="bg-[#14171E] text-[#FFFFFF]">
      <MainPage>
        <div className="pt-[93px] pb-20 grid grid-cols-1 lg:grid-cols-4 gap-x-20 cursor-pointer">
          <div className="mb-3 lg:mb-0 cursor-pointer md:col-span-2">
            <Link href="/">
              <SkeletonImage
                src="/logo-2.png"
                alt="logo"
                width={236}
                height={26}
              />
            </Link>
            <Link
              href="mailto:bd@xentrapax.com "
              className="text-[14px] mt-[38px] text-white mb-[15px] hover:text-[#3E9BFF] block"
            >
              Correo electrónico de la compañía:{" "}
              <span className="font-bold">bd@xentrapax.com </span>
            </Link>
            <div className="text-[14px]  text-white  hover:text-[#3E9BFF]">
              Horario de trabajo: 9:30am - 18:30pm
            </div>
          </div>
          {list.map((i, index) => {
            return (
              <div key={index} className="mt-5 lg:mt-0">
                <div className="mb-6 font-bold">{i.title}</div>
                {i.children.map((s, sIndex) => {
                  return (
                    <Link
                      className="block mb-3 text-[12px] hover:text-[#3E9BFF] cursor-pointer"
                      href={s.href}
                      key={sIndex}
                    >
                      {s.name}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="pt-[30px] pb-20  border-t-[rgba(255,255,255,0.2)]  border-t-[0.5px] text-center text-[14px] text-[rgba(255,255,255,0.48)]">
          Copyright © 2025 Xentra Pax
        </div>
      </MainPage>
    </div>
  );
}
