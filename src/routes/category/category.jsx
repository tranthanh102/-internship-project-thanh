import React, { useEffect } from "react";
import "./category.scss";
import { CategorySection } from "components/category-section/category-section";
import { Link } from "react-router-dom";
import mockupDataDiscount from "data/mockupDataDiscount";
import mockupDataBestSeller from "data/mockupDataBestSeller";
import mockupDataHot from "data/mockupDataHot";
import { connect } from "react-redux";
import iconAngleRight from "assets/icons/icon-angle-right.png";
import { Product } from "components/product/product";
import { useSelector, useDispatch } from "react-redux";
const Category = () => {
  const dataNew = useSelector((state) => state.mockupDataCategory)
  const banner = [
    require("assets/images/category-image-1.png"),
    require("assets/images/category-image-2.png"),
    require("assets/images/category-image-3.png"),
    require("assets/images/category-image-4.png"),
  ];

  useEffect(() => {}, []);

  return  ( 
    
  <div className="category-main d-flex flex-wrap justify-content-between">
  {dataNew.length !== 0 &&
    dataNew.map((item) => (
      <Product
        classComponent={"product col-lg-3 col-sm-4 col-6"}
        key={item.image}
        image={item.image}
        price={item.price}
        title={item.title}
        status={item.status.content}
      />
    ))}
  <div className="container">
  <Link to="/">
          Quay Lại <img src={iconAngleRight} />
        </Link>
  </div>
</div>
  )
};

export default Category;
