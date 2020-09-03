import React from "react";
import { Ball, Counter, Wrapper, ProgressArea } from "./progressBar.style";

export default ({ count, current }) => {
  return (
    <ProgressArea>
      <Counter>
        {current} de {count}
      </Counter>
      <Wrapper>
        {new Array(count).fill("").map((e, i) => (
          <Ball done={current - 1 >= i}></Ball>
        ))}
      </Wrapper>
    </ProgressArea>
  );
};
