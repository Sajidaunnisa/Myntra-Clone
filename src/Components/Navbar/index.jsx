import { IoMdSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <nav className="navbar navbar-expand-lg shadow-sm ps-2 fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img
            src="images/myntra-logo.png"
            alt="myntra-logo"
            style={{ width: 53, height: 39 }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link sections ps-3 pe-4"
                aria-current="page"
                to="/men"
              >
                MEN
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link sections pe-4" to="/women">
                WOMEN
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link sections pe-4" to="/kids">
                KIDS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link sections pe-4" to="/home&living">
                HOME & LIVING
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link sections pe-4" to="/beauty">
                BEAUTY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link sections position-relative" to="/home">
                STUDIO
                <span className="position-absolute top-0 start-100 translate-middle badge text-danger">
                  NEW
                </span>
              </Link>
            </li>
          </ul>
          <form
            className="d-flex"
            role="search"
            style={{ width: "250px", height: "40px" }}
          >
            <div className="input-group search-input">
              <div className="input-group-text search-bar" id="btnGroupAddon">
                <IoMdSearch className="search-icon" />
              </div>
              <input
                type="text"
                className="form-control search-bar"
                placeholder="Search for products, Brand or more"
                aria-describedby="btnGroupAddon"
              />
            </div>
          </form>
          <div className="ps-3 pt-2 profile ">
            <p className="mb-0 text-center ">
              <CiUser className="nav-icon" />
            </p>
            <p className="nav-side-link">Profile</p>
            <div className="profile-menu">
              <div>
                <div className="ps-3 pt-2">
                  <p className="m-0 name-number">
                    <strong>Hello Sajida</strong>
                  </p>
                  <p className="m-0 name-number">6300******</p>
                </div>
                <hr />
                <a href="#/orders">Orders</a>
                <a href="#/wishlist">Wishlist</a>
                <a href="#/giftcards">Gift Cards</a>
                <a href="#/contact">Contact Us</a>
                <a href="#/insider">
                  Myntra Insider
                  <i className="badge text-bg-danger ms-1">New</i>
                </a>
                <hr />
                <a href="#/credit">Myntra Credit</a>
                <a href="#/coupons">Coupons</a>
                <a href="#/savedcards">Saved Cards</a>
                <a href="#/savedvpa">Saved VPA</a>
                <a href="#/savedaddresses">Saved Addresses</a>
                <hr />
                <a href="#/editprofile">Edit Profile</a>
                <a href="#/logout">Logout</a>
              </div>
            </div>
          </div>
          <Link className="pagelink" to="/wishlist">
            <div className="ps-3 pt-2">
              <p className="mb-0 text-center">
                <CiHeart className="nav-icon" />
              </p>
              <p className="nav-side-link">Wishlist</p>
            </div>
          </Link>
          <Link className="pagelink" to="/bag">
            <div className="ps-3 pt-2">
              <p className="mb-0 text-center d-block position-relative">
                <HiOutlineShoppingBag className="nav-icon" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">
                  {bag.length}
                </span>
              </p>
              <p className="nav-side-link">Bag</p>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
