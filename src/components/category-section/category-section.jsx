import React from "react";
import "./category-section.scss";
import iconAngleRight from "assets/icons/icon-angle-right.png";
import AliceCarousel from "react-alice-carousel";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Product } from "components/product/product";
import { AngleRightIcon } from "components/icons/icons";
export const CategorySection = ({ title, link, dataProduct, isSlider }) => {
  const dataNew = useSelector((state) => state.mockupDataCategory);
  console.log(dataNew);
  return (
    <div className="container">
      <div className="category-section section-wrap align-items-center justify-content-center">
        <h2 className="title-block">SẢN PHẨM MỚI NHẤT</h2>
        <Link to="/">
          Xem tất cả <img src={iconAngleRight} />
        </Link>
      </div>
      <div className="category-main d-flex flex-wrap justify-content-between">
        {dataNew.length !== 0 &&
          dataNew.map((item) => (
            <Product
              image={item.image}
              price={item.price}
              title={item.title}
              status={item.status.content}
            />
          ))}
      </div>
    </div>
  );
};
