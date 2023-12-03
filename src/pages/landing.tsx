import {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button.tsx";
import { useLocalStorage } from 'usehooks-ts';
import confetti from "canvas-confetti";

const Landing = () => {

    const [count, setCount] = useState(0)
    const [localColor, setLocalColor] = useLocalStorage('color', localStorage.getItem('color'))


    // * function to generate random color
    const generateColor = () => {
        setLocalColor('#'+Math.random().toString(16).slice(-6));
    };


    // * function to handle click on button and generate color (if needed ) and a confetti 🥳
    const handleClick = () => {
        setCount(count + 1)
        if(count == 16) {
            confetti({})
        }
    }


// * if we want to generate color on page load we can use this useEffect
/*    useEffect(() => {
        generateColor()
    }, []);*/



    return (

        <div className={`h-full flex justify-center items-center w-full text-white bg-gradient-to-b from-[#1e1e20] to-[#0e0e11] relative font-Inter `} style={{/*backgroundColor : localColor!*/}}>
            <div className={"h-full w-full opacity-100 overflow-clip bg-stars absolute "}/>
            <div className={"relative"}>
                <div className={"flex flex-col items-center"}>
                    <p className={"max-w-3xl text-4xl md:text-6xl font-semibold text-center"}>Si vous voulez voir de la <span className={"bg-clip-text bg-gradient-to-t from-purple-600 to-pink-400 text-transparent"}>magie</span>, appuyez 17 fois sur ce bouton.</p>
                    <p className={"text-xl font-normal text-center text-muted-foreground mt-4"}>chaque clic est une aventure 🤯</p>
                    <Button onClick={handleClick} disabled={count == 17} className={"text-sm mt-8 rounded-full font-semibold"} size={"lg"} variant={"transparent"} >
                        Cliquez-moi <span className={"ml-3"}>🪄</span>
                    </Button>
                    <p className={"text-sm select-none font-semibold text-neutral-600 mt-2 text-center"}>vous avez cliqué <span className={"text-blue-500"}>{count}</span> fois</p>
                </div>
            </div>

        </div>
    );
};

export default Landing;
