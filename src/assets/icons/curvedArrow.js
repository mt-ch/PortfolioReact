import React from "react";

function CurvedArrow(props) {
  return (
    <svg
      className={props.className}
      height={props.height}
      width={props.width}
      x="0px"
      y="0px"
      viewBox="0 0 66.571 66.571"
      stroke="black" stroke-width="1"
    >
      <path
        d="M41.705,0.342c-0.454-0.455-1.195-0.455-1.651,0c-0.454,0.453-0.454,1.197,0,1.652L55.82,17.756H18.867
		c-7.085,0-12.847,5.767-12.847,12.847v34.801c0,0.644,0.523,1.168,1.168,1.168c0.644,0,1.167-0.524,1.167-1.168V30.609
		c0-5.795,4.716-10.511,10.511-10.511h37.464l-16.273,16.26c-0.456,0.454-0.456,1.198,0,1.652c0.229,0.23,0.527,0.34,0.826,0.34
		c0.301,0,0.598-0.114,0.825-0.34l18.842-18.828L41.705,0.342z"
        fill={props.fill}
      />
    </svg>
  );
}

export default CurvedArrow;
