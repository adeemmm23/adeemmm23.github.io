import { Button } from "@/components/ui/button.tsx";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div
      className={
        "h-full text-white bg-gradient-to-b from-[#1e1e20] to-[#0e0e11] flex flex-col justify-between relative font-Inter"
      }
    >
      <nav className={"flex justify-between h-14 p-8 relative z-20"}>
        <ModeToggle />
        <div className={"grid grid-cols-2 gap-x-4 font-medium text-sm"}>
          <Button
            onClick={() => navigate("/sign-in")}
            className={"rounded-lg"}
            size={"sm"}
            variant={"transparent"}
          >
            Se connecter <span className={"ml-3"}>🪄</span>
          </Button>
          <Button
            onClick={() => navigate("/sign-up")}
            className={"rounded-lg"}
            size={"sm"}
            variant={"default"}
          >
            S'inscrire <span className={"ml-3"}>🔮</span>
          </Button>
        </div>
      </nav>

      <div
        className={"h-full w-full opacity-100 overflow-clip bg-stars absolute "}
      />

      <div className={`h-full flex justify-center items-center w-full `}>
        <div className={"relative"}>
          <div className={"flex flex-col items-center"}>
            <p
              className={
                "max-w-4xl text-4xl md:text-6xl font-semibold text-center"
              }
            >
              Si vous voulez voir de la{" "}
              <span
                className={
                  "bg-clip-text bg-gradient-to-t from-purple-600 to-pink-400 text-transparent"
                }
              >
                magie
              </span>
              , veuillez vous connecter ou créer un compte
            </p>
            <p
              className={
                "text-xl font-normal text-center text-muted-foreground mt-4"
              }
            >
              Soyez prêts pour l'aventure 🤯
            </p>
            <div className={"grid grid-cols-2 gap-x-4 mt-8"}>
              <Button
                onClick={() => navigate("/sign-in")}
                className={"text-sm rounded-full font-semibold"}
                size={"lg"}
                variant={"transparent"}
              >
                Se connecter <span className={"ml-3"}>🪄</span>
              </Button>
              <Button
                onClick={() => navigate("/sign-up")}
                className={"text-sm rounded-full font-semibold"}
                size={"lg"}
                variant={"transparent"}
              >
                S'inscrire <span className={"ml-3"}>🔮</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <footer></footer>
    </div>
  );
};

export default Landing;
