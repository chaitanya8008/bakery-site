import React from 'react';
import './style.css'
function Page5() {
  return (
    <div className="page5">
      <div className="newsletter">
        <h2>Join Our Newsletter</h2>
        <p>
          Get the freshest Petite Palate updates and offers right to your inbox!
          Plus, enjoy 10% off on your birthday when you share the date with us!
        </p>
      </div>
      <div className="form">
        <form action="#">
          <input type="email" id="form" placeholder="Your Email Address" />
          <button className="submitbutton" >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page5;
// onClick={() => openPopUp()}