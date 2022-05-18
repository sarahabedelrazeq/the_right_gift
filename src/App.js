import React from "react";
import { Route, Routes } from "react-router-dom";
import { useLanguage } from "./hooks";
import { Home } from "./pages";
import "./sass/index.scss";

function App() {
  const language = useLanguage();
  React.useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", language.lang);
    document.documentElement.setAttribute("dir", language.direction);
  }, [language]);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
