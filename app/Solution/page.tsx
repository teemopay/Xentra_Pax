"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainPage } from "@/components/Page";
import SkeletonImage from "@/components/SkeletonImage";
import { Icon5, Icon6, Icon7 } from "@/components/Svg";

export default function Solution() {
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    gsap.set(".SplitAnimation", { opacity: 1 });
    let tl = gsap.timeline();
    let tween;
    SplitText.create(".textAnimation", {
      type: "lines",
      onSplit: (self) => {
        tween = gsap.from(self.lines, {
          rotationX: -20,
          transformOrigin: "50% 50% -100px",
          opacity: 0,
          duration: 1,
          ease: "power3",
          stagger: 0.3,
        });
        return tween;
      },
    });
    gsap.utils.toArray(".scrollText").forEach((el: any) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          toggleActions: "restart pause restart pause",
        },
      });
      tl.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        }
      );
    });
  }, []);
  return (
    <div>
      <Servicios />
      <SecondItem />
      <ThreeItem />
      <FourItem />
    </div>
  );
}
export const Servicios = () => {
  return (
    <div className="relative">
      <SkeletonImage
        pclass="rounded-none"
        src="/5.png"
        alt="logo"
        width={3840}
        height={1270}
        className="min-h-[400px]"
      />
      <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center flex-col">
        <div className=" px-5 md:px-[60px]">
          <div className="mt-5 relative max-w-[1490px]  mx-auto">
            <div className="textAnimation text-[26px] md:text-[40px] md:leading-[50px] xl:text-[60px] xl:leading-20 2xl:text-[72px] 2xl:leading-[108px] font-bold text-white max-w-[1489px] text-center mx-auto mb-5 md:mb-[26px]">
              Optimización de Transacciones y Pagos Digitales Integral
            </div>
            <div className="textAnimation text-[14px] md:text-[18px] text-white text-center  max-w-[927px] mx-auto">
              Ofrecemos una pasarela de transacciones de alto rendimiento y baja
              latencia que garantiza la máxima tasa de éxito en los pagos.
              Optimizamos su flujo de caja comercial y eficiencia operativa a
              través de herramientas automatizadas de gestión de fondos.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SecondItem = () => {
  const list = [
    {
      icon: Icon5,
      title: "Pagos Localizados",
      cnt: "Cobertura profunda de los principales métodos de pago locales en Perú (transferencias bancarias, tarjetas locales, billeteras electrónicas, etc.).",
    },
    {
      icon: Icon6,
      title: "Enrutamiento Inteligente (Smart Routing)",
      cnt: "Utilizando nuestra arquitectura de alta disponibilidad, seleccionamos en tiempo real la ruta de pago con la tasa de éxito más alta a través de algoritmos inteligentes.",
    },
    {
      icon: Icon7,
      title: "Soporte de Cascada de Pagos (Payment Cascading)",
      cnt: "Para escenarios de transacción complejos, proporcionamos la función de cascada de pagos para garantizar un cambio sin interrupciones a canales alternativos si falla el método preferido.",
    },
  ];
  return (
    <div className="pt-[81px] pb-[153px] bg-[#F6F9FB]">
      <MainPage>
        <Title
          className="mb-[67px]"
          title="Optimización y Conexión de Pagos Multicanal"
        ></Title>
        <div className=" grid grid-cols-1 lg:grid-cols-3  gap-[41px] cursor-pointer">
          {list.map((i, index) => {
            const Icon = i.icon;
            return (
              <div
                key={index}
                className="solution-card border  commen-transition rounded-3xl  border-white bg-white p-[30px]"
              >
                <Icon className="solution-card-icon commen-transition mb-[30px]" />
                <div className="text-[20px] text-[#041D34] font-semibold mb-2.4 min-h-[60px] tracking-tighter">
                  {i.title}
                </div>
                <div className="text-[16px] text-[#8A879F] tracking-[-0.18px] leading-6">
                  {i.cnt}
                </div>
              </div>
            );
          })}
        </div>
      </MainPage>
    </div>
  );
};

export const ThreeItem = () => {
  const list = [
    {
      title: "Monitoreo de Fraude en Tiempo Real",
      cnt: "Cobertura profunda de los principales métodos de pago locales en Perú (transferencias bancarias, tarjetas locales, billeteras electrónicas, etc.).",
    },
    {
      title: "Compromiso de Cumplimiento",
      cnt: "Nuestros registros de transacciones y estructuras de datos son totalmente compatibles con los estándares y requisitos regulatorios locales de procesamiento de datos comerciales en Perú.",
    },
    {
      title: "Seguridad de Datos",
      cnt: "Utilizamos el protocolo TLS 1.3 para el cifrado de extremo a extremo, y la plataforma solo procesa datos anonimizados sin almacenar credenciales de fondos sensibles.",
    },
  ];
  return (
    <div className="pt-[120px] pb-[184px] bg-white">
      <MainPage>
        <Title
          className="mb-[82px] tracking-tighter"
          title="Control de Riesgos Inteligente y Garantía de Cumplimiento Peruano"
        ></Title>
        <div className="lg:flex justify-between items-center">
          <SkeletonImage
            pclass="card-img-scacel"
            src="/4.png"
            alt="logo"
            width={461}
            height={461}
            className="mx-auto lg:mx-0 card-img-scacel-img"
          />
          <div className="flex-1 2xl:max-w-[528px]">
            {list.map((i, index) => {
              return (
                <div key={index} className="mb-[30px] last:mb-0">
                  <div className="text-5 leading-[30px] mb-2.5 font-semibold text-[#041D34]">
                    {i.title}
                  </div>
                  <div className="text-4 leading-6  text-[#8A879F]">
                    {i.cnt}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MainPage>
    </div>
  );
};

export const FourItem = () => {
  return (
    <div className="pt-[168px] pb-[212px] bg-[#F6F9FB]">
      <MainPage>
        <Title
          className="mb-[18px]  2xl:leading-[78px]"
          title="Servicios de Valor Agregado e Integración"
        ></Title>
        <div className="scrollText text-[32px] leading-12 mb-[78px] text-color-linear">
          Operaciones Eficientes e Información Basada en Datos
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[63px] cursor-pointer">
          <div className="relative">
            <SkeletonImage src="/6.png" alt="logo" width={570} height={451} />
            <div className="absolute inset-0 z-2 w-full h-full">
              <div className="commen-transition solution-y px-5 py-3 md:px-[46px] md:py-[30px] flex flex-col justify-end h-full">
                <div className="text-[18px] md:text-[20px] text-white md:leading-[30px] mb-4 font-semibold">
                  Informes Visuales:
                </div>
                <div className="text-[12px] md:text-[16px] text-white md:leading-6 md:min-h-[120px] tracking-[-0.18px]">
                  Proporcionamos paneles de control visuales con datos de
                  transacciones en tiempo real, tasas de éxito y análisis de
                  fallos para ayudar a los comerciantes a obtener información
                  profunda sobre el rendimiento del negocio.
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <SkeletonImage
              src="/7.png"
              alt="logo"
              width={570}
              height={451}
              className="w-full"
            />
            <div className="absolute inset-0 z-2 w-full h-full">
              <div className="commen-transition solution-y px-5 py-3 md:px-[46px] md:py-[30px] flex flex-col justify-end h-full">
                <div className="text-[18px] md:text-[20px] text-white md:leading-[30px] mb-4 font-bold">
                  Integración Personalizada
                </div>
                <div className="text-[12px] md:text-[16px] text-white md:leading-6 md:min-h-[120px] tracking-[-0.18px]">
                  Ofrecemos API/SDK flexibles que permiten una integración
                  rápida y procesos de pago altamente personalizados.
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainPage>
    </div>
  );
};

export const Title = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "scrollText text-[26px] md:text-[40px] md:leading-[50px] xl:text-[60px] xl:leading-20 2xl:text-[72px] 2xl:leading-[108px] font-semibold",
        className
      )}
    >
      {title}
    </div>
  );
};
