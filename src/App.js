import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Designs from "./routes/Designs";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import Process from "./routes/Process";
import Projects from "./routes/Projects";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route exact path='/' element={<Home />} errorElement={<ErrorPage />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/designs' element={<Designs />} />
          <Route exact path='/process' element={<Process />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
