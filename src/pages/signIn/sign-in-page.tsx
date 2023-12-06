import { Link } from "react-router-dom";


import { cn } from "@/lib/utils"
import {buttonVariants} from "@/components/ui/button.tsx";
import SignInForm from "@/pages/signIn/sign-in-form.tsx";

export default function SignInPage() {
    return (
        <>
            <div className="container relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 font-Inter">
                <Link
                    to={"/examples/authentication"}
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "md:absolute right-4 top-4 md:right-8 md:top-8 hidden"
                    )}
     >
                    Login
                </Link>
                 <div className="relative hidden h-full flex-col bg-muted p-10 text-white bg-zinc-900 dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-stars" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <img src="src/assets/logo.png" className={"backdrop-grayscale-50"} width={200}  alt="logo"/>
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;Ce site a été conçu avec 💖 par l'équipe 'OutLawz' dans le cadre de la nuit de l'informatique&rdquo;
                            </p>
                            <footer className="text-sm">Toute l'équipe des Outlawz</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:m-8 md:mt-0 mt-48">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Create an account
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your email below to create your account
                            </p>
                        </div>
                        <SignInForm />
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link
                                to={"/terms"}
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </Link>
                            and{" "}
                            <Link
                                to="/privacy"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}