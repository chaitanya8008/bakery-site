import React from 'react';
import './style.css'
function Page3() {
  return (
    <div className="page3">
      <div className="page3-content">
        <h2 className="p3">Sweet Delights</h2>
        <a href="products.html">
          <button className="explore">
            Explore
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </a>
      </div>

      <div className="product-container">
        <div className="product">
          <img src="cakes.jpg" alt="cake" />
          <h4>Cakes</h4>
        </div>
        <div className="product">
          <img src="cupcakes.jpg" alt="cake" />
          <h4>Cupcakes</h4>
        </div>
        <div className="product">
          <img src="cookies.jpg" alt="cake" />
          <h4>cookies</h4>
        </div>
        <div className="product">
          <img src="donuts.jpg" alt="cake" />
          <h4>donuts</h4>
        </div>
      </div>
    </div>
  );
}

export default Page3;
