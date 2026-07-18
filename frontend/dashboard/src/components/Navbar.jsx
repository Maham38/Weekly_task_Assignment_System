import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-secondary-subtle shadow-sm">

      <div className="container-fluid">

        <Link
          className="navbar-brand text-dark fw-bold"
          to="/hr-dashboard"
        >
          HR Dashboard
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div
          className="collapse navbar-collapse"
          id="menu"
        >

          <ul className="navbar-nav ms-auto">


            <li className="nav-item">
              <Link
                className="nav-link text-dark fw-semibold"
                to="/summary"
              >
                Summary
              </Link>
            </li>


            <li className="nav-item">
              <Link
                className="nav-link text-dark fw-semibold"
                to="/task-status"
              >
                Task Status
              </Link>
            </li>


            <li className="nav-item">
              <Link
                className="nav-link text-dark fw-semibold"
                to="/leaderboard"
              >
                Leaderboard
              </Link>
            </li>


            <li className="nav-item">
              <Link
                className="nav-link text-dark fw-semibold"
                to="/recent-activity"
              >
                Recent Activity
              </Link>
            </li>


          </ul>

        </div>

      </div>

    </nav>
  );
}