import { useContext } from 'react'
import { WishListContext } from '../context/WishListProvider'
import {Helmet} from "react-helmet";
import "../pages/WishList.scss"


function WishList() {

  const {wishList,isExitsWishList,addwishList} = useContext(WishListContext)
  return (
   <>
   <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>WisList Page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        ...
      </div>
      <div className="cards_container">
      {wishList.map(x=>(
        <div key={x._id} className="cars_card">
          <div onClick={()=>addwishList(x)}>{isExitsWishList(x) ? <i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>}</div>
            <img src={x.image} alt="" className="cars_image"/>
            <div className="desc_auto">
                <p className="model">{x.title}</p>
                <p className="model">{x.desc}</p>
                <p className="price">${x.price}</p>

            </div>
        </div>
    ))}
      </div>
  
   </>
  )
}

export default WishList