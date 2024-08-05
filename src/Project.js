// ProjectSection.js
import React from "react";
import appleWeb from "./appleWeb.jpg";
import ashishKumar from "./ashishKumar.jpg";
import amazon from "./amazonClone.jpg";
import devland from "./devlanding.jpg";
import spotify from "./spotifyClone.jpg";
import snap from "./snapgram.jpg";
import weather from './weather.jpg'
import speech from './speechToText.jpg'
import fake from './fakeNews.png'
import diabetes from './diabetes.jpg'
import house from './housePrice.jpg'
import sonar from './sonarRock.jpg'
import loan from './loan.png'
import wine from './wine.jpg'
import segment from './segment.png'
import brainwave from './brainwave.jpg'

const ProjectSection = () => {
  return (
    <div id="project" className="project-section">
      <h2>My Projects</h2>
      <div data-aos="fade-up" className="project-list">
        <div data-aos="fade-up" className="project-card">
          <img className="project-image" src={brainwave} alt="imag" />
          <div className="project-content">
            <h3>SnapGram</h3>
            <p>Modern UI/UX website, developed using React Js, Vite Js and Tailwind CSS</p>
            <a
              href="https://brain-wave-beta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="project-card">
          <img className="project-image" src={snap} alt="imag" />
          <div className="project-content">
            <h3>SnapGram</h3>
            <p>Fully functional social media application using React Js, Tailwind CSS</p>
            <a
              href="https://github.com/AashishKr27/SnapGram"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="project-card">
          <img className="project-image" src={appleWeb} alt="imag" />
          <div className="project-content">
            <h3>Apple Webpage</h3>
            <p>Designed an animated and attractive webpage for presenting the Apple iPhone 15 Pro</p>
            <a
              href="https://apple-website-orcin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="project-card">
          <img className="project-image" src={ashishKumar} alt="imag" />
          <div className="project-content">
            <h3>Portfolio</h3>
            <p>Portfolio website to showcase my development & problem solving skills</p>
            <a href="git" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="project-card">
          <img className="project-image" src={amazon} alt="imag" />
          <div className="project-content">
            <h3>Amazon Clone</h3>
            <p>Created a clone website of frontend of Amazon using JavaScript, React Js, Tailwind CSS</p>
            <a
              href="https://amazon-clone-beta-topaz.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div data-aos="fade-up" className="project-card">
          <img className="project-image" src={devland} alt="imag" />
          <div className="project-content">
            <h3>Dev Landing</h3>
            <p>Created a simple and attractive landing page using JavaScript, React Js, Vite Js, Tailwind CSS</p>
            <a
              href="https://dev-landing-iota.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="project-card">
          <img className="project-image" src={spotify} alt="imag" />
          <div className="project-content">
            <h3>Spotify Clone</h3>
            <p>Designed a clone website of Spotify with preloaded songs using React Js, Vite Js, Tailwind CSS</p>
            <a
              href="https://spotify-clone-self-psi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="project-card">
          <img className="project-image" src={weather} alt="imag" />
          <div className="project-content">
            <h3>Weather App</h3>
            <p>Created a real-time weather application using JavaScript, React Js, Tailwind CSS</p>
            <a href="https://react-weather-app-iota-orpin.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="project-card">
          <img className="project-image" src={speech} alt="imag" />
          <div className="project-content">
            <h3>Speech To Text</h3>
            <p>An application for converting speech into text using JavaScript, React Js, CSS</p>
            <a href="https://speech-to-text-convertor-fawn.vercel.app/it" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="project-card">
          <img className="project-image" src={fake} alt="imag" />
          <div className="project-content">
            <h3>Fake News Detection</h3>
            <p>Implemented a Machine Learning Model for prediciting Fake News using Python</p>
            <a href="https://github.com/AashishKr27/Fake-News-Detection-Using-ML" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="project-card">
          <img className="project-image" src={diabetes} alt="imag" />
          <div className="project-content">
            <h3>Diabetes Prediction</h3>
            <p>Implemented a Machine Learning Model for prediciting Diabetes using Python</p>
            <a href="https://github.com/AashishKr27/Diabetes-Prediction-using-ML" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="project-card">
          <img className="project-image" src={house} alt="imag" />
          <div className="project-content">
            <h3>House Price Prediction</h3>
            <p>Implemented a Machine Learning Model for prediciting House Price using Python</p>
            <a href="https://github.com/AashishKr27/House-Price-Prediction-using-ML" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="project-card">
          <img className="project-image" src={loan} alt="imag" />
          <div className="project-content">
            <h3>Loan Status Prediction</h3>
            <p>Implemented a Machine Learning Model for prediciting Loan Status using Python</p>
            <a href="https://github.com/AashishKr27/Loan-Status-Prediction-Using-ML" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="project-card">
          <img className="project-image" src={wine} alt="imag" />
          <div className="project-content">
            <h3>Wine Quality Prediction</h3>
            <p>Implemented a Machine Learning Model for prediciting Wine Quality using Python</p>
            <a href="https://github.com/AashishKr27/Wine-Quality-Prediction-Using-ML" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="project-card">
          <img className="project-image" src={sonar} alt="imag" />
          <div className="project-content">
            <h3>Sonar Rock Vs Mine</h3>
            <p>Implemented a Machine Learning Model for prediciting Sonar Rock & Mine using Python</p>
            <a href="https://github.com/AashishKr27/Sonar-Rock-vs-Mine-Prediction" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="project-card">
          <img className="project-image" src={segment} alt="imag" />
          <div className="project-content">
            <h3>Customer Segmentation</h3>
            <p>Implemented a Machine Learning Model for Customer Segmentation using Python</p>
            <a href="https://github.com/AashishKr27/Customer-Segmentation-Using-ML" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
