import React from "react";
import BoxesData from "./BoxesData";
import Box from "./Box";

function App(props) {
  const [squares, setSquares] = React.useState(BoxesData);
  function toggle(id) {
    setSquares((prevSquares) => {
      const newPrevSquares = [...prevSquares];
      newPrevSquares[id].on = !newPrevSquares[id].on;
      return newPrevSquares;
    });
  }
  let boxes = squares.map((box) => {
    return (
      <Box id={box.id} key={box.id} fun={(id) => toggle(id)} on={box.on} />
    );
  });

  const [isShown, setIsShown] = React.useState(false);
  function toggleShown() {
    setIsShown(!isShown);
  }
  return (
    <div className="container">
      <div className="boxes-container">{boxes}</div>
    </div>
  );
}

export default App;
