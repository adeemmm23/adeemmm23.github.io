import Landing from "@/pages/landing.tsx";
import SignInPage from "@/pages/signIn/sign-in-page.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
        <div>
            <main className={"h-screen"}>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} Component={Landing} />
                        <Route path={"/sign-in"} Component={SignInPage} />
                    </Routes>
                </BrowserRouter>

            </main>
        </div>
    </>
  )
}

export default App
