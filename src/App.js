import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryComponent from "./component/CategoryComponent";
import ListComponent from "./component/ListComponent";
import LoginComponent from "./component/LoginComponent";
import Nev from "./component/Nev";
import SigninComponent from "./component/SigninComponent";
import ChatComponent from "./component/ChatComponent";
import OrderCheckList from "./component/OrderCheckList";
import BoardInputComponent from "./component/BoardInputComponent";

import ProductUploadComponent from "./component/ProductUploadComponent";
import ProductCartComponent from "./component/ProductCartComponent";
import ProductDetailComponent from "./component/ProductDetailComponent";
import BuyComponent from "./component/BuyComponent";
import ListAllComponent from "./component/ListAllComponent";
import ProductPatchComponent from "./component/ProductPatchComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <div className="w-1/6 ml-20">
          <Nev />
        </div>
        <div className="w-4/6">
          <Routes className="routes">
            <Route path="/cart" element={<ProductCartComponent />} />
            <Route path="/" element={<CategoryComponent />} />
            <Route path="/list" element={<ListComponent />} />
            <Route path="/listall" element={<ListAllComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signin" element={<SigninComponent />} />
            <Route path="/chat" element={<ChatComponent />} />
            <Route path="/ordercheck" element={<OrderCheckList />} />
            <Route path="/boardinput" element={<BoardInputComponent />} />
            <Route path="/productdetail" element={<ProductDetailComponent />} />
            <Route path="/productupload" element={<ProductUploadComponent />} />
            <Route path="/buy" element={<BuyComponent />} />
            <Route path="/patch" element={<ProductPatchComponent />} />
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
