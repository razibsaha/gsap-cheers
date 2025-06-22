import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";


const GsapTimeline = () => {
  const timelineRef = useRef();
  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.to("#timeline", { 
        rotation: 360,
        repeat: -1,
        yoyo: true,
        x: 250,
        borderRadius: '100%', 
        duration: 2,
        ease: "back.inOut",
    });
    timeline.to("#timeline", { 
        rotation: 360,
        repeat: -1,
        yoyo: true,
        scale: 1.5,
        backgroundColor: "lightgreen",
        duration: 2,
        x: 500,
        borderRadius: '10%', 
        ease: "back.inOut",
    });
    timelineRef.current = timeline;
  });
  return (
    <section>
      <h1 className="mb-20">GsapTimeline</h1>
      <div id="timeline" className="h-24 w-24 bg-green-200 mt-5" ></div>
      <button onClick={()=> {
        const timeline = timelineRef.current;
        if(timeline && timeline.paused()) {
            timeline.play();
        } else if (timeline) {
            timeline.pause();
        }
      }}> Play/Pause</button>
    </section>
  );
};
export default GsapTimeline;
