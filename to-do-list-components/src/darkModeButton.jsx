import React, { useState } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';


export default ({ toggleTheme }) => {
    const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    toggleTheme();
  };

  return (
    <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={20}
    />
  );
}