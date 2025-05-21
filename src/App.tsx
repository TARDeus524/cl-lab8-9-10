import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import Booking from "./pages/Booking"
function App() {

  return (
    <div className="text-white">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/booking/:id" element={<Booking />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
