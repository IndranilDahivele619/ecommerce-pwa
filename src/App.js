import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Running Shoes",
      price: 2000,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: 2,
      name: "Casual T-Shirt",
      price: 800,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 3000,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12"
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🛒 My Ecommerce PWA</h1>

      <h2>Products</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "180px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              width="150"
              height="150"
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />

            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button
              onClick={() => addToCart(item)}
              style={{
                padding: "6px 10px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "30px" }}>Cart 🛍️ ({cart.length})</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <p key={index}>
            {item.name} - ₹{item.price}
          </p>
        ))
      )}

      <h3>
        Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}
      </h3>
    </div>
  );
}

export default App;