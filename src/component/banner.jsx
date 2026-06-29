import "./banner.css";
import pexels from "../assets/pexels-eberhard-grossgasteiger-691668.jpg"

export default function Banner() {
  return (
    <div className="bannerArea">

      <img src={pexels} alt="banner" className="imageBanner"/>

      <div className="bannerText">
        <h1>Welcome to the lost and found app</h1>
        <p>Report and find lost items here</p>
      </div>

    </div>
  )
}