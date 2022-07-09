import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import { alignProperty } from "@mui/material/styles/cssUtils";
import MyGrid from "./MyGrid";
const useStyles = makeStyles({
  input: {
    color: "blue",
  },
});
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  // color: theme.palette.text.secondary,
}));

const addstyle = {
  buttonStyle: {
    backgroundColor: "#273D49",
    border: "1px solid #14AFF1",
    height: "1.8rem",
    fontSize: ".7rem",
    color: "#fff",
    margin: ".5rem",
  },
  addTheme: {
    backgroundColor: "#2A3E4C",
    color: "#fff",
  },
  display: {
    backgroundColor: "#2A3E4C",
    color: "#fff",
    display: "flex",
  },
  textStyle: {
    position: "relative",
    bottom: "1.5rem",
    left: "1.5rem",
    height: "2rem",
    border: "1px solid #356680",
  },
  lowerBut: {
    backgroundColor: "#2A3E4C",
    color: "#fff",
    display: "flex",
  },
};

function Analytics() {
  const [open, setOpen] = React.useState(false);
  const [startClearDate, setStartClearDate] = React.useState("");
  const [startDueDate, setStartDueDate] = React.useState("");
  const [endClearDate, setEndClearDate] = React.useState("");
  const [endDueDate, setEndDueDate] = React.useState("");
  const [startBaseline, setStartBaseline] = React.useState("");
  const [endBaseline, setEndBaseline] = React.useState("");
  const [invoiceCurrency, setInvoiceCurrency] = React.useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleStartClearDate = (event, index) => {
    setStartClearDate(event.target.value);
    // var newdate = startClearDate.split("-").reverse().join("-");
    // setStartClearDate(newdate);
  };
  const handleStartDueDate = (event, index) => {
    setStartDueDate(event.target.value);
    // var newdate = startDueDate.split("-").reverse().join("-");
    // setStartDueDate(newdate);
  };
  const handleEndClearDate = (event, index) => {
    setEndClearDate(event.target.value);
    // var newdate = endClearDate.split("-").reverse().join("-");
    // setEndClearDate(newdate);
  };
  const handleEndDueDate = (event, index) => {
    setEndDueDate(event.target.value);
    // var newdate = endDueDate.split("-").reverse().join("-");
    // setEndDueDate(newdate);
  };
  const handleInvoiceCurrency = (event, index) => {
    setInvoiceCurrency(event.target.value);
  };
  const handleStartBaseline = (event, index) => {
    setStartBaseline(event.target.value);
    // var newdate = startBaseline.split("-").reverse().join("-");
    // setStartBaseline(newdate);
  };
  const handleEndBaseline = (event, index) => {
    setEndBaseline(event.target.value);
    // var newdate = endBaseline.split("-").reverse().join("-");
    // setEndBaseline(newdate);
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `http://localhost:8080/highRadiusFinal/chartData?fromClearDate=${startClearDate}&toClearDate=${endClearDate}&fromduedate=${startDueDate}&toDueDate=${endDueDate}&fromBaseDate=${startBaseline}&toBaseDate=${endBaseline}`
      )
      .then((response) => {
        console.log(response.data);
        handleClose();
        //props.setData(response.data);
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
          padding: "11px 50px",
          backgroundColor: "#273D49",
          border: "1px solid #14AFF1",
          height: "2.5rem",
          fontSize: ".9rem",
          color: "#fff",
          marginLeft: "0vh",
          marginTop: "1.9vh",
          marginBottom: "2vh",
          marginRight: "0vh",
        }}
        onClick={handleOpen}
      >
        Analytics
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth="md"
      >
        <DialogTitle style={addstyle.addTheme} id="form-dialog-title">
          Analytics View
          <CloseIcon
            style={{ position: "absolute", right: "1rem", color: "#97A1A9" }}
            onClick={handleClose}
          />
        </DialogTitle>
        <DialogContent style={addstyle.display}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            >
              <Grid item xs={6}>
                <span>Clear Date</span>
              </Grid>
              <Grid item xs={6}>
                <span>Due Date</span>
              </Grid>

              {/* Start Clear Date */}
              <Grid item xs={6}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    From
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                    }}
                    variant="standard"
                    required
                    id="outlined-bare"
                    margin="small"
                    type="date"
                    onChange={handleStartClearDate}
                  />
                </Item>
              </Grid>
              {/* Start Due Date */}
              <Grid item xs={6}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    From
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                    }}
                    variant="standard"
                    required
                    id="outlined-bare"
                    margin="small"
                    type="date"
                    onChange={handleStartDueDate}
                  />
                </Item>
              </Grid>

              {/* Title*/}

              <Grid item xs={6}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    To
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                    }}
                    variant="standard"
                    required
                    id="outlined-bare"
                    margin="small"
                    type="date"
                    onChange={handleEndClearDate}
                  />
                </Item>
              </Grid>
              {/* End clear date */}

              <Grid item xs={6}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    To
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                    }}
                    variant="standard"
                    required
                    id="outlined-bare"
                    margin="small"
                    type="date"
                    onChange={handleEndDueDate}
                  />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <span>Baseline Create Date</span>
              </Grid>
              <Grid item xs={6}>
                <span>Invoice Currency</span>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    From
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                    }}
                    variant="standard"
                    required
                    id="outlined-bare"
                    margin="small"
                    type="date"
                    onChange={handleStartBaseline}
                  />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    Invoice Currency
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                    }}
                    variant="standard"
                    required
                    id="outlined-bare"
                    margin="small"
                    onChange={handleInvoiceCurrency}
                  />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    To
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                    }}
                    variant="standard"
                    required
                    id="outlined-bare"
                    margin="small"
                    type="date"
                    onChange={handleEndBaseline}
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions style={addstyle.lowerBut}>
          <div style={{ flex: "1" }}>
            {/* Start */}
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {/* Invoice Currency */}
              <Grid item xs={6}>
                <Button
                  style={addstyle.buttonStyle}
                  onClick={handleClose}
                  color="primary"
                  fullWidth
                >
                  CANCEL
                </Button>
              </Grid>
              {/* Customer Payment Terms */}

              <Grid item xs={6}>
                <Button
                  style={addstyle.buttonStyle}
                  fullWidth
                  onClick={handlesubmit}
                  color="primary"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
            {/* END */}
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Analytics;
