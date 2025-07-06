import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../../constants";
import gsap from "gsap";
import { SplitText } from "gsap/all";
gsap.registerPlugin(SplitText);

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create("#contact h2", { type: "words" });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'power1.inOut'
        });
        timeline.from(titleSplit.words, {
            yPercent: 100,
            opacity: 0,
            duration: 1.5,
            stagger: 0.1,
        })
        .from('#contact h3,#contact p', {
            yPercent: 100,
            opacity: 0,
            stagger: 0.1,
        })
        .to('#f-right-leaf', {
            y: '-5',
            duration: 1,
            ease: 'power1.inOut',
        })
        .to('#f-left-leaf', {
            y: '-5',
            duration: 1,
            ease: 'power1.inOut',
        }, '<')
    }, []);

    return (
        <footer id="contact">
            <img
                src="/images/footer-left-leaf.png"
                alt="leaf-left"
                id="f-left-leaf"
            />
            <img
                src="/images/footer-right-leaf.png"
                alt="leaf-right"
                id="f-right-leaf"
            />

            <div className="content">
                <h2>Where to find Us</h2>

                <div>
                    <h3>Visit Our Bars</h3>
                    <p>18/08, Alok Dia Road, #404, Los Dhaka, CD 80099</p>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <p>(444) 898-4084</p>
                    <p>hello@razibsaha.com</p>
                </div>

                <div>
                    <h3>Open Everyday</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>
                            {time.day} : {time.time}
                        </p>
                    ))}
                </div>

                <div>
                    <h3>Socials</h3>
                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.name}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                <img src={social.icon} alt={social.name} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
