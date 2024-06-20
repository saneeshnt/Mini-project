import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../../../User/Headers/Header1/Header.css'; 
import { userStatus } from "../../../../Services/UserApi";

function Header() {
  const navigate = useNavigate();

  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleBrandDropdown = () => {
    setIsBrandOpen(!isBrandOpen);
    setIsCategoryOpen(false); // Close category dropdown when brand dropdown is toggled
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
    setIsBrandOpen(false); // Close brand dropdown when category dropdown is toggled
  };

  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { user } = await userStatus();
        if (user) {
          setLoggedIn(true);
          setUserName(user.username);
        } else {
          setLoggedIn(false);
          setUserName("");
        }
      } catch (error) {
        console.log("Error fetching status:", error);
        setLoggedIn(false);
        setUserName("");
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setUserName("");
    navigate("/login");
  };

  const handleLogin = () => navigate("/login");

  return (
    <div className='Header'>
      <div className='headerbrand'>
        <Link to="/">
          <h1 className='brand-name'>PHONE!X</h1>
        </Link>
      </div>
      <div className='header-options'>
        <ul>
          <li><Link to='/new'>NEW ARRIVALS</Link></li>
          <li className="dropdown">
            <div className="dropdown-btn" onClick={toggleBrandDropdown}>
              BRANDS
            </div>
            {isBrandOpen && (
              <div className="dropdown-menu">
                <ul>
                  <li><Link to='/i'>Apple</Link></li>
                  <li><Link to='/samsung'>Samsung</Link></li>
                  <li><Link to='/oneplus'>OnePlus</Link></li>
                  <li><Link to='/motorola'>Motorola</Link></li>
                  <li><Link to='/realme'>Realme</Link></li>
                </ul>
              </div>
            )}
          </li>
          <li className="dropdown">
            <div className="dropdown-btn" onClick={toggleCategoryDropdown}>
              CATEGORIES
            </div>
            {isCategoryOpen && (
              <div className="dropdown-menu">
                <ul>
                  <li><Link to='/camera'>PHOTOGRAPHY</Link></li>
                  <li><Link to='/gaming'>GAMING</Link></li>
                  <li><Link to='/battery'>BATTERY</Link></li>
                </ul>
              </div>
            )}
          </li>
          <li><Link to='/support'>SUPPORT</Link></li>
        </ul>
      </div>
      <div className='headersearch'>
        <input type="text" placeholder="Search..." />
        <button><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      <div className='header-icons'>
        <Link to="/cart" className="action-link">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
      <div className='login-button'>
        {loggedIn ? (
          <button className='btn' onClick={handleLogout}>Logout</button>
        ) : (
          <button className='btn' onClick={handleLogin}>Login</button>
        )}
      </div>
    </div>
  );
}

export default Header;
