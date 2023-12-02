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
        <div className={`h-full w-full flex justify-center pt-40`} style={{backgroundColor : localColor!}}>
            <div className={"flex flex-col items-center"}>
            <p className={"max-w-3xl text-4xl md:text-6xl font-semibold font-Inter text-center"}>This Website is for the Redlab challenge , Come back soon for any <span className={"text-rose-500"}>Updates</span></p>
            <p className={"text-xl font-normal text-center text-muted-foreground mt-4"}>Enzel 3al Button lin yekmel il site 👀</p>
            <Button onClick={handleClick} disabled={count == 17} className={"text-sm w-fit mt-8"} size={"sm"} variant={"default"}>
                Click me exactly 17 times
            </Button>
                <p className={"text-sm select-none font-semibold text-neutral-600 mt-2 text-center"}>You clicked <span className={"text-blue-500"}>{count}</span> times</p>
            </div>
        </div>
    );
};

export default Landing;
