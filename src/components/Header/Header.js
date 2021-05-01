import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import bigLogo from "../../image/bigLogo2.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>
                {menuCollapse ? (
                  "NYM"
                ) : (
                  <div className="p-2 text-center">
                    <img
                      className="big-logo-image-style"
                      src={bigLogo}
                      alt=""
                    />
                  </div>
                )}
              </p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={false} icon={<FiHome />}>
                <Link to='/'>Home</Link>
              </MenuItem>
              <MenuItem icon={<FaList />}><Link to='/about'>About</Link></MenuItem>
              <MenuItem icon={<FaRegHeart />}><Link to='/resume'>Resume</Link></MenuItem>
              <MenuItem icon={<RiPencilLine />}><Link to='/blog'>Blog</Link></MenuItem>
              <MenuItem icon={<BiCog />}><Link to='/project'>Project</Link></MenuItem>
              <MenuItem icon={<BiCog />}><Link to='/contact'>Contact</Link></MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <p className="text-center">{new Date().getFullYear()}, Md Nayem Hossain</p>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
