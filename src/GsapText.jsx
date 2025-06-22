import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapText = () => {
  useGSAP(() => {
    gsap.to("#text", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.inOut",
    })
    gsap.fromTo(".paragraph", {
        opacity: 0,
        y: 20,
        }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.inOut",
        delay: 0.5,
        stagger: 0.1

    });
  }, []);

  return (
    <section>
      <h1 id="text" className="opacity-0 translate-y-10">
        GsapText
      </h1>
      <div>
        <p className="mt-5 text-gray-500 paragraph flex flex-direction-col">
          we can use same method like
          <code>gsap.to()</code>, <code>gsap.from()</code>,
          <code>gsap.fromTo()</code>, and <code>gsap.timeline()</code> to
          animate text.
        </p>
      </div>
    </section>
  );
};
export default GsapText;
