import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export default function PredictButton() {
  return (
    <>
      <>
        <Button
          variant="filled"
          style={{
            // padding: "11px 50px",
            // backgroundColor: "#273D49",
            border: "1px solid #14AFF1",
            height: "2.5rem",
            fontSize: ".9rem",
            color: "#fff",
            marginLeft: "0vh",
            marginTop: "1.9vh",
            marginBottom: "2vh",
          }}

          //onClick={handleClickOpen}
          // classes={{ disabled: styles.disabledButton }}
        >
          Predict
        </Button>
      </>
    </>
  );
}
