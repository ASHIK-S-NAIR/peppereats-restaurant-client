import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./pages/About";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Restaurant from "./pages/Restaurant";
import AdminLogin from "./pages/AdminLogin";
// import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import Team from "./pages/Team";
// import Testimonial from "./pages/Testimonial";

function App() {
  AOS.init();

  return (
    <div className="App">
      {/* page loading start */}
      {/* <div class="page-loader"></div> */}
      {/* page loading end */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Restaurant />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
