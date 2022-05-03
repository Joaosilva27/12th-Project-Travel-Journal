import React from "react";
import LocationIcon from "../images/locationIcon.svg";

export default function Card(props) {
  return (
  <div style={{ display: "flex" }}>
    <img className='location--image' src={props.item.img} />
    <div className='info--container'>
      <span style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
        <img src={LocationIcon} />
        <span className='location--title'>{props.item.region}</span>
        <span className='location--google'><a className="google--link" href={props.item.googleMapsUrl}>View on Google Maps.</a></span>
      </span>
      <h2 className='location--h2'>{props.item.location}</h2>
      <h6 className='location--date'>{props.item.date}</h6>
      <p className='location--description'>{props.item.description}</p>
    </div>
  </div>
)
}
