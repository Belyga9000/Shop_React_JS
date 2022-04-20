import { Routes, Route } from "react-router-dom";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { ContentContainer } from "./components/Content/ContentContainer";
import { CartCointainer } from "./components/Cart/CartCointainer";
import "./scss/App.scss";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderContainer />}>
        <Route path="/products/:productType" element={<ContentContainer />} />
        <Route path="/cart" element={<CartCointainer />}></Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
