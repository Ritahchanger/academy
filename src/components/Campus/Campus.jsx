import React from "react";
import "./Campus.css";
import gallery_1 from '../../images/gallery-1.png';
import gallery_2 from '../../images/gallery-2.png';
import gallery_3 from '../../images/gallery-3.png';
import gallery_4 from '../../images/gallery-4.png';
import white__arrow from "../../images/white-arrow.png"

const Campus = () => {
  return(
    <div className="campus" id="campus">
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className="btn dark-btn">See more here <img src={white__arrow} alt="" /></button>
    </div>
  );
};

export default Campus;
