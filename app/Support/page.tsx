"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainPage } from "@/components/Page";
import SkeletonImage from "@/components/SkeletonImage";
import { Icon1, Icon2, Icon3, Icon4 } from "@/components/Svg";

export default function Solution() {
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    gsap.set(".SplitAnimation", { opacity: 1 });
    let tl = gsap.timeline();
    let tween;
    SplitText.create(".SplitAnimation", {
      type: "lines",
      mask: "lines",
      onSplit: (self) => {
        tween = gsap.from(self.lines, {
          rotationX: -100,
          transformOrigin: "50% 50% -160px",
          opacity: 0,
          duration: 1,
          ease: "power3",
          stagger: 0.3,
        });
        return tween;
      },
    });
    SplitText.create(".textAnimation", {
      type: "words",
      onSplit: (self) => {
        tween = gsap.from(self.words, {
          x: 150,
          opacity: 0,
          duration: 1,
          ease: "power4",
          stagger: 0.08,
          delay: 1,
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
    gsap.fromTo(
      ".second-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".second-card-wrap",
          start: "top 100%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);
  return (
    <div className="overflow-x-hidden">
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
        src="/8.png"
        alt="logo"
        width={3840}
        height={1270}
        pclass="rounded-none"
        className="min-h-[400px]"
      />
      <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center flex-col">
        <div className="mt-5 relative max-w-[1400px]  mx-auto px-5 md:px-[60px]">
          <div className="SplitAnimation text-[26px] md:text-[40px] md:leading-[50px] xl:text-[60px] xl:leading-20 2xl:text-[72px] 2xl:leading-[108px] font-bold text-white max-w-[1489px] text-center mx-auto mb-5 md:mb-[30px] 2xl:mb-[58px]">
            Integración
          </div>
          <div className="textAnimation text-[14px] md:text-[18px] text-white text-center mb-[81px] max-w-[927px] mx-auto">
            <span className="text-[32px]">Xentra Pax</span> ofrece una
            infraestructura de pago segura y lista para la regulación, diseñada
            para negocios que operan en entornos complejos y de alto
            cumplimiento.
          </div>
        </div>
      </div>
    </div>
  );
};

export const SecondItem = () => {
  const list = [
    {
      icon: Icon1,
      title: "Acuerdo Comercial",
      day: "1",
      time: "día hábil",
      cnt: "Finalizar modelo de negocio, precios, divisas admitidas y términos de liquidación con Xentra Pax",
    },
    {
      icon: Icon2,
      title: "Revisión de Cumplimiento",
      day: "1-2",
      time: "días hábiles",
      cnt: "Proporcionar registro de la empresa, licencia/exención, detalles del UBO, políticas de plataforma y otros documentos KYC/KYB",
    },

    {
      icon: Icon3,
      title: "Integración y Pruebas Técnicas",
      day: "3-5",
      time: "días hábiles",
      cnt: "Obtener credenciales de API, configurar sandbox para simulación de transacciones, pruebas de callbacks y comprobaciones de riesgo. Completar la configuración de redireccionamiento y marca para el Pago Alojado",
    },
    {
      icon: Icon4,
      title: "Puesta en Marcha",
      day: "",
      time: "Inmediata",
      cnt: "Tras la aprobación y las pruebas exitosas, cambiar a producción para transacciones en vivo. Vía rápida disponible sujeta a aprobación",
    },
  ];
  return (
    <div className="pt-[81px] pb-[137px] bg-[#F6F9FB] cursor-pointer">
      <MainPage>
        <Title
          className="mb-7 text-center"
          title="Proceso de Integración"
        ></Title>
        <div className="scrollText text-[24px] leading-6 text-[#000000] text-center mb-[50px]">
          ⚡ La incorporación acelerada está disponible para casos urgentes,
          sujeta a aprobación.
        </div>
        <div className="second-card-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[17px]">
          {list.map((i, index) => {
            const Icon = i.icon;
            return (
              <div
                key={index}
                className="second-card rounded-[10px] tech-border bg-white px-3.5 pt-14 pb-[38px]"
              >
                <Icon className="icon-hover mx-auto mb-[39px]" />
                <div className="text-center text-[14px] text-[#000000] font-semibold mb-1">
                  {i.title}
                </div>
                <div className="text-center text-[14px] text-[#8A879F] mb-7">
                  <span className="text-5 text-[#2051FF] font-semibold">
                    {i.day}
                  </span>{" "}
                  {i.time}
                </div>
                <div className="text-[#8A879F] text-[14px]">{i.cnt}</div>
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
      title: "Suite de API Integral ",
      name: "para creación de pedidos, consultas de estado, pagos masivos, conciliación y gestión de reembolsos",
    },
    {
      name: "",
      title:
        "Webhooks Asíncronos para notificaciones en tiempo real sobre éxito, fallo, alertas de fraude y eventos de disputa",
    },
    {
      title: "Contactos Técnicos y Comerciales Dedicados ",
      name: "para coordinación de extremo a extremo",
    },
    {
      name: "",
      title:
        "Soporte de Ciclo de Vida Completo desde pruebas en sandbox hasta la implementación en producción",
    },
    {
      title: "Opciones de Integración Personalizables ",
      name: "para escenarios avanzados (ej. callbacks en lista blanca, cuentas segregadas por moneda)",
    },
    {
      title:
        "Asistencia Tecnica 24/7 incluyendo canales de respuesta a emergenciasAsistencia Técnica 24/7incluyendo canales de respuesta a",
      name: "",
    },
  ];
  return (
    <div className="pt-32 pb-[167px] bg-white">
      <MainPage>
        <Title
          className="mb-[57px]"
          title="Soporte Técnico y Compromiso de Servicio"
        ></Title>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-x-5 gap-y-6 mb-[60px]">
          {list.map((i, index) => {
            return (
              <div
                key={index}
                className="rounded-3xl   bg-[#F6F9FB] px-8 py-4 three-card"
              >
                <div className="text-[20px] text-[#041D34] font-semibold">
                  {i.title} <span className="font-normal">{i.name}</span>
                </div>
              </div>
            );
          })}
        </div>
        <SkeletonImage
          pclass="card-img-scacel"
          className="card-img-scacel-img"
          src="/2.png"
          alt="logo"
          width={1201}
          height={497}
        />
      </MainPage>
    </div>
  );
};

export const FourItem = () => {
  return (
    <div className="pt-[102px] pb-[184px] bg-[#F6F9FB]">
      <MainPage>
        <Title className="mb-[92px]" title="Opciones de Integración"></Title>
        <div className="lg:flex justify-between items-center">
          <div className="flex-1 2xl:max-w-[525px]">
            <div className="text-[20px] text-[#041D34] mb-[30px] leading-[34px]">
              <span className="text-[30px] font-semibold">Xentra Pax</span>{" "}
              ofrece una infraestructura de pago segura y lista para la
              regulación, diseñada para negocios que operan en entornos
              complejos y de alto cumplimiento.
            </div>
            <div className="text-[20px] text-[#041D34] mb-[30px] leading-[30px]">
              Nuestra plataforma permite operaciones de Ingreso (Payin) y Pago
              (PayOut) a través de Peru, respaldadas por una sólida supervisión
              de cumplimiento y controles de riesgo en tiempo real.
            </div>
            <div className="text-[20px] text-[#041D34] mb-[54px] leading-[30px]">
              API RESTful compatible con el control total de pagos, abonos,
              retrollamadas (callbacks), conciliación y señales de riesgo
            </div>
            <Link
              href={"/About"}
              className="support-btn w-[214px] h-16 btn-bg-gradient flex items-center justify-center text-5 rounded-full text-white cursor-pointer"
            >
              Contáctanos
              <svg
                className="ml-3 support-btn-svg commen-transition "
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Mask group">
                  <mask
                    id="mask0_41_2153"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                  >
                    <rect
                      id="Rectangle 590"
                      width={20}
                      height={20}
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_41_2153)">
                    <g id="Group 667">
                      <path
                        id="Vector 85"
                        d="M3 10H16.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        id="Rectangle 589"
                        d="M10.0703 3L17.0707 10.0004C17.1097 10.0394 17.1097 10.1027 17.0707 10.1418L10.0703 17.1421"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </Link>
          </div>
          <SkeletonImage
            src="/3.png"
            alt="logo"
            width={461}
            height={461}
            className="mx-auto lg:mx-0"
          />
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
        "scrollText text-[26px] md:text-[40px] md:leading-[50px] xl:text-[60px] xl:leading-20 2xl:text-[72px] 2xl:leading-[108px] font-semibold ",
        className
      )}
    >
      {title}
    </div>
  );
};
