import { ClassNames } from "@emotion/react";
import { Box } from "@material-ui/core";
import { TextField } from "@mui/material";
import axios from "axios";
import * as React from "react";
export default function IdSearchBar(props) {
  const [searchid, setSearchdata] = React.useState("");
  const handlesearch = (event) => {
    setTimeout(function () {
      setSearchdata(event.target.value);
      event.preventDefault();
      axios
        .get(
          `http://localhost:8080/highRadiusFinal/SimpleSearch?searchid=${searchid}`
        )
        .then((response) => {
          console.log(response);
          props.setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  };
  return (
    <>
      <Box m={3} component="div" sx={{ display: "inline", marginTop: 2 }}>
        <TextField
          placeholder="Search Customer Id"
          onChange={handlesearch}
          //value={searchid}
          type="search"
          variant="filled"
          style={{
            background: "#ffff",
            borderRadius: 5 + "px",
          }}
          InputProps={{ disableUnderline: true, margin: "0.5vh" }}
        />
      </Box>
    </>
  );
}
