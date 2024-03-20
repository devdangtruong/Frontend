import React from "react";
import "../style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Grid,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import image1 from "../../../Images/ImagesAdvertise/577.webp";
import image2 from "../../../Images/ImagesAdvertise/605-aZeHO.webp";
import image3 from "../../../Images/ImagesAdvertise/607-gXTnu.webp";
import image4 from "../../../Images/ImagesAdvertise/609-ZyKyD.webp";
import { BsChevronRight } from "react-icons/bs";
import image5 from "../../../Images/ImagesAdvertise/581.webp";

function Advertiser() {
  const listProducts = [
    "Điện thoại",
    "Iphone",
    "Samsung",
    "Tablet",
    "Laptop",
    "Đồng hồ",
    "Thu cũ",
    "Hàng cũ",
    "Phụ kiện",
    "Âm thanh",
    "Sửa chữa",
    "Công nghệ",
  ];
  const listImages = [image1, image2, image5];
  return (
    <div>
      <div
        style={{
          borderRadius: "5px",
          backgroundColor: "#e9bbc3",
          fontSize: "large",
          fontWeight: "bold",
          padding: "0px 5px",
          margin: "10px 100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="warn-btn">!</div>
        <span style={{ color: "red" }}>
          NĂM THÌN MUA TÁO - MÃ ĐÁO THÀNH CÔNG: GIẢM GIÁ CÁC SẢN PHẨM CỰC HẤP
          DẪN
        </span>
        <div className="warn-btn">!</div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "stretch",

          borderRadius: "5px",
        }}
      >
        <div
          style={{
            width: "25%",
            boxShadow: "5px 5px 5px gray",
            borderRadius: "10px",
          }}
        >
          {listProducts.map((list, index) => (
            <div className="list-product" key={index}>
              <div>{list}</div>
              <BsChevronRight />
            </div>
          ))}
        </div>
        <div
          style={{
            width: "50%",
            boxShadow: "5px 5px 5px gray",
            borderRadius: "10px",
          }}
        >
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Grid, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            grid
            autoplay={{
              autoplay: {
                stopOnLastSlide: true,
              },
            }}
          >
            <SwiperSlide>
              <img src={image1} alt="" style={{ width: "700px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} alt="" style={{ width: "700px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} alt="" style={{ width: "700px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image4} alt="" style={{ width: "700px" }} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          style={{
            width: "25%",
            boxShadow: "5px 5px 5px gray",
            borderRadius: "10px",
          }}
        >
          {listImages.map((image, index) => (
            <img
              src={image}
              alt="image"
              style={{ width: "200px" }}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Advertiser;
