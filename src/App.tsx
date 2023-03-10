import "./App.css"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Alert from "./components/layout/Alert"
import Home from "./pages/Home"
import About from "./pages/About"
import User from "./pages/User"
import NotFound from "./pages/NotFound"
import Footer from "./components/layout/Footer"
function App(): JSX.Element {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />

      <main className="container mx-auto px-3 pb-12">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Alert />
                <Home />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/users/:login" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
