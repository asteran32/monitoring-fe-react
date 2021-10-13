import { useState, useEffect } from "react";

import logo from "../../logo.svg"
import MenuItem from "./SidebarMenu";

// added more menuItems
export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "Monitor",
    exact: true,
    to: `/monitor`,
    iconClassName: "bi bi-camera-video",
    subMenus: [
      { name: "Camera", to: "/monitor/cam" },
      { name: "Videos", to: "/monitor/videos" },
    ],
  },
  { name: "Design", to: `/design`, iconClassName: "bi bi-diagram-3" },
  {
    name: "Content 2",
    exact: true,
    to: `/content-2`,
    iconClassName: "bi bi-hdd-rack",
    subMenus: [
      { name: "Courses", to: "/content-2/courses" },
      { name: "Videos", to: "/content-2/videos" },
    ],
  },
  {
    name: "Datas",
    exact: true,
    to: `/data`,
    iconClassName: "bi bi-cloud",
    subMenus: [
      { name: "data1", to: "/datas/1" },
      { name: "data2", to: "/datas/2" },
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
          console.log(next);
          if (next !== null) {
            next.classList.toggle("active");
          }
        });
      });
    }, []);

    // // imporvement over click function fo menuItem
    // useEffect(() => {
    //   let menuItems = document.querySelectorAll(".menu-item");

    //   menuItems.forEach((el) => {
    //     el.addEventListener("click", (e) => {
    //       const next = el.nextElementSibling;
    //       removeActiveClassFromSubMenu();

    //       menuItems.forEach((el) => el.classList.remove("active"));
    //       el.classList.toggle("active"); // menu-item toggle active
    //       console.log(inactive)
    //       if (next !== null) {
    //         if (inactive) { // 활성화 안되있을떄
    //           setInactive(!inactive)
    //         }
    //         next.classList.toggle("active"); // sub menu-item toggle active
    //       }
    //     });
    //   });
    // }, []);
  
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