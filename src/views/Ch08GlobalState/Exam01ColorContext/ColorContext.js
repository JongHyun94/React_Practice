import React, { useState } from "react";

const ColorContext = React.createContext({
  color: "yellow",
  setColor: function(color) {this.color = color;} //함수다 하는 표시만함
});

export function ColorContextProvider(props) {
  const [color, setColor] = useState("yellow");
  const value = {
    color: color,
    setColor: setColor
  };
  return (
    <ColorContext.Provider value={value}>
      {props.children}
    </ColorContext.Provider>
  )
}

export default ColorContext;