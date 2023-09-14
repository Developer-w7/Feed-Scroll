import React from "react";
import { LineWave } from "react-loader-spinner";

function Loader() {
  return (
    <div className="center-wrapper">
<LineWave
  height="150"
  width="150"
  color="#4fa94d"
  ariaLabel="line-wave"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  firstLineColor=""
  middleLineColor=""
  lastLineColor=""
/>
    </div>
  );
}

export default Loader;
