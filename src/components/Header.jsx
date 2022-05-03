import React from "react";
import GlobeIcon from "../images/globeIcon.svg";

export default function Header() {
  return (
    <div className='header--body'>
      <img style={{ width: "1rem" }} src={GlobeIcon} />
      <h6 className='header--title'>Anna & João Travel Journal</h6>
    </div>
  );
}
