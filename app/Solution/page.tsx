"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { MainPage } from "@/components/Page";
import Contact from "@/components/Concat";
import SkeletonImage from "@/components/SkeletonImage";

const nav = [
  {
    id: 1,
    name: "Planificación de Asignación de Activos",
  },
  {
    id: 2,
    name: "Gestión de Riesgos y Planificación de Seguros",
  },
  {
    id: 3,
    name: "Servicios publicitarios",
  },
  {
    id: 4,
    name: "Consultoría de Inversión Empresarial",
  },
];
export default function Case() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 });
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const type = searchParams.get("type");
    const initialActive = type ? Number(type) : 0;
    setActive(initialActive);
    gsap.registerPlugin(SplitText);
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
          duration: 0.8,
          ease: "power3",
          stagger: 0.25,
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
  }, []);
  useEffect(() => {
    if (!containerRef.current) return;
    const tabs = containerRef.current.querySelectorAll(".tab-item");
    const activeTab = tabs[active] as HTMLElement;
    if (!activeTab) return;

    const left = activeTab.offsetLeft;
    const width = activeTab.offsetWidth;

    setLineStyle({ left, width });

    // 自动滚动居中
    const container = containerRef.current;
    const scrollTo = left - container.clientWidth / 2 + width / 2;

    container.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    });
  }, [active]);

  // 监听窗口变化，适配移动端各种缩放情况
  useEffect(() => {
    const update = () => {
      const tabs = containerRef.current?.querySelectorAll(".tab-item");
      const activeTab = tabs?.[active] as HTMLElement;
      if (!activeTab) return;

      setLineStyle({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
      });
    };
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active]);
  const handleClick = (index: number) => {
    setActive(index);
  };

  return (
    <div>
      <Servicios />
      <div className="pb-28 pt-[60px] bg-white">
        <MainPage>
          <div
            ref={containerRef}
            className="relative flex flex-nowrap  items-center justify-between px-8 h-11 overflow-x-auto no-scrollbar whitespace-nowrap gap-x-10 mb-[50px]"
          >
            {nav.map((i, index) => {
              return (
                <div
                  onClick={() => handleClick(index)}
                  key={i.id}
                  className={`tab-item  relative shrink-0
            text-[16px] leading-5  cursor-pointer transition-colors duration-200 
            ${
              active === index
                ? "text-[#FF922B]"
                : "text-[#999999] hover:text-[#FF922B]"
            }
          `}
                >
                  {i.name}
                </div>
              );
            })}
            <div
              className="absolute bottom-0 h-0.5 bg-[#FF922B] transition-all duration-300"
              style={{ left: lineStyle.left, width: lineStyle.width }}
            />
          </div>
          {active === 0 && <ItemsOne />}
          {active === 1 && <ItemsTwo />}
          {active === 2 && <ItemsThree />}
          {active === 3 && <ItemsFour />}
        </MainPage>
      </div>

      <Contact
        src="/s-about.png"
        title="¿Listo para potenciar sus capacidades digitales?"
        sub="Contáctenos para programar una consulta gratuita y descubrir cómo podemos aportar valor a su empresa."
      />
    </div>
  );
}

export const Servicios = () => {
  return (
    <div className="relative">
      <SkeletonImage
        src="/solution-bg.png"
        alt="logo"
        width={2880}
        height={1120}
        className="rounded-none min-h-[560px]"
      />
      <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center flex-col">
        <MainPage className="mt-20">
          <div className="SplitAnimation text-[30px] md:text-[40px] lg:text-[58px] font-bold text-white max-w-[971px] text-center mx-auto mb-7">
            Soluciones digitales integrales que impulsan el éxito de su empresa
          </div>
          <div className="titleAnimate text-[14px] md:text-[16px] text-white text-center mb-16">
            Ofrecemos servicios digitales completos que satisfacen diversas
            necesidades de las empresas modernas. Ya sea que esté buscando
            soluciones de software robustas, estrategias publicitarias precisas
            o consultoría empresarial profesional, podemos personalizar la mejor
            solución para usted.
          </div>
        </MainPage>
      </div>
    </div>
  );
};

export const ItemsOne = () => {
  const list = [
    "<span style='color:#FF922B;font-weight:bold'>Equipo profesional:</span>Un equipo compuesto por analistas de inversión, especialistas de mercado y consultores de asignación de activos brinda soporte integral.",
    "<span style='color:#FF922B;font-weight:bold'>Estrategias personalizadas:</span>Diseñamos un marco estratégico acorde a su situación financiera, objetivos y horizonte de inversión.",
    "<span style='color:#FF922B;font-weight:bold'>Análisis integral de activos:</span>Evaluamos factores macroeconómicos, ciclos sectoriales y riesgos del mercado para definir la combinación óptima.",
    "<span style='color:#FF922B;font-weight:bold'>Optimización continua:</span>Monitoreamos el rendimiento del portafolio y ajustamos las proporciones según los cambios del mercado.",
    "<span style='color:#FF922B;font-weight:bold'>Sistema de protección de riesgos:</span>Implementamos mecanismos que garantizan estabilidad ante escenarios de volatilidad.",
  ];
  return (
    <MainPage className="slide-from-solution">
      <TitleItem
        title="Planificación de Asignación de Activos"
        sub="Planificación científica del portafolio para lograr un crecimiento estable a largo plazo"
      />
      <SubItem>
        Nuestro enfoque de asignación de activos tiene como objetivo construir
        un portafolio diversificado, distribuyendo el riesgo de manera
        científica y capturando oportunidades de crecimiento del mercado. Ya sea
        que busque preservar, incrementar su patrimonio o mejorar la estructura
        de sus activos, diseñamos estrategias personalizadas según sus objetivos
        financieros y tolerancia al riesgo.
        <br />
        <br />
        Nuestro enfoque no solo se centra en proporcionar tecnología, sino en
        integrar la IA de manera fluida en sus procesos empresariales,
        asegurando que obtenga el máximo valor de estas tecnologías avanzadas.
      </SubItem>
      <SkeletonImage
        src="/p-1.png"
        alt="logo"
        width={2400}
        height={656}
        className="mb-10"
      />
      {list.map((i, index) => {
        return <CondItem key={index} title={i} />;
      })}
    </MainPage>
  );
};
export const ItemsTwo = () => {
  const list = [
    "<span style='color:#FF922B;font-weight:bold'>Evaluación integral de riesgos:</span>Identificamos riesgos financieros, de salud y operativos.",
    "<span style='color:#FF922B;font-weight:bold'>Soluciones de seguros personalizadas:</span>Diseñamos coberturas adaptadas a sus necesidades y presupuesto.",
    "<span style='color:#FF922B;font-weight:bold'>Estrategias de transferencia de riesgos:</span>Reducimos posibles pérdidas mediante seguros y herramientas de cobertura.",
    "<span style='color:#FF922B;font-weight:bold'>Protección a largo plazo:</span>Revisamos periódicamente la estructura de protección para mantenerla alineada con sus objetivos financieros.",
    "<span style='color:#FF922B;font-weight:bold'>Sistema de protección patrimonial:</span>Establecemos un marco sólido para la seguridad continua de su patrimonio.",
  ];
  return (
    <MainPage className="slide-from-solution">
      <TitleItem
        title="Gestión de Riesgos y Planificación de Seguros"
        sub="Identificación total de riesgos para construir una protección sólida de su patrimonio"
      />
      <SubItem>
        Mediante un sistema profesional de análisis, identificamos potenciales
        riesgos y ofrecemos estrategias efectivas de transferencia y
        planificación de seguros, garantizando que sus metas patrimoniales no se
        vean afectadas por imprevistos. Ya sea para riesgos personales o
        empresariales, brindamos protección integral.
        <br />
        <br />
        Podemos ofrecerle servicios integrales de gestión de riesgos y
        planificación de seguros, que incluyen, entre otros, análisis de riesgos
        personales, planificación de protección familiar, evaluación de riesgos
        empresariales y optimización de portafolios de seguros. Ya sea que
        necesite una identificación básica de riesgos o un plan de protección
        integral a largo plazo, podemos diseñar soluciones a la medida para
        satisfacer sus necesidades.
      </SubItem>
      <SkeletonImage
        src="/p-2.png"
        alt="logo"
        width={2400}
        height={656}
        className="mb-10"
      />
      {list.map((i, index) => {
        return <CondItem key={index} title={i} />;
      })}
    </MainPage>
  );
};

export const ItemsThree = () => {
  const list = [
    {
      title: "Google Ads:",
      cnt: "Estrategias de marketing en motores de búsqueda (SEM) para aumentar su visibilidad en línea",
    },
    {
      title: "Equipo profesional:",
      cnt: "Los miembros del equipo cuentan con amplia experiencia en la industria y conocimientos especializados para ofrecerle servicios profesionales y de alta calidad.",
    },
    {
      title: "Anuncios en Meta (Facebook e Instagram): ",
      cnt: " Aproveche el poder de las redes sociales para llegar a su audiencia objetivo",
    },
    {
      title: "Decisiones basadas en datos: ",
      cnt: "Utilizamos análisis de big data y estudios de mercado para desarrollar estrategias y planes de publicidad precisos.",
    },
    {
      title: "Diseño creativo de anuncios: ",
      cnt: "Diseños visuales atractivos y copys cautivadores",
    },
    {
      title: "Servicios personalizados:",
      cnt: "Entendemos que cada empresa tiene necesidades y objetivos únicos. Adaptamos nuestras soluciones publicitarias a las características, presupuesto y metas específicas de su negocio.",
    },
    {
      title: "Análisis de resultados publicitarios:",
      cnt: "Información impulsada por datos para optimizar continuamente su estrategia publicitaria.",
    },
    {
      title: "Casos de éxito y experiencia:",
      cnt: "Hemos proporcionado servicios publicitarios a numerosos clientes en diversas industrias, logrando resultados significativos. Al acumular y resumir experiencias, aplicamos modelos y estrategias exitosas a su proyecto, garantizando un sólido apoyo para sus campañas publicitarias.",
    },
  ];
  return (
    <MainPage className="slide-from-solution">
      <TitleItem
        title="Servicios publicitarios"
        sub="Marketing preciso para maximizar el retorno de su inversión publicitaria"
      />
      <SubItem>
        Estamos convencidos de que una publicidad exitosa no solo se trata de la
        transmisión de información, sino también de establecer una conexión
        profunda y resonante con la audiencia objetivo.
        <br />
        <br />
        Nos enfocamos en estrategias basadas en datos, conceptos de diseño
        creativos y técnicas de segmentación precisas para personalizar las
        soluciones publicitarias que mejor se adapten a las necesidades de su
        negocio.
      </SubItem>
      <SkeletonImage
        src="/p-3.png"
        alt="logo"
        width={2400}
        height={656}
        className="mb-10"
      />
      <div className="grid lg:grid-cols-2 gap-y-[20] gap-x-20">
        {list.map((i, index) => {
          return <GridTwo key={index} title={i.title} cnt={i.cnt} />;
        })}
      </div>
    </MainPage>
  );
};

export const ItemsFour = () => {
  const list = [
    {
      title: "Análisis de mercado:",
      cnt: "Comprender a fondo las tendencias de la industria y el panorama competitivo",
    },
    {
      title: "Evaluación de necesidades:",
      cnt: "Realizamos una comunicación detallada para entender el estado actual de su empresa, problemas y objetivos, y llevar a cabo una evaluación exhaustiva de las necesidades de consultoría.",
    },
    {
      title: "Optimización de procesos empresariales:",
      cnt: "Mejorar la eficiencia operativa y reducir costos",
    },
    {
      title: "Personalización de la solución: ",
      cnt: "Basándonos en la evaluación de necesidades, formamos un equipo de consultoría profesional para investigar y analizar a fondo, y diseñar una solución de consultoría personalizada.",
    },
    {
      title: "Estrategias de crecimiento: ",
      cnt: "Desarrollar planes de expansión empresarial sostenibles",
    },
    {
      title: "Implementación del proyecto:",
      cnt: "Colaboramos estrechamente con su equipo para llevar a cabo el proyecto de consultoría según el plan establecido, garantizando una ejecución efectiva de la solución.",
    },
    {
      title: "Transformación digital:",
      cnt: "Guiar a su empresa para mantener la competitividad en la era digital",
    },
    {
      title: "Evaluación de resultados:",
      cnt: "Evaluamos y retroalimentamos regularmente los resultados de la implementación de la solución de consultoría, ajustando y optimizando según sea necesario para asegurar que se alcancen los objetivos previstos.",
    },
  ];
  return (
    <MainPage className="slide-from-solution">
      <TitleItem
        title="Consultoría de Inversión Empresarial"
        sub="Perspectivas estratégicas para impulsar el crecimiento de su empresa"
      />
      <SubItem>
        En el complejo y cambiante entorno empresarial actual, las empresas
        necesitan decisiones acertadas y orientación profesional para lograr un
        crecimiento sostenible y una ventaja competitiva. Nuestros servicios de
        consultoría en gestión empresarial están diseñados para ofrecer
        soluciones profundas, integrales y personalizadas, que ayuden a su
        empresa a avanzar con solidez en el mercado y alcanzar sus objetivos
        estratégicos.
        <br />
        <br />
        Le ayudamos a definir la dirección y los objetivos a largo plazo de su
        empresa, elaborando planes estratégicos viables. A través de
        investigaciones de mercado detalladas, análisis de competencia y
        evaluación de recursos internos, determinamos la posición en el mercado,
        estrategias de productos o servicios, y rutas de crecimiento, asegurando
        que su empresa avance en la dirección correcta, aproveche las
        oportunidades del mercado y enfrente los desafíos.
      </SubItem>
      <SkeletonImage
        src="/p-3.png"
        alt="logo"
        width={2400}
        height={656}
        className="mb-10"
      />
      <div className="grid lg:grid-cols-2 gap-y-[20] gap-x-20">
        {list.map((i, index) => {
          return <GridTwo key={index} title={i.title} cnt={i.cnt} />;
        })}
      </div>
    </MainPage>
  );
};

export const TitleItem = ({ title, sub }: { title: string; sub: string }) => {
  return (
    <>
      <div className="font-bold text-[26px] md:text-[38px] lg:text-[48px]  text-[#2A2A2A] mb-3.5 text-center">
        {title}
      </div>
      <div className="text-6 text-[#8A879F] mb-10 text-center">{sub}</div>
    </>
  );
};

export const SubItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" text-[18px] leading-6 text-[#333333] mb-10">
      {children}
    </div>
  );
};

export const CondItem = ({ title }: { title: string }) => {
  return (
    <div
      className=" text-[16px] leading-[18px] text-[#8A879F] mb-5 last:mb-0"
      dangerouslySetInnerHTML={{ __html: title }}
    ></div>
  );
};

export const GridTwo = ({ title, cnt }: { title: string; cnt: string }) => {
  return (
    <div>
      <div className="text-[#FF922B] mb-[5px] text-[16px] leading-[18px] font-bold">
        {title}
      </div>
      <div className="text-[16px] leading-[18px] text-[#8A879F]">{cnt}</div>
    </div>
  );
};
