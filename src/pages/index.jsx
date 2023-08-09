import React  from "react";
import { useState } from "react";
import Data from "../component/Main";
import DataDetails from "../component/Main/DataDetails";
import SearchBar from "../component/SearchBar";

const DataItem=()=>{
    const [selectedTab, selectTab]=useState(null);
    const [search, setSearch] = useState("");
    console.log(selectedTab)
    return(
        <>
        <SearchBar selectTab={selectTab} search={search} setSearch={setSearch}/>
        <Data search={search} selectedTab={selectedTab} selectTab={selectTab}/>

        {selectedTab&& <DataDetails details={selectedTab}/>}
        </>
    )
}
export default DataItem;