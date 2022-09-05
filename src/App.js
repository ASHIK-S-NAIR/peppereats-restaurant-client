import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Restaurant from "./pages/Restaurant";
import AdminLogin from "./pages/AdminLogin";
import Reservation from "./pages/Reservation";
import CustomerLogin from "pages/CustomerLogin";
import OtpVerify from "pages/OtpVerify";
import CustomerSignup from "pages/CustomerSignup";
import AdminPanel from "pages/AdminPanel";
import AdminRoutes from "setup/auth-manager/AdminRoutes";

import Test from "pages/Test";

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
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/customerlogin" element={<CustomerLogin />} />
          <Route path="/otpverify" element={<OtpVerify />} />
          <Route path="/customersignup" element={<CustomerSignup />} />
          <Route
            path="/adminpanel/:currentTab"
            element={
              <AdminRoutes>
                <AdminPanel />
              </AdminRoutes>
            }
          />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
