import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import Editor from "./components/editor";
import Preview from "./components/preview";
// import carImage from "./components/carImageDataURI";

function App() {
  const [text, setText] = useState("Ждем ваш текст..");
  const [color, setColor] = useState(
    "linear-gradient(0deg, rgba(231, 235, 36, 0.5) 0%, rgba(134, 37, 216, 0.5) 100%)"
  );
  const [image, setImage] = useState("https://i.imgur.com/2fKdXRY.png");
  const [bannerURL, setBannerURL] = useState("https://ya.ru/");
  const [colorIsActive, setColorIsActive] = useState(false);
  const [colorOverlayOnBack, setColorOverlayOnBack] = useState(true);

  let handlePresetMusk = () => {
    setColorOverlayOnBack(true);
    setColorIsActive(false);
    setImage("https://i.imgur.com/TktGZ7x.png");
    setColor(
      "linear-gradient(0deg, rgb(57, 158, 152, 0.5) 0%, rgb(206, 58, 255, 0.5) 100%)"
    );
    setText("Как тебе такое, Илон Маск?");
    setBannerURL("https://www.thebestdesigns.com/");
  };

  let handlePresetShoes = () => {
    setColorIsActive(true);
    setImage("https://i.imgur.com/AELINWP.png");
    setColor("rgba(136, 39, 155, 0.5)");
    setText("Осенняя обувь");
    setBannerURL("https://unsplash.com/");
    setColorOverlayOnBack(false);
  };

  let handlePresetDress = () => {
    setColorIsActive(false);
    setImage("https://i.imgur.com/oJHnD4p.jpg");
    setColor(
      "linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(255, 255, 255, 0.27) 100%)"
    );
    setText("Купить платье для выпускного");
    setBannerURL("https://dribbble.com/shots");
    setColorOverlayOnBack(false);
  };
  let handlePresetDog = () => {
    setColorIsActive(true);
    setImage("https://i.imgur.com/Ii1Qv35.jpg");
    setColor("rgba(109, 108, 100, 0.5)");
    setText("Бультерьеры от заводчиков");
    setBannerURL("https://www.iconfinder.com/");
    setColorOverlayOnBack(false);
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
          handlePresetMusk={handlePresetMusk}
          handlePresetDress={handlePresetDress}
          handlePresetShoes={handlePresetShoes}
          handlePresetDog={handlePresetDog}
          colorIsActive={colorIsActive}
          setColorIsActive={setColorIsActive}
          colorOverlayOnBack={colorOverlayOnBack}
          setColorOverlayOnBack={setColorOverlayOnBack}
        />
      </Grid>
      <Grid item xs={6}>
        <Preview
          text={text}
          color={color}
          image={image}
          bannerURL={bannerURL}
          colorOverlayOnBack={colorOverlayOnBack}
        />
      </Grid>
    </Grid>
  );
}

export default App;
