import React from "react";
import "./about.css"

function AboutMe (){
    return(
        <div>
            <div className="container" style={{justifyContent: "center", display: "flex"}}>
        <div className="card mb-8" style={{maxWidth: "1000px", minWidth: "1000px", margin: "10px", justifyContent: "center", display: "flex"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="" alt=""></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5> A little about me</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor libero augue, ut euismod augue mattis tincidunt. Donec pellentesque elit nec malesuada volutpat. Duis ipsum tortor, sollicitudin ut dui et, accumsan pulvinar sapien. Quisque in massa rhoncus purus suscipit blandit. Nulla laoreet risus et lorem rutrum vulputate. Mauris ex metus, mattis sed posuere eu, faucibus sed dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin in sapien sodales, bibendum risus sit amet, eleifend dui. Donec porta lacus erat, eget rutrum sem molestie non. Donec sed nulla eget nibh ultrices imperdiet. Etiam aliquet velit nulla, nec ornare dolor fringilla sit amet. Maecenas ullamcorper eu erat eget dictum. Pellentesque faucibus ultrices pellentesque. Aliquam scelerisque, mauris eu lacinia convallis, lectus urna scelerisque arcu, et interdum libero velit sed sem. Proin nec ante massa.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )

}

export default AboutMe