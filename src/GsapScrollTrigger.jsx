import { useGSAP} from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef();
  useGSAP(() => {
    const pages = [...scrollRef.current.children];
    pages.map((page) => {
      gsap.to(page, {
        delay: 1,
        rotation: 360,
        duration: 2,
        borderRadius: "100%",
        scrollTrigger: {
          trigger: page,
          start: "bottom bottom",
          end: "top 20%",
          scrub: true,
        },
        ease: "power3.inOut",
      });
    });
  }, {scope: scrollRef});
  return (
    <>
      <h1>GsapScrollTrigger</h1>
      <section ref={scrollRef}>
        <div
          id="page1"
          className="h-[100vh] w-[100vw] bg-indigo-100 flex items-center justify-center"
        >
          <div id="box1" className="h-[10vh] w-[10vw] bg-amber-300"></div>
        </div>
        <div
          id="page2"
          className="h-[100vh] w-[100vw] bg-green-100 flex items-center justify-center"
        >
          <div id="box2" className="h-[10vh] w-[10vw] bg-red-300"></div>
        </div>
      </section>
    </>
  );
};
export default GsapScrollTrigger;
