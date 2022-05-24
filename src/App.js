import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useLanguage, useTheme } from "./hooks";
import { Home } from "./pages";
import "./sass/index.scss";

function App() {
  const theme = useTheme();
  const language = useLanguage();
  const themeName = useSelector((state) => state.app.theme);

  React.useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", language.lang);
    document.documentElement.setAttribute("dir", language.direction);
    document.documentElement.style.backgroundColor = theme.bg;
  }, [language, theme]);
  
  return (
    <div id="app" className={themeName}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;