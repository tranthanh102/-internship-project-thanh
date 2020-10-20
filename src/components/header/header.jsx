import React, { useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import Logo from "assets/images/logo.png";
import User from "assets/images/user.png";
import { Logout } from "../../redux/action/index";
import {
  SearchIcon,
  CartIcon,
  CaretDownIcon,
  BarsIcon,
  CloseIcon,
  PlusIcon,
} from "components/icons/icons";

export const Header = () => {
  const User = useSelector((state) => state.todoUser);
  useEffect(() => {}, []);
  const [visibleMenu, setvisibleMenu] = useState(false);
  const dispatch = useDispatch()
  const logOut = () => {
    dispatch(Logout());
  };
  const toggleMenu = () => {
    setvisibleMenu(!visibleMenu);
  };
  return (
    <div className="header">
      <div className="header-wrap section-wrap d-flex align-items-center justify-content-between">
        <div className="header-logo">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <div className="header-location">
          <p className="text-1">Chọn kho giao hàng</p>
          <select>
            <option>Hà Nội</option>
            <option>Hải Phòng</option>
            <option>Hải Dương</option>
            <option>Thanh Hóa</option>
            <option>Nghệ An</option>
            <option>Quảng Ninh</option>
          </select>
        </div>
        <div className="header-search d-flex align-items-center">
          <SearchIcon className="search-1" />
          <input
            type="text"
            placeholder="  Tìm Kiếm............................................."
          />
        </div>

        <div className="header-authen">
          {User.userName ? (
            <div>{User.userName}<div><button className="login-signup" onClick={logOut}>Logout</button></div></div>
          ) : (
            <div>
              <Link to="/sign-up">
                <a href="">Đăng Nhập</a>
              </Link>
              <span>/</span>
              <Link to="/sign-in">
                <a href="">Đăng Kí</a>
              </Link>{" "}
            </div>
          )}
        </div>
        <div className="header-cart d-flex align-items-end">
          <CartIcon className="cart-1" />
          <span className="text-2">(0)</span>
        </div>
      </div>

      <div className="header-wrap list-menu">
        <ul className="section-wrap d-flex align-items-center justify-content-between">
          <li>
            <a href="">Giày</a>
          </li>
          <li>
            <a href="">Túi Xách</a>
          </li>
          <li>
            <a href="">Balo</a>
          </li>
          <li>
            <a href="">Ví Bóp</a>
          </li>
          <li>
            <a href="">Dép $ Guốc</a>
          </li>
          <li>
            <a href="">Phụ Kiện</a>
          </li>
          <li>
            <a href="">Giff Card</a>
          </li>
          <li>
            <a href="">Sale Off</a>
          </li>
          <li>
            <a href="">New Arrival</a>
          </li>
          <li>
            <a href="">Summer Kisse</a>
          </li>
          <li>
            <a href="">Tin Tức</a>
          </li>
        </ul>
      </div>
      {/* <div className={classNames('nav-menu-mobile', { 'active': visibleMenu })} >
        <div className="nav-menu-overlay" onClick={toggleMenu} ></div>
        <div className="nav-menu-main">
          <div className="nav-close" onClick={toggleMenu}>
            <CloseIcon />
          </div>
          <div className="nav-user">
            <img src={User} alt=""/>
          </div>
          <ul>
            <li>
              <Link to="/">Giày</Link>
              <PlusIcon />
            </li>
            <li>
              <Link to="/">Túi Xách</Link>
              <PlusIcon />
            </li>
            <li><Link to="/">Balo</Link></li>
            <li>
              <Link to="/">Ví Bóp</Link>
              <PlusIcon />
            </li>
            <li><Link to="/">Dép & Guốc</Link></li>
            <li>
              <Link to="/">Phụ Kiện</Link>
              <PlusIcon />
            </li>
            <li><Link to="/">Giftcard</Link></li>
            <li><Link to="/">Sale Off</Link></li>
            <li><Link to="/">New arrival</Link></li>
            <li><Link to="/">Summer Kisses</Link></li>
            <li>
              <Link to="/">Tin Tức</Link>
              <PlusIcon />
            </li>
          </ul>
          <div className="line"></div>
          <ul>
            <li><Link to="/">Đăng ký</Link></li>
            <li><Link to="/">Đăng nhập</Link></li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};
