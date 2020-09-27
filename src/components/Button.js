import React from "react";

const Button = ({name, addClass, disabled}) => {
  const styles = {
    background: disabled ? "#D8D8D8" : "#464AB3",
  };

  return (
    <button style={styles} className={`button ${addClass}`}>
      {name}
    </button>
  );
};

export default Button;
