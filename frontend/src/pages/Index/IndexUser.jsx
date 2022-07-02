import "./indexUser.css";
import Logo from "../../assets/logo_white.png";
import { GiOpenBook } from "react-icons/gi";
import { IoNewspaper } from "react-icons/io5";
import { BiTime } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { FiFilter } from "react-icons/fi";

const IndexUser = () => {
    return (
        <div className="wrapper-index-user">
            <div className="wrapper-menu-index-user">
                <div>
                    <Link to="/">
                        <img src={Logo} alt="" className="logo-putih"/>
                    </Link> 
                </div>

                <div className="menu-user">
                    <NavLink
                    to="/scholarship"
                    activeClassName="active"
                    style={{ textDecoration: "none", color: "inherit" }}>
                        <div className="menu-user-1">
                        <GiOpenBook className="icon"/>
                        <h3>Scholarship</h3>
                        </div>
                        
                    </NavLink>
                    <NavLink
                    to="/news"
                    activeClassName="active"
                    style={{ textDecoration: "none", color: "inherit" }}
                    className="menu-user-1">
                        <IoNewspaper className="icon"/>
                        <h3>News</h3>
                    </NavLink>
                    <NavLink
                    to="*"
                    activeClassName="active"
                    style={{ textDecoration: "none", color: "inherit" }}
                    className="menu-user-1">
                        <BiTime className="icon"/>
                        <h3>Activity</h3>
                    </NavLink>
                </div>
                <div>
                    <div className="akun-user">
                        <img src="https://avatars.githubusercontent.com/u/73681991?v=4" alt="" className="img-user"/>
                        <div className="profil">
                           <p><strong>Fitriani</strong></p> 
                           <p className="user">User</p>
                        </div>
                        <BiDotsVerticalRounded />
                    </div>
                    <div className="button">
                       <button className="button-logout">
                            <BiLogOut />
                            <p>Log Out</p>
                        </button> 
                    </div>
                </div>
            </div>
            <div className="konten">
                <div className="header-user">
                    <div>
                        <h1>Hello, Fitri!</h1>
                        <p>Let’s see what scholarship you have been looking for</p>
                    </div>
                    <div className="search-and-button">                            
                        <input 
                            className="search"
                            type="text"
                            placeholder="Search"
                            name="Search" />
                            {/* <BsSearch className="icon-search"/> */}
                        <button                     
                            className="button-filter"
                            type="filter"
                            aria-label="Filter">
                            <FiFilter />
                            Filter
                        </button>
                       
                    </div>
                </div>
                <div className="konten-grafik-user">
                    <p>ini buat bagannya nanti</p>
                </div>
            </div>
        </div>
    );
};

export default IndexUser;