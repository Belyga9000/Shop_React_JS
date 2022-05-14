import { Routes, Route, Navigate } from "react-router-dom";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { ContentContainer } from "./components/Content/ContentContainer";
import { CartCointainer } from "./components/Cart/CartCointainer";
import "./scss/App.scss";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderContainer />}>
        <Route path="/products/:productType" element={<ContentContainer />}>
          <Route
            path="/products/:productType/:productName"
            element={<div></div>}
          />
        </Route>
        <Route path="/cart" element={<CartCointainer />}></Route>
        {/* <Route path="/" element={<Navigate to="/products/all" />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
