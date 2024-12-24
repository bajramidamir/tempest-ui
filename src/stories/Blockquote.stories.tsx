import React from "react";
import Blockquote from "../components/Blockquote/Blockquote";

export default {
  title: "Components/Blockquote",
  component: Blockquote,
};

export const RegularBlockquote = () => (
  <Blockquote>
    "The only limit to our realization of tomorrow is our doubts of today." -
    Franklin D. Roosevelt
  </Blockquote>
);

export const BashBlockquote = () => (
  <Blockquote language="bash" copyable>
    npm install tempest-ui
  </Blockquote>
);

export const JavascriptBlockquote = () => (
  <Blockquote language="javascript" copyable>
    {`import React from "react";
import Blockquote from "./Blockquote";

const Example = () => (
  <Blockquote copyable>
    "The journey of a thousand miles begins with a single step."
  </Blockquote>
);

export default Example;`}
  </Blockquote>
);
