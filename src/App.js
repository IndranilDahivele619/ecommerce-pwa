function App() {
  const products = [
    { id: 1, name: "Shoes", price: 2000 },
    { id: 2, name: "T-Shirt", price: 800 },
    { id: 3, name: "Watch", price: 3000 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 My Ecommerce PWA</h1>

      {products.map((item) => (
        <div key={item.id} style={{ margin: "10px 0" }}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default App;
