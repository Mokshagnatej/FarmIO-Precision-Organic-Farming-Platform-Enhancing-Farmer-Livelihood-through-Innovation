import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchActive, setSearchActive] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchValue)}`;
      setSearchValue('');
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🌾</span>
          <span className="logo-text">FarmIO</span>
        </Link>

        <div className="nav-search-container">
          <form className={`nav-search ${searchActive ? 'active' : ''}`} onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search precision farming..."
              className="nav-search-input"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setSearchActive(true)}
              onBlur={() => setTimeout(() => setSearchActive(false), 200)}
            />
            <button type="submit" className="nav-search-btn">🔍</button>
          </form>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/technology">Technology</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/search" className="search-link">🔍 Search</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

