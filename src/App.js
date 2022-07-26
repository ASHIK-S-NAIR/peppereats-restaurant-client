import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import "./App.css";
import About from "./Componenets/About";
import Footer from './Componenets/Footer';
import Header from "./Componenets/Header";
import Home from "./Componenets/Home";
import Menu from './Componenets/Menu';
import Team from './Componenets/Team';
import Testimonial from './Componenets/Testimonial';

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
      {/* <Menu /> */}
      <Testimonial />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
