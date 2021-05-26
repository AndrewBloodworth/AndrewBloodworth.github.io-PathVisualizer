import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBoard, selectBoard } from "./boardSlice";
import { Gridrow } from "./Gridrow";
import { Board } from "../../Board";

export const Grid = ({ slider, setSlider }) => {
  const { board } = useSelector(selectBoard);
  const dispatch = useDispatch();
  const [mouseDown, setMouseDown] = useState(false);
  const [node, setNode] = useState({ target: null, bool: false });

  useEffect(() => {
    let board = new Board();
    board.manufactureGraph();
    const gridSizer = board.assignGridOfSize(5);
    gridSizer();
    dispatch(setBoard(board));
  }, [dispatch]);
  const handleMouseLeave = (e) => {
    setNode({ ...node, currentlyMoving: false });
    setMouseDown(false);
  };
  if (!Object.keys(board).length) {
    return (
      <div className="loader">
        <h3>Loading Grid</h3>
      </div>
    );
  }
  const getRows = () => {
    //Slider
    const dimensions = board.getDimensions(slider);
    let round = Math.floor((board.height - dimensions.innerHeight) / 2);
    return [...Array(dimensions.innerHeight).keys()].map((row) => (
      <tr key={row} id={`row-${row}`}>
        <Gridrow
          key={row}
          currentRow={row + round}
          mouseDown={mouseDown}
          setMouseDown={setMouseDown}
          node={node}
          setNode={setNode}
          slider={slider}
          setSlider={setSlider}
        />
      </tr>
    ));
  };
  return (
    <div className="grid-container" onMouseLeave={handleMouseLeave}>
      <div className="grid">
        <table className="grid-table">
          <tbody>{getRows()}</tbody>
        </table>
      </div>
    </div>
  );
};
