import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import "./App.css";
import About from "./pages/About";
import Footer from './pages/Footer';
import Header from "./pages/Header";
import Home from "./pages/Home";
import Menu from './pages/Menu';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';

function App() {

  AOS.init();

  return (
    <div className="App">
      {/* page loading start */}
      {/* <div class="page-loader"></div> */}
      {/* page loading end */}
      <Header />
      <Home />
      <About />
      <Menu />
      <Testimonial />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
