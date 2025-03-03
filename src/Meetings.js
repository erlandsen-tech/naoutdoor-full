import { Link } from "react-router-dom";
import { useState } from "react";

const Meetings = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div
      className="container-fluid bg-dark text-light d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh", paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      <div className="container py-4">
        <div className="text-center">
          <div 
            style={{ 
              overflow: isZoomed ? "auto" : "hidden",
              maxHeight: isZoomed ? "80vh" : "auto",
              cursor: "pointer"
            }}
            onClick={toggleZoom}
          >
            <img
              src="/img/program.jpg"
              alt="Ski & Recovery Trysil Program 2025"
              className="img-fluid rounded"
              style={{ 
                maxWidth: isZoomed ? "150%" : "100%", 
                height: "auto",
                maxHeight: isZoomed ? "none" : "80vh",
                objectFit: "contain",
                transition: "max-width 0.3s ease"
              }}
            />
          </div>
          <p className="text-muted mt-2 small">Tap image to zoom in/out</p>
        </div>
      </div>
      <div className="fixed-bottom footer">
        <Link to="/">
          <img
            className="mx-auto d-block"
            src="/img/left-arrow.png"
            id="back"
            alt="Back"
          />
        </Link>
      </div>
    </div>
  );
};

export default Meetings;
