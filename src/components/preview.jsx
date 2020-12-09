import React, { useRef, useState } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import { renderToString } from "react-dom/server";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";

import "./preview.css";

const ComponentToPrint = React.forwardRef(
  ({ text, color, image, bannerURL, colorOverlayOnBack }, ref) => (
    <div
      ref={ref}
      className="storyWrapper"
      onClick={(e) => window.open(bannerURL, "_blank")}
    >
      <div
        style={{
          background: color,
          zIndex: colorOverlayOnBack ? "1" : "3",
        }}
        className="colorOverlay"
      />
      <h1 className="storyHeadline">{text}</h1>

      <img src={image} alt="" className="storyImage" />
    </div>
  )
);

const Preview = ({ text, color, image, bannerURL, colorOverlayOnBack }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const componentRef = useRef();
  let StoryJSX = (
    <ComponentToPrint
      ref={componentRef}
      text={text}
      color={color}
      image={image}
      bannerURL={bannerURL}
      colorOverlayOnBack={colorOverlayOnBack}
    />
  );
  let copyHTML = () => renderToString(StoryJSX);

  return (
    <div className="previewWrapper">
      <div>
        {StoryJSX}
        <div className="presetWrapper">
          <Button
            variant="outlined"
            color="primary"
            onClick={(e) => exportComponentAsPNG(componentRef)}
          >
            PNG
          </Button>
          <CopyToClipboard text={copyHTML()}>
            <Button
              variant="outlined"
              color="primary"
              onClick={(e) => handleClick()}
            >
              HTML
            </Button>
          </CopyToClipboard>
          <CopyToClipboard
            text={JSON.stringify({ text, color, image, bannerURL })}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={(e) => handleClick()}
            >
              JSON
            </Button>
          </CopyToClipboard>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        message="Copied to clipboard!"
      />
    </div>
  );
};

export default Preview;
