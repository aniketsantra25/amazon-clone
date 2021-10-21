import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
    return (
        <nav className="header">

          {/* logo on the left */}
          <Link to="/">
          <img className="header__logo" 
          src= "http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
          </Link>
            
          {/* Search Box*/}
          <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
          </div>
          {/* 3 Links */}
          <div className="header__nav">
             {/* 1st link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="">Hello</span> 
                        <span>Sign In</span>
                    </div>  
                </Link>
             {/* 2nd link */}
             <Link to="/" className="header__link">
                    <div className="header__option">
                        <span>Returns</span> 
                        <span>& Orders</span>
                    </div>  
                </Link>

             {/* 3rd link */}
             <Link to="/" className="header__link">
                    <div className="header__option">
                        <span>Your</span> 
                        <span>Prime</span>
                    </div>  
                </Link>

             {/* 4th link */}
             

          </div>


          {/* Basket icon with the number */} 

        </nav>
    )
}

export default Header
