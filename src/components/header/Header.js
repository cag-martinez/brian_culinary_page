import React from "react";
import brianCooking from "../../assets/images/brianCooking.jpg";
// import "./header.css"

function Header() {
  return (
    <div>
      <section className="header">
        <img
          src={brianCooking} alt=""
          style={{
            width: '98.5vw',
            height: '70vh',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            
            opacity: "100%",
           // clipPath: "polygon(100% 0, 100% 75%, 69% 100%, 0 85%, 0 0)",
            
          }}
        />
      </section>
    </div>
  );
}

export default Header;
