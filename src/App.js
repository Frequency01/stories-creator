import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import Editor from "./components/editor";
import Preview from "./components/preview";
// import carImage from "./components/carImageDataURI";

function App() {
  const [text, setText] = useState("Your Text");
  const [color, setColor] = useState("rgba(40, 21, 21, 0.5)");
  const [image, setImage] = useState("https://i.imgur.com/tEO5HyY.png");
  const [bannerURL, setBannerURL] = useState("https://ya.ru/");
  const [containedColor, setContainedColor] = useState("contained");
  const [containedGradient, setContainedGradient] = useState("");

  let handlePresetOne = () => {
    setContainedGradient("");
    setContainedColor("contained");
    setImage("https://i.imgur.com/tcsvWvw.jpg ");
    setColor("rgba(187, 171, 62, 0.5)");
    setText("Купить собаку шиба-ину");
    setBannerURL("https://www.awwwards.com/");
  };

  let handlePresetTwo = () => {
    setContainedGradient("");
    setContainedColor("contained");
    setImage("https://i.imgur.com/oJHnD4p.jpg");
    setColor("rgba(81, 67, 67, 0.5)");
    setText("Купить платье для выпускного");
    setBannerURL("https://unsplash.com/");
  };

  let handlePresetThree = () => {
    setContainedGradient("contained");
    setContainedColor("");
    setImage("https://i.imgur.com/uqQVNXu.jpg");
    setColor(
      "linear-gradient(0deg, rgba(197, 197, 39, 0.6) 0%, rgba(161, 46, 239, 0.61) 100%)"
    );
    setText("Продают собственники");
    setBannerURL("https://www.thebestdesigns.com/");
  };
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="stretch"
      className="mainContainer"
    >
      <Grid item xs={6}>
        <Editor
          text={text}
          onItemText={(text) => setText(text)}
          onItemColor={(color) => setColor(color)}
          onItemImage={(image) => setImage(image)}
          onItemURL={(url) => setBannerURL(url)}
          bannerURL={bannerURL}
          image={image}
          color={color}
          handlePresetOne={handlePresetOne}
          handlePresetTwo={handlePresetTwo}
          handlePresetThree={handlePresetThree}
          setContainedColor={setContainedColor}
          setContainedGradient={setContainedGradient}
          containedGradient={containedGradient}
          containedColor={containedColor}
        />
      </Grid>
      <Grid item xs={6}>
        <Preview
          text={text}
          color={color}
          image={image}
          bannerURL={bannerURL}
        />
      </Grid>
    </Grid>
  );
}

export default App;
