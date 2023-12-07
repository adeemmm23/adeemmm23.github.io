import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button.tsx";
import SignInForm from "@/pages/signIn/sign-in-form.tsx";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import SignUpForm from "@/pages/signUp/sign-up-form.tsx";

import NuitTree from "@/assets/nuit_tree.png";

export default function SignUpPage() {
  return (
    <>
      <div className="container relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 font-Inter">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white bg-zinc-900 dark:border-r lg:flex">
          <div className="absolute inset-0 bg-stars" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <img
              src="src/assets/logo.png"
              className={"backdrop-grayscale-50"}
              width={200}
              alt="logo"
            />
          </div>
          <img
            src={NuitTree}
            className={
              "absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 w-[38rem]"
            }
            alt="rocket"
          />
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Ce site a été conçu avec 💖 par l'équipe 'OutLawz' dans
                le cadre de la nuit de l'informatique&rdquo;
              </p>
              <footer className="text-sm">Toute l'équipe des Outlawz</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:m-8 md:mt-0 h-full">
          <nav className={" mt-10 flex  justify-between"}>
            <ModeToggle />
            <Link
              to={"/sign-in"}
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Se connecter
            </Link>
          </nav>
          <div className="mx-auto flex w-full mt-48 flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                S'inscrire
              </h1>
              <p className="text-sm text-muted-foreground">
                Saisissez votre cordonnées pour créer un compte.
              </p>
            </div>
            <SignUpForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              En cliquant sur continuer, vous acceptez nos{" "}
              <Link
                to={""}
                className="underline underline-offset-4 hover:text-primary"
              >
                Conditions d'utilisation
              </Link>{" "}
              and{" "}
              <Link
                to=""
                className="underline underline-offset-4 hover:text-primary"
              >
                Politique de confidentialité
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
