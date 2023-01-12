import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Title from "./components/Title";

function App(): JSX.Element {
  return (
    <div>
      <Header name="TypeShopping" />
      <div className="p-4">
        <Title title="Tienda online" />
        <ProductList/>
      </div>
    </div>
  );
}

export default App;
