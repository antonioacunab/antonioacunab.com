import {
         type Dispatch,
         type SetStateAction,
         useState,
       } from "react";

import { ColorsEnum } from "../../constants/colors";

import ArrowLeft  from "../react/icons/ArrowLeft";
import ArrowRight from "../react/icons/ArrowRight";

const storyFragments: string[] = [
    "My name is Antonio, I am a software developer based in Colombia, but this is far from where my story begins...",

    "My first approach to the working world was a personal venture when I was 13 years old, where I started selling snacks at school. The business was a success, until the school imposed restrictions on sales.",

    "After that, I tried something different: selling handmade keychains. At the time, social media was just starting to boom, I remember closing deals via BlackBerry Messenger (the WhatsApp of that era). It was a good business for its time, but not very scalable.",

    "The next thing I ventured into was a small baking business, which I ran for almost 10 years and helped me pay for university.",

    "Before finishing my degrees (Mechatronics and Electronics Engineering), I had my first real-world job experience, where I had the opportunity to work as a “Maintenance Intern” and learned a lot about the hospitality industry. However, just a few weeks later, I would face the decision of choosing my university graduation project.",

    "At that moment, without realizing it would define the course of my career, I had to choose between two options: one involving ships and renewable energies, and the other centered on electrical measurements and visualization through a web platform.",

    "If you didn’t skip anything, I think you already know which decision I made.",

    "Today, it’s been more than four years since I chose to pursue a career in software development. I can't say the other option was not a good one, but this one is something I’m truly passionate about. It allows me to do what I’ve always done: innovate, create, and deliver personalized solutions to both businesses and individuals. I live every day with the excitement of seeing a job well done come to life.",
];

export default function MyStory ()
{
    const [index, setIndex]: [number, Dispatch<SetStateAction<number>>] = useState(0);

    function increaseIndex (): void
    {
        const canIncreaseIndex: boolean = index < storyFragments.length - 1;

        if (canIncreaseIndex)
            setIndex(index + 1);

        console.log("increased")
    }

    function decreaseIndex (): void
    {
        const canDecreaseIndex: boolean = index > 0;

        if (canDecreaseIndex)
            setIndex(index - 1);

        console.log("decreased")
    }

    return (
        <div id="about-me-story"
            className="absolute bg-primary rounded-3xl shadow-[20px_20px] shadow-accent transition-all
                w-[80%] h-[60%] left-[10%] p-[7%]"
        >
            <h2 className="text-accent text-right font-nunito font-black text-3xl md:text-4xl lg:text-5xl">
                Who am I?
            </h2>
            <br/>
            <p className="text-base md:text-xl lg:text-2xl text-secondary">
                {storyFragments[index]}
            </p>
            <span className="absolute bottom-[10%] text-accent text-xl">
                {index + 1}/{storyFragments.length}
            </span>
            <div className="absolute flex justify-between bottom-[50px] right-[10%] w-[150px] h-[50px]">
                <ArrowLeft  id="arrow-previous" color={ColorsEnum.ACCENT} onClick={decreaseIndex}/>
                <ArrowRight id="arrow-next"     color={ColorsEnum.ACCENT} onClick={increaseIndex}/>
            </div>
        </div>
    );
};