import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import React from "react";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
export default function RefreshButton(props) {
  const handleRefreshClick = (event) => {
    event.preventDefault();
    axios
      .get(`http://localhost:8080/highRadiusFinal/RecieveData?page=1`)
      .then((response) => {
        props.setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Button
        variant="outlined"
        style={{
          // padding: "11px 50px",
          backgroundColor: "#273D49",
          border: "1px solid #14AFF1",
          height: "2.5rem",
          fontSize: ".9rem",
          color: "#fff",
          marginLeft: "0vh",
          marginTop: "1.9vh",
          marginBottom: "2vh",
        }}
        startIcon={<RefreshRoundedIcon />}
        onClick={handleRefreshClick}
        // classes={{ disabled: styles.disabledButton }}
      ></Button>
    </>
  );
}
