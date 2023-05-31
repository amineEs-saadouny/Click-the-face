import React from "react";

export default function Box(props) {
  const style = {
    backgroundColor: props.on ? "#cccccc" : "#222",
  };
  return (
    <div
      style={style}
      className="box"
      onClick={() => {
        props.fun(props.id);
      }}
    >
      {props.on ? <span>😃</span> : <span>😑</span>}
    </div>
  );
}
