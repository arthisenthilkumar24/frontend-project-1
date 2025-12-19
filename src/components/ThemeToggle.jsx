import React, { useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    setDark(!dark);
    document.body.className = dark ? "light" : "dark";
  };

  return (
    <button className="theme-btn" onClick={toggle}>
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;