import React from "react";
import "./collaborate.css";
import { Link } from "react-router-dom";

export default function Collaborate() {
  const data = [
    {
      title: "AI + RPA is what we do",
      desc: "Future-Proof your business. Drive efficiency, profitability and deliver on customer experience",
      link: "AI + RPA Automation",
      img: "https://www.xivtech.io./rp2.jpg",
      to: "AIandRPAautomation",
    },
    {
      title: "Make Bolder Choices",
      desc: "Digital focused strategies to realize market-changing ideas",
      link: "Build Better Apps",
      img: "https://www.xivtech.io./p1.png",
      to: "enterprise_apps",
    },
    {
      title: "Innovate with Speed",
      desc: "Create higher quality software, deliver on customer expectations and business goals",
      link: "DevOps",
      img: "https://www.xivtech.io./p2.jpg",
      to: "delivery_pipeline_automation",
    },
    {
      title: "Embrace Cloud",
      desc: "With Cloud-First accelerate innovation and optimize performance",
      link: "Cloud Services",
      img: "https://www.xivtech.io./p3.jpg",
      to: "cloud",
    },
  ];
  return (
    <div className="collaborate">
      <div className="collaborate-container">
        <div className="col-head">Let's Collaborate</div>
        <div className="col-body">
          {data.map((item, index) => (
            <div className="col-body-item" key={index}>
              <div className="col-body-title">{item.title}</div>
              <div className="col-body-img">
                <img src={item.img}></img>
              </div>
              <div className="col-body-desc">{item.desc}</div>
              <Link to={`/service/${item.to}`} className="col-body-link">
                {item.link}
                <img
                  src="https://www.xivtech.io./Arrow-black.svg"
                  alt=""
                  className="col-link-img"
                ></img>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}