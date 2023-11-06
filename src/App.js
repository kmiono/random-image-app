import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosTest = () => {
  const [image, setImage] = useState();

  useEffect(() => {
    axios
      .get("https://source.unsplash.com/random", { responseType: "blob" })
      .then((res) => {
        setImage([URL.createObjectURL(res.data)]);
      });
  }, []);

  return (
    <div>
      <button onClick={() => window.location.reload()}>切り替え</button>
      <img src={image} width="500" />
    </div>
  );
};

export default AxiosTest;
