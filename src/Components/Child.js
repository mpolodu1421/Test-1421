import React from "react";
function Child(props) {
  return (
    <div>
      <h1>Welcome to child Component</h1>

      <button onClick={props.incrementCount}>Click</button>
    </div>
  );
}
export default Child;
