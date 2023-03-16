import React from 'react';

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="/react-logo.png" className="nav-logo" />
        <ul className="nav-items">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
