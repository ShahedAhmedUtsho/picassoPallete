import  { useEffect, useState } from 'react';
'use client'
import { Sun,Moon } from 'phosphor-react'
const DarkMode = () => {




  // Function to toggle theme
 const currentThemes = localStorage.getItem('theme');
 
 const [photo,setPhoto] = useState(currentThemes === "dark" ? true : false)
  const toggleTheme = () => {
    setPhoto(!photo)
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    updateTheme();
  };

  // Function to update theme
  const updateTheme = () => {
    const isDarkTheme = localStorage.getItem('theme') === 'dark';
    const htmlElement = document.querySelector('html');
    if (isDarkTheme) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    // Update theme when component mounts
    updateTheme();
  }, []);

  return (
    <button id="themeToggle" onClick={toggleTheme}>
      {
         photo ? <Sun color='white' size={32} /> : <Moon size={32} /> 
      }
      
    </button>
  );
}

export default DarkMode;
