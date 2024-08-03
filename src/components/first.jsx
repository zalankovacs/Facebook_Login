import React from "react";
import "../App.css";
import nonameImage from "../assets/noname.jpg";
import iconPlus from '../assets/icon.png';

const First = () => {
  return (
    <>
      <div className="content">
        <div className="title">facebook</div>
        <div className="text_1">Legutóbbi bejelentkezések</div>
        <div className="text_2">
          Kattints a képedre, vagy adj meg egy fiókot.
        </div>
        <div className="users">
          <div className="card">
            <img src={nonameImage} alt="Card image" />
            <div className="card-body">
              <h1 className="card-title">Steven</h1>
            </div>
          </div>
          <div className="card icon">
            <div className="card-top">
                <img src={iconPlus} alt="Card image"/>
            </div>
            <div className="card-body">
              <h1 className="card-title">Fiók hozzáadása</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
