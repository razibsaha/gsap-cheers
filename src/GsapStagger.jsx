import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: -100,
      rotation: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 1,
        grid: [1, 1],
        axis: "y",
        ease: 'circ.inOut',
        from: 'right'
      },
    });
  }, []);
  return (
    <section>
      <h1>GsapStagger</h1>
      <div class="mt-20">
        <div class="flex gap-5">
          <div class="w-20 h-20 bg-indigo-200 rounded-lg stagger-box"></div>
          <div class="w-20 h-20 bg-indigo-300 rounded-lg stagger-box"></div>
          <div class="w-20 h-20 bg-indigo-400 rounded-lg stagger-box"></div>
          <div class="w-20 h-20 bg-indigo-500 rounded-lg stagger-box"></div>
          <div class="w-20 h-20 bg-indigo-600 rounded-lg stagger-box"></div>
          <div class="w-20 h-20 bg-indigo-700 rounded-lg stagger-box"></div>
          <div class="w-20 h-20 bg-indigo-800 rounded-lg stagger-box"></div>
          <div class="w-20 h-20 bg-indigo-900 rounded-lg stagger-box"></div>
        </div>
      </div>
    </section>
  );
};
export default GsapStagger;
