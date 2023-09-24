import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import CheckoutForm from "./Pages/CheckoutPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import OrderSuccess from "./Pages/OrderSuccess";
import Signup from "./Pages/Signup";
import UserProfileModal from "./Components/Model";
function App() {

  

  return (
    <div>
      <div className="bg-slate-900 shadow-[0_0_5px_black]">
      <Navbar />
      </div>


      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<CheckoutForm />}/>
        <Route path="/success" element={<OrderSuccess />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/model" element={<UserProfileModal />}/>
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
