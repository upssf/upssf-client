import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/Mission">
                  Our Mission
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Officers">
                  Officers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Scholars">
                  Our Scholars
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-auto order-0">
            <Link className="navbar-brand mx-auto" to="/">
              <h2>U.P. Silak Silab Foundation</h2>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".dual-collapse2"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                            <a className="nav-link disabled" to="#">Blog (Coming Soon)</a>
                        </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="mailto:upssfchicago@gmail.com">
                  upssfchicago@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default NavBar;
