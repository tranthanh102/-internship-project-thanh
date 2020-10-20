import React, { useState } from "react";
import "./category-section.scss";
import iconAngleRight from "assets/icons/icon-angle-right.png";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { Product } from "components/product/product";
import { AngleLeftIcon, AngleRightIcon } from "components/icons/icons";
import { useSelector, useDispatch } from "react-redux";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

export const CategorySection = ({ title, link, dataProduct, isSlider }) => {
  const dataNew = useSelector((state) => state.mockupDataCategory);
  const dataSeller = useSelector((state) => state.mockupDataSeller);
  const dataSelling = useSelector((state) => state.mockupDataSelling);
  const dataHots = useSelector((state) => state.mockupDataHots);
 
  return (
    <div className="container">
      <div className="category-section section-wrap align-items-center justify-content-center">
        <h2 className="title-block">SẢN PHẨM MỚI NHẤT</h2>
        <Link to="/category/:category">
          Xem tất cả <AngleRightIcon />
        </Link>
      </div>
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
      </div>
      
      <div className="category-section section-wrap align-items-center">
        <h2 className="title-block">SẢN PHẨM KHUYẾN MÃI</h2>
        <Link to="/category/:category">
          Xem tất cả <img src={iconAngleRight} />
        </Link>
        <div className="category-carousel section-wrap d-flex">
          <AliceCarousel
            dotsDisabled={true}
            duration={500}
            items={dataSeller}
            responsive={{
              320: { items: 1 },
              425: { item: 2 },
              768: { items: 3 },
              1024: { items: 4 },
            }}
          >
            {dataSeller.length !== 0 &&
              dataSeller.map((item) => (
                <Product
                  classComponent={"product"}
                  image={item.image}
                  key={item.image}
                  price={item.price}
                  sale={item.sale}
                  title={item.title}
                  status={item.status.content}
                />
              ))}
          </AliceCarousel>
        </div>
      </div>
      <div className="category-section section-wrap align-items-center">
        <h2 className="title-block">SẢM PHẨM BÁN CHẠY</h2>
        <Link to="/category/:category">
          Xem tất cả <img src={iconAngleRight} />
        </Link>
        <div className="category-carousel section-wrap d-flex">
          <AliceCarousel
            dotsDisabled={true}
            duration={500}
            items={dataSelling}
            responsive={{
              320: { items: 1 },
              425: { item: 2 },
              768: { items: 3 },
              1024: { items: 4 },
              1440: { items: 4 },
            }}
          >
            {dataSelling.length !== 0 &&
              dataSelling.map((item) => (
                <Product
                  classComponent={"product"}
                  image={item.image}
                  key={item.image}
                  price={item.price}
                  sale={item.sale}
                  title={item.title}
                  status={item.status.content}
                />
              ))}
          </AliceCarousel>
        </div>
      </div>
      <div className="category-section section-wrap align-items-center">
        <h2 className="title-block">SẢM PHẨM NỔI TIẾNG</h2>
        <Link to="/category/:category">
          Xem tất cả <img src={iconAngleRight} />
        </Link>
        <div className="category-carousel section-wrap d-flex">
          <AliceCarousel
        
            dotsDisabled={true}
            duration={500}
            items={dataHots}
            responsive={{
              320: { items: 1 },
              425: { item: 2 },
              768: { items: 3 },
              1024: { items: 4 },
              1440: { items: 4 },
            }}
          >
            {dataHots.length !== 0 &&
              dataHots.map((item) => (
                <Product
                  classComponent={"product"}
                  image={item.image}
                  key={item.image}
                  price={item.price}
                  sale={item.sale}
                  title={item.title}
                  status={item.status.content}
                />
              ))}
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
};
