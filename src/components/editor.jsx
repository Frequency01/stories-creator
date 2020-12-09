import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import "./editor.css";
import { SketchPicker } from "react-color";
import { GradientPickerPopover } from "react-linear-gradient-picker";
import hexToRgba from "hex-to-rgba";

const palletToLinearGradient = (pallet) => {
  let result = pallet.map((part) => {
    let opacity = part.opacity || 0.3;
    console.log(part);
    let colorString = part.color;
    let rgba = colorString.replace("rgb", "rgba");
    let rgbaWithOpacity = rgba.replace(")", "," + opacity + ")");
    console.log(rgbaWithOpacity);
    console.log(opacity);

    return `${rgbaWithOpacity} ${part.offset * 100}%`;
  });
  return "linear-gradient(0deg," + result.join(", ") + ")";
};

const rgbToRgba = (rgb, a = 1) =>
  rgb.replace("rgb(", "rgba(").replace(")", `, ${a})`);
const WrappedSketchPicker = ({ onSelect, ...rest }) => {
  return (
    <SketchPicker
      {...rest}
      color={rgbToRgba(rest.color, rest.opacity)}
      onChange={(c) => {
        const { r, g, b, a } = c.rgb;
        onSelect(`rgb(${r}, ${g}, ${b})`, a);
      }}
    />
  );
};
const initialPallet = [
  { offset: "0.00", color: "rgb(238, 241, 11)" },
  { offset: "1.00", color: "rgb(126, 32, 207)" },
];
console.log(palletToLinearGradient(initialPallet));
const Editor = ({
  onItemText,
  text,
  onItemImage,
  onItemColor,
  onItemURL,
  bannerURL,
  image,
  color,
  handlePresetOne,
  handlePresetTwo,
  handlePresetThree,
  setContainedGradient,
  setContainedColor,
  containedColor,
  containedGradient,
}) => {
  const [open, setOpen] = useState(false);
  const [angle, setAngle] = useState(90);
  const [palette, setPalette] = useState(initialPallet);
  const [gradientIsActive, setGradientIsActive] = useState(false);
  const [colorIsActive, setColorIsActive] = useState(true);

  let handleShowColor = () => {
    setColorIsActive(true);
    setGradientIsActive(false);
    setContainedColor("contained");
    setContainedGradient("");
  };
  let handleShowGradient = () => {
    setGradientIsActive(true);
    setColorIsActive(false);
    setContainedColor("");
    setContainedGradient("contained");
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className="editorContanier"
    >
      <div className="buttonGroup">
        <Button
          variant="outlined"
          color="primary"
          onClick={(_e) => handlePresetOne()}
        >
          Preset 1
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={(_e) => handlePresetTwo()}
        >
          Preset 2
        </Button>

        <Button
          variant="outlined"
          color="primary"
          onClick={(_e) => handlePresetThree()}
        >
          Preset 3
        </Button>
      </div>
      <form noValidate autoComplete="off" style={{ width: "95%" }}>
        <Grid
          container
          justify="center"
          alignItems="stretch"
          direction="column"
        >
          <Grid item>
            <TextField
              className="editorInput"
              id="outlined-basic"
              label="Image URL/Data URI"
              variant="outlined"
              margin="dense"
              value={image}
              onChange={(e) => onItemImage(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              className="editorInput"
              id="outlined-basic"
              margin="dense"
              label="Text"
              variant="outlined"
              value={text}
              onChange={(e) => onItemText(e.target.value)}
            />
          </Grid>
          <Grid item>
            <ButtonGroup color="primary">
              <Button
                variant={containedColor}
                onClick={(e) => handleShowColor()}
              >
                Color
              </Button>
              <Button
                variant={containedGradient}
                onClick={(e) => handleShowGradient()}
              >
                Gradient
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            {colorIsActive ? (
              <TextField
                className="editorInput"
                id="outlined-basic"
                label="Color"
                margin="dense"
                variant="outlined"
                value={color}
                type="color"
                onChange={(e) => onItemColor(hexToRgba(e.target.value, "0.5"))}
              />
            ) : null}
            {gradientIsActive ? (
              <GradientPickerPopover
                {...{
                  open,
                  setOpen,
                  angle,
                  setAngle,
                  showAnglePicker: true,
                  width: 220,
                  maxStops: 3,
                  paletteHeight: 32,
                  palette,
                  onPaletteChange: (newPallete) => {
                    setPalette(newPallete);
                    let color = palletToLinearGradient(newPallete);
                    onItemColor(color);
                    console.log(newPallete);
                  },
                }}
              >
                <WrappedSketchPicker />
              </GradientPickerPopover>
            ) : null}
          </Grid>
          <Grid item>
            <TextField
              className="editorInput"
              id="outlined-basic"
              label="Banner URL"
              margin="dense"
              value={bannerURL}
              variant="outlined"
              onChange={(e) => onItemURL(e.target.value)}
            />
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default Editor;
