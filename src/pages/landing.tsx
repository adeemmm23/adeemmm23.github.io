import {useState} from 'react';
import {Button} from "@/components/ui/button.tsx";

const Landing = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div className={'h-full w-full flex justify-center pt-40'}>
            <div className={"flex flex-col items-center"}>
            <p className={"max-w-3xl text-5xl font-semibold text-center"}>This Website is for the Redlab challenge , Come back soon for any <span className={"text-rose-500"}>Updates</span></p>
            <p className={"text-xl font-normal text-center text-muted-foreground mt-4"}>Enzel 3al Button lin yekmel il site 👀</p>
            <Button onClick={handleClick} className={"text-sm w-fit mt-8"} size={"sm"} variant={"default"}>
                Click me
            </Button>
                <p className={"text-2xl font-semibold mt-4 text-center"}>You clicked <span className={"text-blue-500"}>{count}</span> times</p>
            </div>
        </div>
    );
};

export default Landing;
