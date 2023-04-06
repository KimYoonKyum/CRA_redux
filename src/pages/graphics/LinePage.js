import React, { useEffect, useRef, useState } from "react";

export default function LinePage() {
  const ref = useRef();
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [startCoordinate, setStartCoordinate] = useState({ x: 0, y: 0 });
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const [isStartClick, setIsStartClick] = useState(false);

  const isStartDraw = startCoordinate.x !== 0 && startCoordinate.y !== 0;
  const isEndDraw = coordinate.x !== 0 && coordinate.y !== 0;
  const isDraw =
    startCoordinate.x !== 0 &&
    startCoordinate.y !== 0 &&
    coordinate.x !== 0 &&
    coordinate.y !== 0;

  const onClick = (e) => {
    if (!isStartClick) {
      setStartCoordinate({ x: e.clientX, y: e.clientY });
      setCoordinate({ x: 0, y: 0 });
    } else {
      setCoordinate({ x: e.clientX, y: e.clientY });
    }
    setIsStartClick(!isStartClick);
  };

  useEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      setScreenSize({ width, height });
    }
  }, []);

  console.log(startCoordinate, coordinate, screenSize.width);

  return (
    <div
      className={"Index flex-one flex center relative"}
      ref={ref}
      onClick={onClick}
    >
      <svg width={screenSize.width} height={screenSize.height}>
        {isStartDraw && (
          <circle cx={startCoordinate.x} cy={startCoordinate.y - 64} r="5" />
        )}
        {isEndDraw && <circle cx={coordinate.x} cy={coordinate.y - 64} r="5" />}
        {isDraw && (
          <line
            x1={startCoordinate.x}
            y1={startCoordinate.y - 64}
            x2={coordinate.x}
            y2={coordinate.y - 64}
            style={{ stroke: "rgb(0,0,0)", strokeWidth: 2, zIndex: 10 }}
          />
        )}
      </svg>
    </div>
  );
}
