import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../pages/Detail.scss";

function Detail() {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  let { id } = useParams();

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/turbolar/" + id);
    const data = await res.json();
    setProducts(data);
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === products.detailImages.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? products.detailImages.length - 1 : prevSlide - 1));
  };

  return (
    <>
      <div className="detail_container">
        <div className="cars_card_detail">
          <div className="slider">
            {products.detailImages && (
              <div className="slider-content">
                <button onClick={prevSlide} className="prev-btn">
                  &#10094;
                </button>
                <img
                  src={products.detailImages[currentSlide]}
                  alt={`Product ${currentSlide}`}
                  className="slider-image"
                />
                <button onClick={nextSlide} className="next-btn">
                  &#10095;
                </button>
              </div>
            )}
          </div>
          <p className="title"><span className="elan_novu">Elan Novu:</span> {products.title}</p>
          <span className="title"> <span className="elan_novu">Masinin Durumu:</span>{products.desc}</span>
          <div className="desc_auto_detail">
            <p className="price"><span className="elan_novu">Masinin Qiymeti:</span>{products.price} $</p>
            <p className="model"><span className="elan_novu">Masinin Markasi:</span>{products.marka}</p>
            <p className="model"><span className="elan_novu">Masinin Modeli:</span>{products.model}</p>
            <p className="il_motor_km">
            <span className="elan_novu">Masinin Ili:</span> {products.il}
            </p>
            <p className="il_motor_km">
            <span className="elan_novu">Masinin Motoru: </span> {products.motor}
            </p>
            <p className="il_motor_km">
            <span className="elan_novu">Yurus:</span>  {products.km} km
            </p>
          </div>
        </div>

        <div className="odeme_detail_container">
          <div className="detail_price_container">
            <p className="detail_price">
              {products.price} <span className="detail_pricee">USD</span>{" "}
              <p className="detail_pric">≈ {products.price * 1.7} AZN</p>
            </p>
          </div>
          <div className="alt_xett_detail"></div>
          <div className="admin_info_container">
            <div className="info">
              <p className="admin_info">{products.admin}</p>
              <p className="city_info">{products.city}</p>
            </div>
            <div className="user_icon">
              <i className="fa-solid fa-user-tie"></i>
            </div>
          </div>
          <div className="btn_s">
            <button className="payment_btn">
              {" "}
              <Link to={"/payment"}>Odenisi et</Link>
            </button>

            <button className="nomre_btn">
              {" "}
              <Link to={"/payment"}>
                <div className="nomre_container">
                  <p className="nomreni_goster">Nomreni goster</p>
                  <p>
                    <i className="fa-solid fa-phone"></i> (050) 596 60 76
                  </p>
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
