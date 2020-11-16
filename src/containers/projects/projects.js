import React, {useState} from "react";
import rulerulerImg from "../../assets/images/ruleruler.png";
import "./projects.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { getCopy } from "../../languages/languages";
import { FullPageContainer, FullPagePanel } from '../../components/fullpage/fullpage';
import '../../components/fullpage/fullpage.module.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const BARCU_IMAGES = [
  {
    original: "/images/barcu/barcu1.jpg",
    thumbnail: "/images/barcu/barcu-thumb1"
  },
  {
    original: "/images/barcu/barcu2.jpg",
    thumbnail: "/images/barcu/barcu-thumb2.jpg"
  },
  {
    original: "/images/barcu/barcu3.jpg",
    thumbnail: "/images/barcu/barcu-thumb3.jpg"
  },
  {
    original: "/images/barcu/barcu4.jpg",
    thumbnail: "/images/barcu/barcu-thumb4.jpg"
  },
  {
    original: "/images/barcu/barcu5.jpg",
    thumbnail: "/images/barcu/barcu-thumb5.jpg"
  },
  {
    original: "/images/barcu/barcu6.jpg",
    thumbnail: "/images/barcu/barcu-thumb6.jpg"
  },
  {
    original: "/images/barcu/barcu7.jpg",
    thumbnail: "/images/barcu/barcu-thumb7.jpg"
  },
  {
    original: "/images/barcu/barcu8.jpg",
    thumbnail: "/images/barcu/barcu-thumb8.jpg"
  }
];

const Boids = () => {
  return(
  <div className="projects-section">
    <div className="projects-title">Boids</div> 
    <div className="projects-text big">{getCopy("projects6")}</div>
    <div className="projects-text">{getCopy("projects7")}</div>
    <div className="project-image-gallery">
    <div className="projects-button">
        <div
          onClick={(ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            window.open('https://threejs-boids.web.app/')
          }}
        >
          {getCopy("projectsWatch")}
        </div>
      </div>
    </div>
    <div className="projects-tech-stack">
      <div className="tech-stack-title">{getCopy("projectsStack")}</div>
      <div className="tech-stack-items">
        <div className="tech-stack-item">
          <div className="tech-stack-item">
            <img src={"/images/react.svg"} alt="react" />
          </div>
          <div className="tech-stack-item">
            <img src={"/images/three-js-logo.svg"} alt="three.js" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

const ComboiCollective = () => {
  return(
  <div className="projects-section">
    <div className="projects-title">Comboi Collective</div> 
    <div className="projects-text big">{getCopy("projects4")}</div>
    <div className="projects-text">{getCopy("projects5")}</div>
    <div className="project-image-gallery">
    <div className="projects-button">
        <div
          onClick={(ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            window.open('https://comboi-collective.com/')
          }}
        >
          {getCopy("projectsWatch")}
        </div>
      </div>
    </div>
    <div className="projects-tech-stack">
      <div className="tech-stack-title">{getCopy("projectsStack")}</div>
      <div className="tech-stack-items">
        <div className="tech-stack-item">
          <svg
            height="50"
            viewBox="0 0 148 90"
            version="1.1"
            xmlns
            xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
              fill="#ecc67e"
              fill-rule="nonzero"
            ></path>
          </svg>        </div>
      </div>
    </div>
  </div>
  );
}

const Barcu = ({setFullscreenGallery}) => {
  return (
<div className="projects-section">
              <div className="projects-title">Barcu</div>
              <div className="projects-text big">{getCopy("projects0")}</div>
              <div className="projects-text">{getCopy("projects1")}</div>
              <div className="project-image-gallery">
              <div className="projects-button" onClick={(ev) =>  {
                ev.preventDefault();
                ev.stopPropagation();
                setFullscreenGallery(true)
              }}>
                  <div>
                    {getCopy("projectsWatchGallery")}
                  </div>
                </div>
              </div>
              <div className="projects-tech-stack">
                <div className="tech-stack-title">{getCopy("projectsStack")}</div>
                <div className="tech-stack-items">
                  <div className="tech-stack-item">
                    <img src={"/images/react.svg"} alt="react" />
                  </div>
                  <div className="tech-stack-item">
                    <img src={"/images/three-js-logo.svg"} alt="three.js" />
                  </div>
                </div>
              </div>
            </div>
  )
}

const Ruleruler = () => {
  return (
    <div className="projects-section">
          <div className="projects-title">RULERULER</div>
            <div className="projects-text big">{getCopy("projects2")}</div>
            <div className="projects-text">{getCopy("projects3")}</div>
            <div className="projects-img">
              <img src={rulerulerImg} alt="ruleruler-img" />
              <div className="projects-img__buttons">
                <div className="projects-button">
                    <div
                      onClick={(ev) => {
                        ev.preventDefault();
                        ev.stopPropagation();
                        window.open('https://ruleruler.design/')
                      }}
                    >
                      {getCopy("projectsWatch")}
                  </div>
                </div>
                <div className="projects-button">
                  <div
                      onClick={(ev) => {
                        ev.preventDefault();
                        ev.stopPropagation();
                        window.open('https://chrome.google.com/webstore/detail/ruleruler/ghcmdbcpgmkalnkmnnjiehggdgimlmhi')
                      }}
                    >
                      {getCopy("projectsInstall")}
                  </div>
                </div>
              </div>
            </div>
            <div className="projects-tech-stack">
              <div className="tech-stack-title">{getCopy("projectsStack")}</div>
              <div className="tech-stack-items">
                <div className="tech-stack-item">
                  <svg
                    height="50"
                    viewBox="0 0 148 90"
                    version="1.1"
                    xmlns
                    xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
                      fill="#ecc67e"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                </div>
                <div className="tech-stack-item">
                  <img src={"/images/js.svg"} alt="js" />
                </div>
              </div>
            </div>
          </div>
  )
}

const Projects = ({setFullscreenGallery, fullscreenGallery}) => {  
  return (
    <div className="projects-container">
        {fullscreenGallery && (
          <div className="projects-fullscreen-gallery">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={BARCU_IMAGES.length}
              visibleSlides={window.innerWidth<=1000?1:1.2}
            >
              <Slider>
                {BARCU_IMAGES.map((img, index) => (
                <Slide index={index}><img src={img.original}/></Slide>
                ))}
              </Slider>
              <ButtonBack className="gallery-control-button gallery-back-button"><img src="/images/arrow.svg"/></ButtonBack>
              <ButtonNext className="gallery-control-button gallery-forward-button"><img src="/images/arrow.svg"/></ButtonNext>

            </CarouselProvider>
          </div>
        )}
        {window.innerWidth <= 1000 ? (
          <>
            <ComboiCollective/>
            <Barcu setFullscreenGallery={setFullscreenGallery}/>
            <Ruleruler/>
            <Boids/>
          </>
        ):(
        <FullPageContainer showIndicators={true} disabled={fullscreenGallery}>
          <FullPagePanel style={{justifyContent: 'left'}}>
            <ComboiCollective/>
          </FullPagePanel>
          <FullPagePanel style={{justifyContent: 'left'}}>
            <Barcu setFullscreenGallery={setFullscreenGallery}/>
          </FullPagePanel>
          <FullPagePanel>
            <Ruleruler/>
          </FullPagePanel>
          <FullPagePanel>
            <Boids/>
          </FullPagePanel>
        </FullPageContainer>
        )}
        
    </div>
  );
};

export default Projects;
