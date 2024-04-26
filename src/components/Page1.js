import React from 'react';
import './style.css';
function Page1() {
  return (
    <div className="page1">
      <video src="bakery.mp4" autoPlay muted loop></video>
      <h2>Petite Palate</h2>
      <h1>HANDMADE, WITH A PINCH OF LOVE</h1>
      <p>crafting sweet indulgence, one bite at a time</p>
      <a href="products.html">
        <button className="order">Order Treats</button>
      </a>
    </div>
  );
}

export default Page1;
