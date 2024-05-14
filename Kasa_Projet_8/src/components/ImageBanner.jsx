import { useState } from "react";
import "./ImageBanner.scss";

export function ImageBanner(props) {
  const pictures = props.pictures;

  const [currentPicture, setCurrentPicture] = useState(0);

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  const getCarouselOrDefaultImage = () => {
    if (pictures && pictures.length > 0) {
      return pictures.map((pic, i) => (
        <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
      ));
    } else {
      return (
        <img
          src="https://s3-alpha-sig.figma.com/img/56fa/e17e/b9995860bb6384a77ca7dc9bf52da3be?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p9hykQD9K6BC3bN-RJOs7pucd4zqMjJkm-DRTWMXfw3nvoHZ7Y8RbJd-410cVteTDLljzbHyuZX3tqAhJuhKM~dP74nYCwsAOHzvQLv1Mo7MDM6NMny9eBM1KE97agE3Dlhm6o3qvGKdBMizJajy4oDKdvkCwqXSH38Tx0OvFAXt3jOAwPU6KhObez46kXCz8-OlyNQqJQWhsoUX8whJ-fzkWRDyOSiq8-71v92C03RkOe8eTYLNGdfdo42zBJvF8Iq5zLgYIy39vbXmC0mK3n1dv2g4nY5-mgOOhN1eVKbjnHOQbzzVUwCOXaKEf3uBi~RcTduK3w8HvltY3wk0ZQ__" // Remplacez par votre URL d'image par défaut
          className="show"
          alt=""
        />
      );
    }
  };

  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  return (
    <div className="image__banner">
      <div className="image__container">{getCarouselOrDefaultImage()}</div>
      {pictures && pictures.length > 0 && (
        <>
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="slide-counter">
            {currentPicture + 1} / {pictures.length}
          </span>
          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
}
