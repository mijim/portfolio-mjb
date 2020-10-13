import React from "react";
import rulerulerImg from "../../assets/images/ruleruler.png";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-section">
        <div className="projects-title">RULERULER</div>
        <div className="projects-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consequat elementum risus, vitae rhoncus urna iaculis eu. Donec
          scelerisque nisl quis ornare efficitur. Vestibulum et nunc nec felis
          dapibus laoreet id commodo magna. Morbi in ligula in augue bibendum
          sagittis. Cras in pretium libero. Mauris sit amet euismod orci. Proin
          ac metus placerat, elementum justo eget, porta ipsum. Cras eget purus
          vel nisl laoreet suscipit placerat vitae mauris. Integer mollis magna
          id diam fringilla faucibus. Morbi venenatis ultrices orci sed
          fermentum. Integer tristique elit nibh, fermentum posuere elit
          tincidunt nec.
        </div>
        <div className="projects-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consequat elementum risus, vitae rhoncus urna iaculis eu. Donec
          scelerisque nisl quis ornare efficitur. Vestibulum et nunc nec felis
          dapibus laoreet id commodo magna. Morbi in ligula in augue bibendum
          sagittis. Cras in pretium libero. Mauris sit amet euismod orci. Proin
          ac metus placerat, elementum justo eget, porta ipsum. Cras eget purus
          vel nisl laoreet suscipit placerat vitae mauris. Integer mollis magna
          id diam fringilla faucibus. Morbi venenatis ultrices orci sed
          fermentum. Integer tristique elit nibh, fermentum posuere elit
          tincidunt nec.
        </div>
        <div className="projects-img">
          <img src={rulerulerImg} alt="ruleruler-img" />
          <div className="projects-img__buttons">
            <div className="projects-button">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ruleruler.design/"
              >
                Ver
              </a>
            </div>
            <div className="projects-button">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://chrome.google.com/webstore/detail/ruleruler/ghcmdbcpgmkalnkmnnjiehggdgimlmhi"
              >
                Instalar
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-section">
        <div className="projects-title">Barcu</div>
        <div className="projects-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consequat elementum risus, vitae rhoncus urna iaculis eu. Donec
          scelerisque nisl quis ornare efficitur. Vestibulum et nunc nec felis
          dapibus laoreet id commodo magna. Morbi in ligula in augue bibendum
          sagittis. Cras in pretium libero. Mauris sit amet euismod orci. Proin
          ac metus placerat, elementum justo eget, porta ipsum. Cras eget purus
          vel nisl laoreet suscipit placerat vitae mauris. Integer mollis magna
          id diam fringilla faucibus. Morbi venenatis ultrices orci sed
          fermentum. Integer tristique elit nibh, fermentum posuere elit
          tincidunt nec.
        </div>
      </div>
    </div>
  );
};

export default Projects;
