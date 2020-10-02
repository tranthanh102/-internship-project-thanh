import React, { useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Logo from "assets/images/logo.png";
import User from "assets/images/user.png";
import {
  SearchIcon,
  CartIcon,
  CaretDownIcon,
  BarsIcon,
  CloseIcon,
  PlusIcon,
} from "components/icons/icons";

export const Header = () => {
  useEffect(() => {}, []);

  return (
    <div className="header">
      <div class="header-wrap section-wrap d-flex align-items-center justify-content-between">
        <div class="header-logo">
          <a href>
            <img src={Logo} />
          </a>
        </div>
        <div class="header-location">
          <p class="text-1">Chọn kho giao hàng</p>
          <select>
            <option>Hà Nội</option>
            <option>Hải Phòng</option>
            <option>Hải Dương</option>
            <option>Thanh Hóa</option>
            <option>Nghệ An</option>
            <option>Quảng Ninh</option>
          </select>
        </div>
        <div class="header-search d-flex align-items-center">
          <SearchIcon className="search-1" />
          <input
            type="text"
            placeholder="     Tìm Kiếm............................................."
          />
        </div>

        <div class="header-authen">
          <a href="">Đăng Nhập</a>
          <span>/</span>
          <a href="">Đăng Kí</a>
        </div>
        <div class="header-cart d-flex align-items-end">
          <CartIcon className="cart-1" />
          <span class="text-2">(0)</span>
        </div>
      </div>
      <div class="header-wrap list-menu">
        <ul class="section-wrap d-flex align-items-center justify-content-between">
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
    </div>
  );
};
