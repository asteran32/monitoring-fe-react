import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <>
            <div className="container">
                <div className="error-wrapper">
                    <div className="error-code">
                        <span>404</span>
                    </div>
                    <div className="error-text">
                        <h1>Sorry ,this page isn't available.</h1>
                        <p>The link you followed ma be broken, or the page may have been removed.</p>
                        <Link exact to= "/" className="">
                            <div className="error-home-btn">
                                <i className="bi bi-arrow-return-right"></i>
                                <span>Go back to Dashboard</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PageNotFound;
