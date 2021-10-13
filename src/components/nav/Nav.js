import userImg from "../../asset/img/1.jpeg";

const Nav = () => {
    const username = "Sheeran";

    return(
        <div className="nav shadow-sm p-2 justify-content-end">
            <div className="alarm-wrapper">
                <div className="alarm-icon">
                    <i className="bi bi-bell-fill">
                        <div className="notification"></div>
                    </i>
                </div>
            </div>
            <div className="user-wrapper">
                <div className="user-img">
                    <img src={userImg} alt="" />
                </div>
                <span>{username}</span>
            </div>
        </div>
    );
};
export default Nav;