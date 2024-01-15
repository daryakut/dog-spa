import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Main from "./components/Main";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Main></Main>
    </div>
  );
}
function Products() {
  return (
    <div>
      <Header></Header>
      Hello Products
    </div>
  );
}

function SpaServices() {
  return (
    <div>
      <Header></Header>
      Spa Services
    </div>
  );
}

function BookAppointment() {
  return (
    <div>
      <Header></Header>
      bookAppointment
    </div>
  );
}
function Blog() {
  return (
    <div>
      {" "}
      <Header></Header>Blog
    </div>
  );
}
function AboutUs() {
  return (
    <div>
      {" "}
      <Header></Header>AboutUs
    </div>
  );
}
function ContactUs() {
  return (
    <div>
      {" "}
      <Header></Header>ContactUs
    </div>
  );
}

function NoPage() {
  return <div>No Page</div>;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/spa-services" element={<SpaServices />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
