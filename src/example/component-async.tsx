import { FC } from "react";
import makeAsyncScript from "react-async-script";

const ComponentAsync: FC = () => <div id="ppplus" />;

export default makeAsyncScript(
  "https://www.paypalobjects.com/webstatic/ppplus/ppplus.min.js"
)(ComponentAsync);
