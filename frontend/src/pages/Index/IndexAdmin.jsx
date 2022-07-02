import "./indexAdmin.css";
import Logo from "../../assets/logo_white.png";
import { MdOutlineDashboard } from "react-icons/md";
import { GiOpenBook } from "react-icons/gi";
import { IoNewspaper } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
// import { BsSearch } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";

const IndexAdmin = () => {
    return (
        <div className="wrapper-index-admin">
            <div className="wrapper-menu-index-admin">
                <div>
                    <Link to="/">
                        <img src={Logo} alt="" className="logo-putih"/>
                    </Link> 
                </div>
                
                {/* <img src={Logo} alt="" className="logo-putih" /> */}
                <div className="menu-admin">
                    <NavLink
                    to="/dashboard"
                    activeClassName="active"
                    style={{ textDecoration: "none", color: "inherit" }}>
                        <div className="menu-admin-1">
                            <MdOutlineDashboard className="icon"/> 
                            <h3>Dashboard</h3>
                        </div>
                        
                    </NavLink>
                    <NavLink
                    to="/scholarship"
                    activeClassName="active"
                    style={{ textDecoration: "none", color: "inherit" }}
                    className="menu-admin-1">
                        <GiOpenBook className="icon"/>
                        <h3>Scholarship</h3>
                    </NavLink>
                    <NavLink
                    to="/news"
                    activeClassName="active"
                    style={{ textDecoration: "none", color: "inherit" }}
                    className="menu-admin-1">
                        <IoNewspaper className="icon"/>
                        <h3>News</h3>
                    </NavLink>
                </div>
                <div>
                    <div className="akun-admin">
                        <img src="https://github.com/dap23.png" alt="" className="img-admin"/>
                        <div className="profil">
                           <p><strong>Muhammad Daffa</strong></p> 
                           <p className="admin">Admin</p>
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
                <div className="header-admin">
                    <div>
                        <h1>Hello, Daffa!</h1>
                        <p>Let’s see what scholarship you have been added today!</p>
                    </div>
                    <div className="search-and-button">                            
                        <input 
                            className="search"
                            type="text"
                            placeholder="      Search"
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
                <div className="konten-grafik">
                    <p>ini buat bagannya nanti</p>
                </div>
            </div>
        </div>
    );
};

export default IndexAdmin;