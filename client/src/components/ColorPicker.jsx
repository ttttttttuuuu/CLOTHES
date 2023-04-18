import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";
const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#1c1c1c",
          "#000",
          "#DED0Cb",
          "#BAB5D6",
          "#B1C4E2",
          "#D5A8AC",
          "#F8E6C2",
          "#D4BA98",
          "#93A883",
          "#B0CDC3",
          "#B88FD9",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
