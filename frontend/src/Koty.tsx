import React, { useState } from "react";
import styles from "./Koty.module.scss";

const Koty: React.FC = () => {
  const [cats, setCats] = useState<string[]>([]);

  const handleClick = () => {
    setCats([...cats, "https://cataas.com/cat"]);
  };

  return (
    <div>
      <div className={styles.guzik}>
        <button onClick={handleClick}>Dodaj kota</button>
      </div>
      <div className={styles.koty}>
        {cats.map((cat) => (
          <img src={cat} alt="a cat" />
        ))}
      </div>
    </div>
  );
};

export default Koty;
