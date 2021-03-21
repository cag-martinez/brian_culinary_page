import React from "react";
import Art from "../../assets/images/art.jpg";
// import "./header.css"

function Header() {
  return (
    <div>
      <section className="header">
        <img
          src={Art} alt=""
          style={{
            width: '100vw',
            height: '30vh',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            //opacity: "75%",
           // clipPath: "polygon(100% 0, 100% 75%, 69% 100%, 0 85%, 0 0)",
            backgroundAttachment: "fixed",
            // imageRendering: "pixelated",
            // imageRendering: "auto",
            // imageRendering: "crisp-edges"
          }}
        />
      </section>
    </div>
  );
}

export default Header;
