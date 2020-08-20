import React from "react";
import { Ball, Counter, ProgressArea } from "./progressBar.style";

export default ({ count, current }) => {
  return (
    <ProgressArea>
      <Counter>
        {current} de {count}
      </Counter>
      <div>
        {new Array(count).fill("").map((e, i) => (
          <Ball done={current - 1 >= i}></Ball>
        ))}
      </div>
    </ProgressArea>
  );
};
