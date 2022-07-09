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
const useStyles = makeStyles({
  input: {
    color: "blue",
  },
});
// const styles = (theme) => ({
//   disabledButton: {
//     backgroundColor: theme.palette.primary || "red",
//   },
// });
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

function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [invoiceCurrency, setInvoiceCurrency] = React.useState("");
  const [custPaymentTerms, setCustomerPaymentTerms] = React.useState("");
  const handleOpen = () => {
    console.log(props.selected);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleInvoiceCurrency = (event, index) => {
    setInvoiceCurrency(event.target.value);
  };
  const handleCustomerPaymentTerms = (event, index) => {
    setCustomerPaymentTerms(event.target.value);
  };
  const handlesubmit = (event) => {
    console.log(props.selected);
    event.preventDefault();
    axios
      .post(
        `http://localhost:8080/highRadiusFinal/EditInvoice?invCurrency=${invoiceCurrency}&cusPaymentTerms=${custPaymentTerms}&id=${props.selected[0]}`
      )
      .then((response) => {
        console.log(response);
        if (response.data === 0) {
          alert("Cannot Edit Row");
        } else {
          alert("Row Edited Successfully");
        }
        handleClose();
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
          marginLeft: "2vh",
          marginTop: "1.9vh",
          marginBottom: "2vh",
        }}
        onClick={handleOpen}
        // classes={{ disabled: styles.disabledButton }}
        disabled={
          "true"
            ? props.selected.length > 1 || props.selected.length === 0
            : "false"
        }
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth="md"
      >
        <DialogTitle style={addstyle.addTheme} id="form-dialog-title">
          Edit Invoice
          <CloseIcon
            style={{ position: "absolute", right: "1rem", color: "#97A1A9" }}
            onClick={handleClose}
          />
        </DialogTitle>
        <DialogContent style={addstyle.display}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {/* Invoice Currency */}
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
                    margin="normal"
                    onChange={handleInvoiceCurrency}
                  />
                </Item>
              </Grid>
              {/* Customer Payment Terms */}
              <Grid item xs={6}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    Customer Payment Terms
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
                    margin="normal"
                    onChange={handleCustomerPaymentTerms}
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
                >
                  CANCEL
                </Button>
              </Grid>
              {/* Customer Payment Terms */}
              <Grid item xs={6}>
                <Button
                  style={addstyle.buttonStyle}
                  onClick={handlesubmit}
                  color="primary"
                >
                  EDIT
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

export default FormDialog;
