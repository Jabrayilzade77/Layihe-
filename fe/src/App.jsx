import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import ButunElanlar from "./pages/ButunElanlar";
import Contact from "./pages/Contact";
import Moto from "./pages/Moto";
import About from "./pages/About";
import YeniElan from "./pages/YeniElan";
import Register from "./pages/Register";
import WishListProvider from "./context/WishListProvider";
import WishList from "./pages/WishListPage";
import Yardim from "./pages/Yardim";
import { I18nextProvider } from "react-i18next";
import i18n from "./pages/i18n";
import Detail from "./pages/Detail";
import Payment from "./pages/Payment";

function App() {
  return (
    <>
    <I18nextProvider i18n={i18n}>
    <WishListProvider>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/all" element={<ButunElanlar />} />
            <Route path="/moto" element={<Moto />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishList" element={< WishList />} />
            <Route path="/about" element={<About />} />
            <Route path="/new" element={<YeniElan />} />
            <Route path="/register" element={<Register />} />
            <Route path="/yardim" element={<Yardim />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/payment" element={<Payment />} />
          </Route>
        </Routes>
      </BrowserRouter>
     </WishListProvider>
    </I18nextProvider>
    
    </>
  );
}

export default App;
