import React, { useEffect, useState } from "react";

import logo from "../../logo.svg"
import MenuItem from "./SidebarMenu";

// added more menuItems
export const menuItems = [
  {
    name: "Overview",
    exact: true,
    to: "/overview",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "Monitor",
    exact: true,
    to: `/monitor`,
    iconClassName: "bi bi-camera-video",
  },
  {
    name: "Server",
    exact: true,
    to: `/server`,
    iconClassName: "bi bi-hdd-rack",
  },
  { name: "Gateway", to: `/gateway`, iconClassName: "bi bi-diagram-3" },
  {
    name: "Datas",
    exact: true,
    to: `/data`,
    iconClassName: "bi bi-cloud",
    subMenus: [
      { name: "Server", to: "/datas/server" },
      { name: "Camera", to: "/datas/cam" },
    ],
  },
  { name: "Admin", to: `/admin`, iconClassName: "bi bi-person" },
  { name: "Setting", to: `/setting`, iconClassName: "bi bi-tools" },
];

const Sidebar = (props) => {
    const [inactive, setInactive] = useState(false);
    
    useEffect(() => {
        if (inactive) {
          removeActiveClassFromSubMenu();
        }
        props.onCollapse(inactive); 

    }, [inactive])

    const removeActiveClassFromSubMenu = () => {
      document.querySelectorAll(".sub-menu").forEach((el) => {
          el.classList.remove("active");
      });
    };

    useEffect(() => {
      let menuItems = document.querySelectorAll(".menu-item");
      menuItems.forEach((el) => {
        el.addEventListener("click", (e) => {
          const next = el.nextElementSibling;
          removeActiveClassFromSubMenu();
          menuItems.forEach((el) => el.classList.remove("active"));
          el.classList.toggle("active");
          if (next !== null) {
            next.classList.toggle("active");
          }
        });
      });
    }, []);

    return(
        <div className={`sidebar ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="sidebar-toggle-btn" onClick={() => setInactive(!inactive)}>
                    {inactive ? (<i className="bi bi-list" />):(<i className="bi bi-x" />)}
                </div>
            </div>

            <div className="divider"></div>
            
            <div className="main-menu">
                <ul>
                    {menuItems.map((menuItem, index) => (
                        <MenuItem
                        key={index}
                        name={menuItem.name}
                        exact={menuItem.exact}
                        to={menuItem.to}
                        subMenus={menuItem.subMenus || []}
                        iconClassName={menuItem.iconClassName}
                        onClick={(e) => {
                            if (inactive) {
                                setInactive(false)
                            }
                        }}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;