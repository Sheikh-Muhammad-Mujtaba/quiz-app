"use client"

import React , { useState, useEffect } from "react";
import styled from "styled-components";

const Switch = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    

    
    <StyledWrapper>
      <label htmlFor="theme" className="theme">{}
        <span className="theme__toggle-wrap">
          <input
            id="theme"
            className="theme__toggle"
            type="checkbox"
            role="switch"
            name="theme"
            value="dark"
            checked={darkMode}
            onClick={toggleDarkMode}
          />
          <span className="theme__fill" />
          <span className="theme__icon">
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
          </span>
        </span>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Default */
.theme {
  display: flex;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
}

.theme__fill,
.theme__icon {
  transition: 0.3s;
}

.theme__fill {
  background-color: var(--bg);
  display: block;
  mix-blend-mode: difference;
  position: fixed;
  inset: 0;
  height: 100%;
  transform: translateX(-100%);
}

.theme__icon,
.theme__toggle {
  z-index: 0;
}

.theme__icon,
.theme__icon-part {
  position: absolute;
}

.theme__icon {
  display: block;
  top: 0.5em;
  left: 0.5em;
  width: 1.5em;
  height: 1.5em;
}

.theme__icon-part {
  border-radius: 50%;
  box-shadow: 0.4em -0.4em 0 0.5em hsl(0,0%,100%) inset;
  top: calc(50% - 0.5em);
  left: calc(50% - 0.5em);
  width: 1em;
  height: 1em;
  transition: box-shadow var(--transDur) ease-in-out,
		opacity var(--transDur) ease-in-out,
		transform var(--transDur) ease-in-out;
  transform: scale(0.5);
}

.theme__icon-part ~ .theme__icon-part {
  background-color: hsl(0,0%,100%);
  border-radius: 0.05em;
  top: 50%;
  left: calc(50% - 0.05em);
  transform: rotate(0deg) translateY(0.5em);
  transform-origin: 50% 0;
  width: 0.1em;
  height: 0.2em;
}

.theme__icon-part:nth-child(3) {
  transform: rotate(45deg) translateY(0.45em);
}

.theme__icon-part:nth-child(4) {
  transform: rotate(90deg) translateY(0.45em);
}

.theme__icon-part:nth-child(5) {
  transform: rotate(135deg) translateY(0.45em);
}

.theme__icon-part:nth-child(6) {
  transform: rotate(180deg) translateY(0.45em);
}

.theme__icon-part:nth-child(7) {
  transform: rotate(225deg) translateY(0.45em);
}

.theme__icon-part:nth-child(8) {
  transform: rotate(270deg) translateY(0.5em);
}

.theme__icon-part:nth-child(9) {
  transform: rotate(315deg) translateY(0.5em);
}

.theme__label,
.theme__toggle,
.theme__toggle-wrap {
  position: relative;
}

.theme__toggle,
.theme__toggle:before {
  display: block;
}

.theme__toggle {
  background-color: hsl(48,90%,85%);
  border-radius: 25% / 50%;
  box-shadow: 0 0 0 0.125em var(--primaryT);
  padding: 0.25em;
  width: 6em;
  height: 3em;
  -webkit-appearance: none;
  appearance: none;
  transition: background-color var(--transDur) ease-in-out,
		box-shadow 0.15s ease-in-out,
		transform var(--transDur) ease-in-out;
}



.theme__toggle:before {
  background-color: hsl(48,90%,55%);
  border-radius: 50%;
  content: "";
  width: 2.5em;
  height: 2.5em;
  transition: 0.3s;
}

.theme__toggle:focus {
  box-shadow: 0 0 0 0.125em var(--primary);
  outline: transparent;
}

/* Checked */
.theme__toggle:checked {
  background-color: hsl(198,90%,15%);
}

.theme__toggle:checked:before,
.theme__toggle:checked ~ .theme__icon {
  transform: translateX(3em);
}

.theme__toggle:checked:before {
  background-color: hsl(198,90%,55%);
}

.theme__toggle:checked ~ .theme__fill {
  transform: translateX(0);
}

.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(1) {
  box-shadow: 0.2em -0.2em 0 0.2em hsl(0,0%,100%) inset;
  transform: scale(1) translateX(0);
  top: 0.2em;
  left: -0.2em;
}

.theme__toggle:checked ~ .theme__icon .theme__icon-part ~ .theme__icon-part {
  opacity: 0;
}

.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(2) {
  transform: rotate(45deg) translateY(0.8em);
}

.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(3) {
  transform: rotate(90deg) translateY(0.8em);
}

.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(4) {
  transform: rotate(135deg) translateY(0.8em);
}

.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(5) {
  transform: rotate(180deg) translateY(0.8em);
}

.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(6) {
  transform: rotate(225deg) translateY(0.8em);
}

.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(7) {
  transform: rotate(270deg) translateY(0.8em);
}

.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(8) {
  transform: rotate(315deg) translateY(0.8em);
}

.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(9) {
  transform: rotate(360deg) translateY(0.8em);
}

.theme__toggle-wrap {
  margin: 0 0.75em;
}

@supports selector(:focus-visible) {
  .theme__toggle:focus {
    box-shadow: 0 0 0 0.125em var(--primaryT);
  }

  .theme__toggle:focus-visible {
    box-shadow: 0 0 0 0.125em var(--primary);
  }
}


/* Responsive Adjustments */
@media (max-width: 1024px) { /* Medium screens, tablets */
  .theme__toggle {
    width: 5em;
    height: 2.5em;
  }
  .theme__icon {
    
    width: 1.2em;
    height: 1.2em;
  }
  .theme__toggle:before {
    width: 2em;
    height: 2em;
  }


  .theme__fill {
    height: 100vh; 
    
  }

    .theme__toggle:checked:before,
.theme__toggle:checked ~ .theme__icon {
  transform: translateX(2.5em);
}

  .theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(1) {
    transform: scale(0.8) translateX(0em);
  }
}

@media (max-width: 768px) { /* Small screens, mobile */
  .theme__toggle {
    width: 4em;
    height: 2em;
  }
  .theme__icon {
    top: 0.3em;
    left: 0.3em;
    width: 1em;
    height: 1em;
  }
  .theme__toggle:before {
    width: 1.6em;
    height: 1.6em;
  }

   .theme__toggle:checked:before,
.theme__toggle:checked ~ .theme__icon {
  transform: translateX(1.8em);
}

  .theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(1) {
    transform: scale(0.7) translateX(0em);
  }
}

@media (max-width: 480px) { /* Extra small screens */
  .theme__toggle {
    width: 3.5em;
    height: 1.8em;
    padding: 0.2em;
  }
  .theme__icon {
    top: 0.2em;
    left: 0.2em;
    width: 0.9em;
    height: 0.9em;
  }
  .theme__toggle:before {
    width: 1.4em;
    height: 1.4em;
  }

  .theme__toggle:checked:before,
.theme__toggle:checked ~ .theme__icon {
  transform: translateX(1.6em);
}

    .theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(1) {
    transform: scale(0.6) translateX(0em);
  }
}

`;


export default Switch;
