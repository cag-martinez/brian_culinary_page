import React from "react";
import Art from "../../assets/images/art.jpg";
// import "./header.css"

function Header() {
  return (
    <div>
      <section
        className="header"
        //     style={{
        //     height: "50vh",
        //     backgroundImage: "Art",
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     backgroundRepeat: "no-repeat",
        //     opacity: "75%",
        //     clipPath: "polygon(100% 0, 100% 75%, 69% 100%, 0 85%, 0 0)",
        //     backgroundAttachment: "fixed",
        //   }}
      >
        <img
          src={Art}
          style={{
            height: "50vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: "75%",
            clipPath: "polygon(100% 0, 100% 75%, 69% 100%, 0 85%, 0 0)",
            backgroundAttachment: "fixed",
          }}
        />
      </section>
    </div>
  );
}

export default Header;
