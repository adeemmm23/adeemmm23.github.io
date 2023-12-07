import Landing from "@/pages/landing.tsx";
import SignInPage from "@/pages/signIn/sign-in-page.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import SignUpPage from "@/pages/signUp/sign-up-page.tsx";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <main className={"h-screen"}>
          <BrowserRouter>
            <Routes>
              <Route path={"/"} Component={Landing} />
              <Route path={"/sign-in"} Component={SignInPage} />
              <Route path={"/sign-up"} Component={SignUpPage} />
            </Routes>
          </BrowserRouter>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
