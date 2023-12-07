import React, {ChangeEvent, useEffect, useState} from 'react';
import {cn} from "@/lib/utils.ts";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Loader2, Github} from "lucide-react";
import { useTheme } from "@/components/theme-provider"
import validator from 'validator';


type ButtonVariant = "default" | "link" | "transparent" | "transparentDark" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
interface SignInProps extends React.HTMLAttributes<HTMLDivElement> {}
const SignInForm = ({className , ...props} : SignInProps) => {
    const { theme } = useTheme();
    const [isLoading, setIsLoading] =useState<boolean>(false);
    const [buttonVariant, setButtonVariant] =useState<ButtonVariant>("default");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);

        if (!validator.isEmail(e.target.value)) {
            setError('Veuillez saisir une adresse électronique valide');
        } else {
            setError('');
        }

    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        if (!validator.isStrongPassword(e.target.value)) {
            setErrorPassword('Veuillez saisir un mot de passe valide');
        }else {
            setErrorPassword('');
        }
    }

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    useEffect(() => {
        theme == "dark"? setButtonVariant("transparent") : setButtonVariant("transparentDark");
    }, [theme]);


    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-3">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            E-mail
                        </Label>
                        <Input
                            id="email"
                            placeholder="nom@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            value={email}
                            className={"rounded-full"}
                            onChange={handleChange}
                        />
                        <div>
                            { error && <p className={'text-sm p-2 transition-all duration-200 opacity-100 text-rose-500'}>{error}</p>}
                        </div>
                    </div>
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="Password">
                            Mot de passe
                        </Label>
                        <Input
                            id="Password"
                            type="Password"
                            placeholder={"mot de passe"}
                            autoCapitalize="none"
                            autoCorrect="off"
                            value={password}
                            onChange={handlePasswordChange}
                            disabled={isLoading}
                            className={"rounded-full"}
                        />
                        <div>
                            {errorPassword && <p className={'text-sm p-2 text-rose-500'}>{errorPassword}</p>}
                        </div>
                    </div>
                    <Button variant={buttonVariant} className={"rounded-full"}   disabled={isLoading}>
                        {isLoading && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        S'identifier par courriel
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Ou continuer avec
          </span>
                </div>
            </div>
            <Button variant="outline" className={"rounded-full"} type="button" disabled>
                {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Github className="mr-2 h-4 w-4" />
                )}{" "}
                Github
            </Button>
        </div>
    );
};

export default SignInForm;
