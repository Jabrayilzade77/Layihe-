import { useContext, useEffect, useState } from "react";
import "../pages/Moto.scss";
import { Link } from "react-router-dom";
import { WishListContext } from "../context/WishListProvider";
import { Helmet } from "react-helmet";

function Moto() {
  const [turbos, setTurbos] = useState([]);
  const [filteredTurbos, setFilteredTurbos] = useState([]);
  const [marka, setmarka] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [il, setil] = useState("");

  const { addwishList, isExitsWishList } = useContext(WishListContext);

  const brands = ["", "BMW", "Mercedes", "Audi"];
  const models = {
    BMW: ["", "X5", "X6", "3 Series", "5 Series"],
    Mercedes: ["", "C Class", "E Class", "S Class", "GLA"],
    Audi: ["", "A3", "A4", "Q5", "Q7"],
  };

  useEffect(() => {
    getAllTurbo();
  }, []);

  useEffect(() => {
    filterTurbos();
  }, [turbos, marka, selectedModel, minPrice, maxPrice, il]);

  async function getAllTurbo() {
    const res = await fetch("http://localhost:3000/turbolar/");
    const data = await res.json();
    setTurbos(data);
  }

  async function getDeleteProduct(id) {
    const res = await fetch("http://localhost:3000/turbolar/" + id, {
      method: "delete",
    });
    const data = await res.json();

    getAllTurbo();
  }

  function filterTurbos() {
    let filtered = turbos;
    if (marka) {
      filtered = filtered.filter(
        (car) => car.marka.toLowerCase() === marka.toLowerCase()
      );
    }
    if (selectedModel) {
      filtered = filtered.filter(
        (car) => car.model.toLowerCase() === selectedModel.toLowerCase()
      );
    }
    if (minPrice || maxPrice !== Infinity) {
      filtered = filtered.filter(
        (car) => car.price >= minPrice && car.price <= maxPrice
      );
    }
    if (il) {
      filtered = filtered.filter((car) => car.il === parseInt(il));
    }
    setFilteredTurbos(filtered);
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Moto</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <main>
        <section className="main_container">
          <div className="filter_container">
            <div className="filter_group">
              <label>Marka:</label>
              <select value={marka} onChange={(e) => setmarka(e.target.value)}>
                {brands.map((marka) => (
                  <option key={marka} value={marka}>
                    {marka ? marka : "Hamisi"}
                  </option>
                ))}
              </select>
            </div>
            {marka && (
              <div className="filter_group">
                <label>Model:</label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                >
                  {models[marka].map((model) => (
                    <option key={model} value={model}>
                      {model ? model : "Hamisi"}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="filter_group">
              <label>Qiymet Aralığı:</label>
              <input
                type="number"
                placeholder="Min Qiymet"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                type="number"
                placeholder="Max Qiymet"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <div className="filter_group">
              <label>Il:</label>
              <input
                type="number"
                placeholder="Il"
                value={il}
                onChange={(e) => setil(e.target.value)}
              />
            </div>
          </div>

          <div className="cars_container">
            <h2 className="elan_h1">Premium Elanlar</h2>
            <div className="premium_cars">
              {filteredTurbos.map((x) =>
                x.marka === "moto " && x.title === "premium elan" ? (
                  <div className="cars_card" key={x._id}>
                    <div onClick={() => addwishList(x)} className="urey_icon">
                      {isExitsWishList(x) ? (
                        <i className="fa-solid fa-heart"></i>
                      ) : (
                        <i className="fa-regular fa-heart"></i>
                      )}
                      <div
                        onClick={() => getDeleteProduct(x._id)}
                        className="delete_btn"
                      >
                        {" "}
                        <i className="fa-solid fa-trash"></i>
                      </div>
                    </div>

                    <img src={x.image} alt="" className="cars_image" />
                    <div className="desc_auto">
                      <p className="price">Qiymet: {x.price} $</p>
                      <p className="model">Model: {x.model}</p>
                      <p className="il_motor_km">
                        {x.il}, {x.motor}, {x.km} km
                      </p>
                    </div>
                    <button className="detail_btn">
                      <Link to={"/detail/" + x._id}>go detail </Link>
                    </button>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>

            <h2 className="elan_h1">Vip Elanlar</h2>
            <div className="vip_cars">
              {filteredTurbos.map((x) =>
                x.marka === "moto " && x.title === "vip elan" ? (
                  <div className="cars_card" key={x._id}>
                    <div onClick={() => addwishList(x)} className="urey_icon">
                      {isExitsWishList(x) ? (
                        <i className="fa-solid fa-heart"></i>
                      ) : (
                        <i className="fa-regular fa-heart"></i>
                      )}
                      <div
                        onClick={() => getDeleteProduct(x._id)}
                        className="delete_btn"
                      >
                        {" "}
                        <i className="fa-solid fa-trash"></i>
                      </div>
                    </div>

                    <img src={x.image} alt="" className="cars_image" />
                    <div className="desc_auto">
                      <p className="price">Qiymet: {x.price} $</p>
                      <p className="model">Model: {x.model}</p>
                      <p className="il_motor_km">
                        {x.il}, {x.motor}, {x.km} km
                      </p>
                    </div>
                    <button className="detail_btn">
                      <Link to={"/detail/" + x._id}>go detail </Link>
                    </button>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>

            <h2 className="elan_h1">Adi Elanlar</h2>
            <div className="premium_cars">
              {filteredTurbos.map((x) =>
                x.marka === "moto " && x.title === "adi elan" ? (
                  <div className="cars_card" key={x._id}>
                    <div onClick={() => addwishList(x)} className="urey_icon">
                      {isExitsWishList(x) ? (
                        <i className="fa-solid fa-heart"></i>
                      ) : (
                        <i className="fa-regular fa-heart"></i>
                      )}
                      <div
                        onClick={() => getDeleteProduct(x._id)}
                        className="delete_btn"
                      >
                        {" "}
                        <i className="fa-solid fa-trash"></i>
                      </div>
                    </div>

                    <img src={x.image} alt="" className="cars_image" />
                    <div className="desc_auto">
                      <p className="price">Qiymet: {x.price} $</p>
                      <p className="model">Model: {x.model}</p>
                      <p className="il_motor_km">
                        {x.il}, {x.motor}, {x.km} km
                      </p>
                    </div>
                    <button className="detail_btn">
                      <Link to={"/detail/" + x._id}>go detail </Link>
                    </button>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Moto;
