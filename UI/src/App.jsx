import { BrowserRouter, Routes, Route } from "react-router-dom"

//importing every components
import Home from "./pages/home"
import About from "./pages/about"
import Profile from "./pages/profile"
import SignIn from "./pages/signin"
import Signup from "./pages/signup"
import Header from "./assets/small components/header"




function App() {



  return (
    <>
      <BrowserRouter> {/* used to enable client-side routing in a React application*/}
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
