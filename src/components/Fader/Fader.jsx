import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/App.css";

const Fader = ({ text }) => {
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-in",
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "fade-in") {
        setFadeProp({
          fade: "fade-out",
        });
      } else {
        setFadeProp({
          fade: "fade-in",
        });
      }
    }, 2000);
  }, []);

  return (
    <>
      <h2 className={fadeProp.fade}>{text}</h2>
    </>
  );
};

Fader.defaultProps = {
  text: "Signed in successfully",
};

Fader.propTypes = {
  text: PropTypes.string,
};

export default Fader;
