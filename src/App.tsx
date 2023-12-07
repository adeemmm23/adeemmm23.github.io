import Landing from "@/pages/landing.tsx";
import SignInPage from "@/pages/signIn/sign-in-page.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import SignUpPage from "@/pages/signUp/sign-up-page.tsx";
import { Toaster } from 'sonner'
import Dashboard from "@/pages/dashboard/dashboard.tsx";

function App() {
  return (
    <>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Toaster />
            <main className={"h-screen"}>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} Component={Landing} />
                        <Route path={"/sign-in"} Component={SignInPage} />
                        <Route path={"/sign-up"} Component={SignUpPage} />
                        <Route path={"/dashboard"} Component={Dashboard} />
                    </Routes>
                </BrowserRouter>
            </main>
        </ThemeProvider>
    </>
  );
}

export default App;
