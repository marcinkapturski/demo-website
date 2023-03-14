import { GlobalStyles } from "styles/main";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "views/Home";
import Page from "views/Page";

function Root() {
  return (
  <HashRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        {/* <Route path="/page" element={<Page />} />
        <Route path="/page/:id" element={<Page />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default Root;
