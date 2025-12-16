"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainPage } from "@/components/Page";
import SkeletonImage from "@/components/SkeletonImage";
import { Icon8, Icon9, Icon10, Icon11, Icon12 } from "@/components/Svg";

export default function Case() {
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    gsap.set(".SplitAnimation", { opacity: 1 });
    let tl = gsap.timeline();
    let tween;
    SplitText.create(".SplitAnimation", {
      type: "words",
      mask: "words",
      onSplit: (self) => {
        tween = gsap.from(self.words, {
          opacity: 0,
          duration: 0.6,
          ease: "sine.out",
          stagger: 0.3,
        });
        return tween;
      },
    });
    tl.fromTo(
      ".titleAnimate",
      {
        opacity: 0,
      },
      {
        y: -20,
        duration: 1,
        stagger: 0.5,
        ease: "power2.out",
        opacity: 1,
      },
      1
    );
    gsap.utils.toArray(".scrollText").forEach((el: any) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          toggleActions: "restart none restart none",
        },
      });
      tl.fromTo(
        el,
        {
          y: -20,
          scale: 0.8,
          opacity: 0,
          transformOrigin: "50% 100%",
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "cubic-bezier(.16, 1, .3, 1)",
          immediateRender: false,
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
        src="/home-bg1.png"
        alt="logo"
        width={3840}
        height={1792}
        className="rounded-none min-h-[600px] md:min-h-[800px]"
      />
      <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center flex-col">
        <div className="px-5 md:px-[60px]">
          <div className="mt-5 relative max-w-[1489px]  mx-auto ">
            <div className="SplitAnimation text-[26px] md:text-[60px] md:leading-[70px] xl:text-[72px] xl:leading-[108px]  font-bold text-white max-w-[1489px] text-center mx-auto mb-5 md:mb-[30px] 2xl:mb-[58px]">
              Plataforma de optimización de transacciones digitales que impulsa
              el crecimiento empresarial local
            </div>
            <div className="titleAnimate text-[14px] md:text-[18px] text-white text-center mb-[81px] max-w-[927px] mx-auto">
              Tecnología SaaS ofrecida por Xentra Pax. No tocamos los fondos,
              solo aceleramos el flujo de efectivo comercial y la eficiencia
              operativa.
            </div>
            <Link
              href="/Solution"
              className="titleAnimate btn-bg-gradient  relative h-14 mx-auto  font-bold md:w-[368px] max-w-[368px] flex items-center justify-center rounded-full text-white text-[14px] md:text-[16px]"
            >
              Explorar nuestras soluciones técnicas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SecondItem = () => {
  const list = [
    {
      icon: Icon8,
      title: "Arquitectura de Alta Disponibilidad",
      cnt: "Funcionamiento continuo del 99.99%: Nuestra plataforma utiliza una arquitectura de microservicios distribuidos con redundancia geográfica, lo que garantiza la alta disponibilidad y la respuesta ultrarrápida del procesamiento de datos, incluso durante fallos localizados o periodos de máxima actividad.",
    },
    {
      icon: Icon9,
      title: "Estándares de Seguridad de Datos",
      cnt: "Cifrado y permisos avanzados: Toda la transmisión de datos utiliza el protocolo TLS 1.3 para el cifrado de extremo a extremo. La plataforma no almacena credenciales de fondos sensibles; solo procesa datos de transacciones anonimizados.",
    },
    {
      icon: Icon10,
      title: "Flexibilidad y Escalabilidad",
      cnt: "Diseño nativo de la nube, expansión flexible: La plataforma posee una excelente capacidad de escalabilidad horizontal, lo que le permite manejar fácilmente la enorme demanda de procesamiento de datos de transacciones impulsada por el crecimiento del mercado en Perú.",
    },
  ];
  return (
    <div className="pt-[110px] pb-[172px] bg-[#F6F9FB]">
      <MainPage>
        <Title
          className="max-w-[325px] md:max-w-[862px]  mb-[18px]"
          title="¿Por qué elegir la tecnologia Xentra Pax?"
        ></Title>
        <SubTitle
          className="scrollText mb-[106px]"
          title="Tenga la seguridad de: La garantía técnica y el compromiso de cumplimiento de Xentra Pax."
        />
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-[51px]">
          {list.map((i, index) => {
            const Icon = i.icon;
            return (
              <div
                className="solution-card scrollText commen-transition  bg-white py-[26px] px-5 rounded-2xl"
                key={index}
              >
                <Icon className="solution-card-icon commen-transition mb-[15px]" />
                <div className="font-semibold text-[18px] text-[#3E9BFF] leading-[30px] mb-[11px]">
                  {i.title}
                </div>
                <div className="text-[17px] text-[#8A879F] leading-[25px] tracking-[-0.18px]">
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
  return (
    <div className="pt-[191px] pb-[170px] bg-white">
      <MainPage>
        <Title className="mb-[18px]" title="Localización y "></Title>
        <Title
          className="mb-[18px] tracking-[-0.18px]"
          title="Cumplimiento (Enfoque en Perú)"
        ></Title>
        <SubTitle
          className="mb-11 scrollText"
          title="Compromiso profundo: Nuestro compromiso con el entorno empresarial local.
 "
        />
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-10">
          <div className="card-img-scacel scrollText bg-[#F6F9FB] rounded-[36px] p-5 md:p-10">
            <div className="overflow mb-8 rounded-[36px]">
              <SkeletonImage
                pclass="rounded-[24px]"
                src="/9.png"
                alt="logo"
                width={500}
                height={296}
                className="w-full card-img-scacel-img"
              />
            </div>

            <div className="text-[30px] md:text-[36px] text-[#2A2A2A] font-medium md:h-[108px] mb-6">
              Soporte Local en Perú
            </div>
            <div className="text-[16px] text-[#8A879F]">
              Hemos establecido equipos locales de soporte técnico y comercial
              en Perú, asegurando que usted pueda obtener servicios y respuestas
              oportunas y eficientes.
            </div>
          </div>
          <div className="card-img-scacel scrollText bg-[#F6F9FB] rounded-[36px] p-5 md:p-10">
            <div className="overflow mb-8 rounded-[36px]">
              <SkeletonImage
                pclass="rounded-[24px]"
                src="/10.png"
                alt="logo"
                width={500}
                height={296}
                className="w-full card-img-scacel-img"
              />
            </div>
            <div className="text-[30px] md:text-[36px] text-[#2A2A2A] font-medium md:h-[108px] mb-6">
              Compatibilidad de Estándares de Datos
            </div>
            <div className="text-[16px] text-[#8A879F]">
              La plataforma Xentra Pax tiene registros de transacciones y
              estructuras de datos que son totalmente compatibles con los
              estándares y requisitos de cumplimiento de datos comerciales
              locales de Perú.
            </div>
          </div>
        </div>
        <div className="card-img-scacel scrollText bg-[#F6F9FB] rounded-[36px] p-5 md:p-10 mt-10">
          <div className="overflow mb-[30px] rounded-[36px]">
            <SkeletonImage
              pclass="rounded-[24px]"
              src="/11.png"
              alt="logo"
              width={1120}
              height={368}
              className="w-full card-img-scacel-img"
            />
          </div>
          <div className="text-[30px] md:text-[36px] text-[#2A2A2A] font-medium mb-2">
            Conocimiento del Modelo Local
          </div>
          <div className="text-[16px] text-[#8A879F]">
            Nuestro motor de conocimiento de riesgos aprende y calibra
            continuamente los patrones de comportamiento de transacciones únicas
            del mercado peruano, proporcionando servicios de identificación de
            riesgos más precisos.
          </div>
        </div>
      </MainPage>
    </div>
  );
};

export const FourItem = () => {
  return (
    <div className="pt-[120px] pb-44 bg-[#F6F9FB]">
      <MainPage>
        <Title
          className="mb-[18px] text-center  2xl:leading-[78px]"
          title="¿Está listo para optimizar sus procesos comerciales utilizando tecnología de vanguardia?"
        ></Title>
        <SubTitle
          className="mb-[76px] text-center scrollText"
          title="Nuestro equipo de consultoría técnica está listo para diseñar la mejor solución de transacciones digitales para usted.
 "
        />
        <div className="relative cursor-pointer">
          <SkeletonImage
            src="/12.png"
            alt="logo"
            width={1200}
            height={240}
            className="w-full min-h-[180px]"
          />
          <div className="absolute inset-0 z-2 w-full h-full flex items-center justify-center flex-col">
            <Link
              href="/Solution"
              className="text-[16px] md:text-[24px] relative home-underline  text-white font-medium mb-10  flex items-center "
            >
              Ver Soluciones de Tecnología <Icon11 />
            </Link>
            <Link
              href="/About"
              className="support-btn commen-transition w-[214px] h-10 md:h-16 bg-white rounded-full text-[20px] flex items-center justify-center"
            >
              Contáctanos{" "}
              <Icon12 className="ml-3 support-btn-svg commen-transition" />
            </Link>
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
        "scrollText  text-[26px] md:text-[60px] md:leading-[70px] xl:text-[72px] xl:leading-[108px] font-semibold ",
        className
      )}
    >
      {title}
    </div>
  );
};

export const SubTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className={cn("text-[24px] leading-9 text-[#8A879F]", className)}>
      {title}
    </div>
  );
};
