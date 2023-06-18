import "./App.css";
// importing components from react-router-dom package
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import PageCopy from "./page/pageCopy";
import Page from "./page/pageCopy";
import More from "./seeMore/seeMore";
import Login from "./login/Login";
import Videogame from "./videogamePage/videogame";

function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageCopy />} />
          <Route path="page" element={<Page />} />
          <Route path="more" element={<More />} />
          <Route path="login" element={<Login />} />
          <Route path="videogame" element={<Videogame />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
