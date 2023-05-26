import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from './component/Footer';
import FooterFiverr from "./component/FooterFiverr";
import Carousel from "./component/Carousel";
import NewCrousel from "./component/NewCrousel";
import BookNow from "./component/BookNow.js";
// import Collapse from "./component/CollapseComponent";
import CollapseComponent from "./component/CollapseComponent";
import { getMonth } from "./component/calender/utils";
import Calender from "./component/calender/Calender";
import SmallCarousel from "./component/SmallCarousel";

function App() {
  console.table(getMonth());
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' Component={Footer}/> */}
        {/* <Route path="/" Component={FooterFiverr} />
        <Route path="/carousel" Component={NewCrousel} />
        <Route path="/book" Component={BookNow} />
        <Route path="/collapse" Component={CollapseComponent} />
        <Route path="/calendar" Component={Calender} /> */}
        <Route path="/carousel" Component={SmallCarousel} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
