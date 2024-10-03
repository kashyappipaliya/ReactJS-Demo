import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Redirect to the search results page with the search query
    window.location.href = `/search?query=${encodeURIComponent(searchTerm)}`;
    console.log('Searching for:', searchTerm);
  };

  const handleReset = () => {
    setSearchTerm(''); // Clear the search term
    // Redirect to the search page without any query
    window.location.href = '/';
  };

  return (
<nav className={`navbar navbar-expand-lg 
    ${
      props.mode === 'dark' ? 'navbar-dark bg-dark text-white' : 
      props.greenmode === 'darkgreen' ? 'navbar-dark bg-success text-white' : 
      props.greenmode === 'lightgreen' ? 'navbar-light bg-light text-dark' : 
      props.greenmode === 'greenlight' ? 'navbar-light bg-success text-dark' : 
      'navbar-light bg-light text-dark'
    }
`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">{props.aboutText}</a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button className="btn btn-primary me-2" type="submit">Search</button>
            <button className="btn btn-primary" type="button" onClick={handleReset}>
              Reset
            </button>
          </form>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
            <input 
              className="form-check-input" 
              onClick={props.toToggleMode} 
              type="checkbox" 
              role="switch" 
              id="flexSwitchCheckDefault" 
              aria-checked={props.mode === 'dark'} 
              defaultChecked={props.mode === 'dark'} // Ensure switch reflects the correct state
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>

          <div className={`form-check form-switch text-${props.greenmode === 'greenlight' ? 'darkgreen' : 'lightgreen'} mx-2`}>
            <input 
              className="form-check-input" 
              onClick={props.toGreenToggleMode} 
              type="checkbox" 
              role="switch" 
              id="flexSwitchCheckGreen" 
              aria-checked={props.greenmode === 'darkgreen'} 
              defaultChecked={props.greenmode === 'darkgreen'} // Ensure switch reflects the correct state
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckGreen">Enable Green Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}


// title page is a isRequired props has passing in a components requied not passed error thwon 
// otherwise defaultprops is not comment default props  example title and about written is print in component navber etc 
Navbar.propTypes = {title:PropTypes.string.isRequired, 
                    aboutText:PropTypes.string
}

// Navbar.defaultProps = {
//     'title':'Welcome TO NAVEBAR',
//     'aboutText':'Welcome to ABOUT PAGE',
// }