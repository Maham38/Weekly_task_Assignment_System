import { NavLink } from "react-router-dom";
import {
  FaClipboardCheck,
  FaChartPie,
  FaHistory,
  FaUserTie,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">

        <FaClipboardCheck className="logo-icon" />

        <div>
          <h2>SafeX Feedback</h2>
          <small>Weekly Task Assignment System</small>
        </div>

      </div>

      <ul className="nav-links">

        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            <FaChartPie />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/feedback"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            <FaClipboardCheck />
            Feedback Form
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            <FaHistory />
            History
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/leader-feedback"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            <FaUserTie />
            Leader Feedback
          </NavLink>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;