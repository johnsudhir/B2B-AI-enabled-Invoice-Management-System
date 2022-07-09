import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { getData } from "./services/data";
import MyGrid from "./Components/MyGrid";
import PredictButton from "./Components/Predict";
import AnalyticsButton from "./Components/Analytics";
import AdvanceSearchButton from "./Components/AdvancedSearch";
import RefreshButton from "./Components/refresh";
import IdSearchBar from "./Components/IdSearch";
import AddButton from "./Components/Add";
import EditButton from "./Components/Edit";
import DeleteButton from "./Components/Delete";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  // Background color is #2f4251
  const [data, setData] = useState([]);
  const [selectedIds, setSelectedIds] = React.useState([]);
  useEffect(async () => {
    setData(await getData());
    console.log(await getData());
  }, []);

  //console.log(getData());
  return (
    <>
      <Header></Header>
      <div className="btnContainer">
        <PredictButton></PredictButton>
        <AnalyticsButton></AnalyticsButton>
        <AdvanceSearchButton setData={setData}></AdvanceSearchButton>
        <RefreshButton setData={setData}></RefreshButton>
        {/* <RefreshButton></RefreshButton> */}
        <IdSearchBar setData={setData}></IdSearchBar>
        <AddButton></AddButton>
        <EditButton selected={selectedIds}></EditButton>
        <DeleteButton selected={selectedIds}></DeleteButton>
      </div>

      {/* <Helmet bodyAttributes={{style: 'background-color : #2f4251'}}/> */}
      <MyGrid
        data={data}
        selectionModel={(data) => {
          setSelectedIds(data);
        }}
      ></MyGrid>
      <Footer></Footer>
    </>
  );
}

export default App;
