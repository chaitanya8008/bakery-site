import React from 'react';
import './style.css'
function Page4() {
  return (
    <div className="page4">
      <div className="catering">
        <div className="catering-con1">
          <h2 className="p3 mediap3">Catering,Gifting & Events</h2>
          <p>
            Our catering, gifting, and events team is ready to fill your event
            or celebration with a custom selection of Petite Palate's best
            creations. No occasion is too large—or too small!
          </p>
          <a href="events.html">
            <button className="explore btn">
              Get Started
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </a>
        </div>
        <img className="catering-img" src="catering.jpg" alt="catering" />
      </div>
    </div>
  );
}

export default Page4;
