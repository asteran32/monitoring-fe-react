import React from "react";
import { useHistory } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';
import userService from "../../service/user.service";

const Nav = () => {
    const history = useHistory();
    let currentUser = userService.getCurrentUser();

    const SignOut = () => {
        userService.logout();
        history.push("/");
        window.location.reload();
    };

    return(
        <div className="nav shadow-sm p-2 justify-content-end">
            {currentUser ? 
                <>
                    <div className="alarm-wrapper">
                        <div className="alarm-icon">
                            <i className="bi bi-bell-fill">
                                {/* <div className="notification"></div> */}
                            </i>
                        </div>
                    </div>
                    <div className="user-wrapper">
                        <div className="user-icon">
                            {/* <i className="bi bi-person-circle"/> */}
                            <NavDropdown title={currentUser.lastname} id="nav-dropdown">
                                <NavDropdown.Item eventKey="#">{}</NavDropdown.Item>
                                <NavDropdown.Item eventKey="#">Another action</NavDropdown.Item>
                                <NavDropdown.Item eventKey="#">Something else here</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={SignOut}>Sign out</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>
                </>
            :null}
        </div>
    );
};
export default Nav;