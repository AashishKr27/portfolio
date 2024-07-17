/* eslint-disable no-unused-vars */
import React from "react";
import amazomClone from "./amazonClone.jpg";
import ashishKumar from './ashishKumar.jpg'
import sonarRock from './sonarRock.jpg'
import diabetes from './diabetes.jpg'
import housePrice from './housePrice.jpg'
import weather from './weather.jpg'
import fakeNews from './fakeNews.png'

const Project = () => {
  return (
    <div className="cc">
      <p className="heading">
        PROJECTS <span className="sb">GALLERY</span>
      </p>
      <div className="grid">
        <a data-aos="fade-right" href="https://github.com/AashishKr27/Amazon-Clone" rel="noreferrer" target="_blank" className="bhr">
          <div className="project">
            <img className="img" src={amazomClone} alt="amazon-clone" />
            <h2 className="lele">Amazon-Clone</h2>
          </div>
        </a>
        <a data-aos="fade-right" href="https://github.com/AashishKr27/portfolio" rel="noreferrer" target="_blank" className="bhr">
          <div className="project">
            <img className="img" src={ashishKumar} alt="ashishKumar" />
            <h2 className="lele">Portfolio</h2>
          </div>
        </a>
        <a data-aos="fade-right" href="https://github.com/AashishKr27/react-weather-app" rel="noreferrer" target="_blank" className="bhr">
          <div className="project">
            <img className="img" src={weather} alt="amazon-clone" />
            <h2 className="lele">Weather-App</h2>
          </div>
        </a>
        <a data-aos="fade-up" href="https://github.com/AashishKr27/Sonar-Rock-vs-Mine-Prediction" rel="noreferrer" target="_blank" className="bhr">
          <div className="project">
            <img className="img" src={sonarRock} alt="sonarRock" />
            <h2 className="lele">Sonar-Rock vs Mine</h2>
          </div>
        </a>
        <a data-aos="fade-up" href="https://github.com/AashishKr27/Diabetes-Prediction-using-ML" rel="noreferrer" target="_blank" className="bhr">
          <div className="project">
            <img className="img" src={diabetes} alt="amazon-clone" />
            <h2 className="lele">Diabetes-Prediction</h2>
          </div>
        </a>
        <a data-aos="fade-up" href="https://github.com/AashishKr27/House-Price-Prediction-using-ML" rel="noreferrer" target="_blank" className="bhr">
          <div className="project">
            <img className="img" src={housePrice} alt="amazon-clone" />
            <h2 className="lele">House-Price-Prediction</h2>
          </div>
        </a>
        <a data-aos="fade-left" href="https://github.com/AashishKr27/Fake-News-Detection-Using-ML" rel="noreferrer" target="_blank" className="bhr">
          <div className="project">
            <img className="img" src={fakeNews} alt="amazon-clone" />
            <h2 className="lele">Fake-News-Detection</h2>
          </div>
        </a>
        <a data-aos="fade-left" href="https://github.com/AashishKr27/Amazon-Clone" rel="noreferrer" target="_blank" className="bhr">
          <div className="project">
            <img className="img" src={amazomClone} alt="amazon-clone" />
            <h2 className="lele">Amazon Clone</h2>
          </div>
        </a>
        <a data-aos="fade-left" href="https://github.com/AashishKr27/Amazon-Clone" rel="noreferrer" target="_blank" className="bhr">
          <div className="project">
            <img className="img" src={amazomClone} alt="amazon-clone" />
            <h2 className="lele">Amazon Clone</h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
