import { useState } from "react";
import "./App.css";
function App() {
  const [products, setproducts] = useState([
    {
      name: "Milk",
      price: 50,
      quantity: 2,
    },
    {
      name: "Wheet",
      price: 45,
      quantity: 3,
    },
  ]);
  const [input, setinput] = useState("");

  const handlecheck = (e) => {
    e.preventDefault();
    if (!input.trim() || Number(price) <= 0 || Number(quantity) <= 0) return;

    const newProduct = {
      name: input.trim(),
      price: Number(price),
      quantity: Number(quantity)
    };

    setproducts([...products, newProduct]);
    setinput("");
    setPrice("");
    setquantity("")
  };

  const deleteProduct = (index) => {
    const newProducts = products.filter((item, i) => i !== index);
    setproducts(newProducts);
  };
  const increse = (index) => {
    const newProducts = products.map((item, i) => {
      if (i === index) {
        quantity: item.quantity + 1;
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setproducts(newProducts);
  };
  const decrese = (index) => {
    const NewProducts = products.map((item, i) => {
      if (i === index && item.quantity > 1) {
        quantity: item.quantity - 1;
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    setproducts(NewProducts);
  };
  const grandTotal = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const [price, setPrice] = useState("");
  const [quantity, setquantity]= useState("")
  return (
    <div>
      <form onSubmit={handlecheck}>
        <input
          type="text"
          placeholder="ENTER PRODUCT HERE"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <input
          type="number"
          placeholder="ENTER PRICE"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="ENTER QUANTITY"
          value={quantity}
          onChange={(e) => setquantity(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>

      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - ₹{item.price} (Qty: {item.quantity})
            <button onClick={() => deleteProduct(index)}>X</button>
            <button onClick={() => increse(index)}>ADD</button>
            <button onClick={() => decrese(index)}>LESS</button>
          </li>
        ))}
      </ul>
      <h2>Grand Total: ₹{grandTotal}</h2>
    </div>
  );
}
export default App;
