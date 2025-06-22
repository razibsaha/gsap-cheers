import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GsapTo() {
  useGSAP(() => {
    gsap.from("#blue-box", {
      x: 250,
      borderRadius: 50,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: 'power1.inOut',
      backgroundColor: "lightblue",
      onComplete: () => {
        console.log("Animation completed!");
      },
    });
  }, []);

  return (
    <>
      <main>
        <h1>GsapTo</h1>
        <p>This is the GsapTo component.</p>
        <p></p>
        <div
          id="blue-box" className="h-16 w-16 bg-sky-500"
        ></div>
      </main>
    </>
  );
}
