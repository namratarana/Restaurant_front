import AboutUs from "./components/aboutUs";
import Blog from "./components/blog";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Home from "./components/home";
import Menu from "./components/menu";
import Pricing from "./components/pricing";
import Reservation from "./components/reservation";
import Team from "./components/team";

function App() {
  return (
    <div className="App">
        <div>
          {/* Basic */}
          <title>Food Funday Restaurant - One page HTML Responsive</title>
          {/* <meta name="keywords" content />
          <meta name="description" content />
          <meta name="author" content /> */}
          {/* Site Icons */}
          {/* Modernizer */}
          {/*[if lt IE 9]>
            <![endif]*/
          }
          {/* <div id="loader">
            <div id="status" />
          </div> */}
        <Header/>
        <Home/>
        <AboutUs/>
        <Menu/>
        <Team/>
        <Gallery/>
        <Blog/>
        <Pricing/>
        <Reservation/>
        <Footer/>

        <a href="#" className="scrollup" style={{display: 'none'}}>Scroll</a>
        <section id="color-panel" className="close-color-panel">
          <a className="panel-button gray2"><i className="fa fa-cog fa-spin fa-2x" /></a>
          {/* Colors */}
          <div className="segment">
            <h4 className="gray2 normal no-padding">Color Scheme</h4>
            <a title="orange" className="switcher orange-bg" />
            <a title="strong-blue" className="switcher strong-blue-bg" />
            <a title="moderate-green" className="switcher moderate-green-bg" />
            <a title="vivid-yellow" className="switcher vivid-yellow-bg" />
          </div>
        </section>
        {/* ALL JS FILES */}
        {/* <script src="/js/all.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    
    <script src="/js/custom.js"></script> */}
       {/* ALL PLUGINS */}
      </div>
    </div>
  );
}

export default App;
