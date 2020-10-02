import React, { useState } from "react";
import "./home.scss";
import Gif from "assets/images/banner-gif.gif";
import mockupDataDiscount from "data/mockupDataDiscount";
import mockupDataBestSeller from "data/mockupDataBestSeller";
import mockupDataHot from "data/mockupDataHot";
import { HomepageCarousel } from "components/homepage-carousel/homepage-carousel";
import { Product } from "components/product/product";
import { useSelector } from "react-redux";
import Category from "routes/category/category";
import { CategorySection } from "components/category-section/category-section";
const Homepage = () => {
  return (
    <div className="homepage">
      <HomepageCarousel />
      <div className="container">
        <div className="hot-trend section-wrap">
          <h2 className="title-block">HOT TREND 2020</h2>
          <img src={Gif} />
        </div>
        <CategorySection />
      </div>
    </div>
  );
};

export default Homepage;
