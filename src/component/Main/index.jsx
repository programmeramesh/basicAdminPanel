import React from "react";

import DataList from "./DataList";

const Data = (props) => {
  const { selectTab, selectedTab, search } = props;

  return (
    <div>
      <DataList selectTab={selectTab} selectedTab={selectedTab} search={search} />
    </div>
  );
};
export default Data;
