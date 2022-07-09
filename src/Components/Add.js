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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const addstyle = {
  buttonStyle: {
    backgroundColor: "#273D49",
    border: "1px solid #14AFF1",
    height: "2.8rem",
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
  dialogPaper: {
    minHeight: "80vh",
    maxHeight: "80vh",
    width: "100%",
    maxWidth: "none",
  },
  lowerBut: {
    backgroundColor: "#2A3E4C",
    color: "#fff",
    display: "flex",
  },
};

function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [custnameinp, setName] = React.useState("");
  const [custnum, setCustNum] = React.useState("");
  const [invnum, setInvnum] = React.useState("");
  const [duedate, setDueDate] = React.useState("");
  const [invamt, setInvAmt] = React.useState("");
  const [clearDate, setClearDate] = React.useState("");
  const [businessYear, setBusinessYear] = React.useState("");
  const [documentId, setDocumentId] = React.useState("");
  const [postingDate, setPostingDate] = React.useState("");
  const [documentCreateDate, setDocumentCreateDate] = React.useState("");
  const [invoiceCurrency, setInvoiceCurrency] = React.useState("");
  const [documentType, setDocumentType] = React.useState("");
  const [postingId, setPostingId] = React.useState("");
  const [baselineCreateDate, setBaselineCreateDate] = React.useState("");
  const [customerPaymentTerms, setCustomerPaymentTerms] = React.useState("");
  const [invoiceId, setInvoiceId] = React.useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClearDate = (event, index) => {
    setClearDate(event.target.value);
  };
  const handleInvoiceId = (event, index) => {
    setInvoiceId(event.target.value);
  };
  const handleCustomerPaymentTerms = (event, index) => {
    setCustomerPaymentTerms(event.target.value);
  };
  const handleBaselineCreateDate = (event, index) => {
    setBaselineCreateDate(event.target.value);
  };
  const handlePostingId = (event, index) => {
    setPostingId(event.target.value);
  };
  const handleInvoiceCurrency = (event, index) => {
    setInvoiceCurrency(event.target.value);
  };
  const handleDocumentType = (event, index) => {
    setDocumentType(event.target.value);
  };
  const handleBusinessYear = (event, index) => {
    setBusinessYear(event.target.value);
  };
  const handlePostingDate = (event, index) => {
    setPostingDate(event.target.value);
  };
  const handleDocumetCreateDate = (event, index) => {
    setDocumentCreateDate(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handlecustname = (event, index) => {
    setName(event.target.value);
  };
  const handlecustnum = (event, index) => {
    setCustNum(event.target.value);
  };
  const handleduedate = (event, index) => {
    setDueDate(event.target.value);
  };
  // const handledInvnum = (event, index) => {
  //   setInvnum(event.target.value);
  // };
  const handleInvamt = (event, index) => {
    setInvAmt(event.target.value);
  };
  const handleDocumentID = (event, index) => {
    setDocumentId(event.target.value);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `http://localhost:8080/highRadiusFinal/AddInvoice?cname=${custnameinp}&cnum=${custnum}&clearDate=${clearDate}&businessYear=${businessYear}&docId=${documentId}&postDate=${postingDate}&docCreateDate=${documentCreateDate}&dueDate=${duedate}&invoiceCurrency=${invoiceCurrency}&docType=${documentType}&postId=${postingId}&openAmt=${invamt}&baseDate=${baselineCreateDate}&customerPayTerms=${customerPaymentTerms}&invId=${invoiceId}`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      handleClose();
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
        }}
        onClick={handleOpen}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Button>
      <Dialog
        fullScreen
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle style={addstyle.addTheme} id="form-dialog-title">
          Add Invoice
          <CloseIcon
            style={{ position: "absolute", right: "1rem", color: "#97A1A9" }}
            onClick={handleClose}
          />
        </DialogTitle>
        <DialogContent style={addstyle.display}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={4}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {/* Business Code */}
              <Grid item xs={3}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    Business Code
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
                    onChange={handlecustname}
                  />
                </Item>
              </Grid>
              {/* Customer Number */}
              <Grid item xs={3}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    Customer Number
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                      backgroundColor: "white",
                    }}
                    variant="standard"
                    required
                    id="outlined-bare"
                    margin="normal"
                    onChange={handlecustnum} //handlecustnum
                  />
                </Item>
              </Grid>
              {/* Clear Date */}
              <Grid item xs={3}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    Clear Date
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                      shrink: true,
                    }}
                    margin="normal"
                    variant="standard"
                    id="date"
                    type="date"
                    onChange={handleClearDate}
                    InputLabelProps={{}}
                  />
                </Item>
              </Grid>
              {/*Business Year*/}
              <Grid item xs={3}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    Business Year
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                      backgroundColor: "white",
                    }}
                    variant="standard"
                    required
                    id="outlined-bare"
                    margin="normal"
                    onChange={handleBusinessYear}
                  />
                </Item>
              </Grid>
              {/*Document Id */}
              <Grid item xs={3}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    Document ID
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                      backgroundColor: "white",
                    }}
                    variant="standard"
                    required
                    id="outlined-bare"
                    margin="normal"
                    onChange={handleDocumentID}
                  />
                </Item>
              </Grid>
              {/*Posting Date*/}
              <Grid item xs={3}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    Posting Date
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                      shrink: true,
                    }}
                    margin="normal"
                    variant="standard"
                    id="date"
                    type="date"
                    onChange={handlePostingDate}
                    InputLabelProps={{}}
                  />
                </Item>
              </Grid>
              {/* Document Create Date */}
              <Grid item xs={3}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    Document Create Date
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                      shrink: true,
                    }}
                    margin="normal"
                    variant="standard"
                    id="date"
                    type="date"
                    onChange={handleDocumetCreateDate}
                    InputLabelProps={{}}
                  />
                </Item>
              </Grid>
              {/*Due Date*/}
              <Grid item xs={3}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    Due Date
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                      shrink: true,
                    }}
                    margin="normal"
                    variant="standard"
                    id="date"
                    type="date"
                    onChange={handleduedate}
                    InputLabelProps={{}}
                  />
                </Item>
              </Grid>
              {/* Invoice Currency */}
              <Grid item xs={3}>
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
                      shrink: true,
                    }}
                    variant="standard"
                    required
                    id="outlined-bare"
                    margin="normal"
                    onChange={handleInvoiceCurrency}
                  />
                </Item>
              </Grid>
              {/* Document Type */}
              <Grid item xs={3}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    Document Type
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                      shrink: true,
                    }}
                    variant="standard"
                    required
                    id="outlined-bare"
                    margin="normal"
                    onChange={handleDocumentType}
                  />
                </Item>
              </Grid>
              {/* Posting ID */}
              <Grid item xs={3}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    Posting ID
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                      shrink: true,
                    }}
                    variant="standard"
                    required
                    id="outlined-bare"
                    margin="normal"
                    onChange={handlePostingId}
                  />
                </Item>
              </Grid>
              {/*Invoice Amount or Total Open Amount*/}
              <Grid item xs={3}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    Total Open Amount
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                      shrink: true,
                    }}
                    variant="standard"
                    required
                    id="outlined-bare"
                    margin="normal"
                    onChange={handleInvamt}
                  />
                </Item>
              </Grid>
              {/* Baseline Create Date */}
              <Grid item xs={3}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    Baseline Create Date
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                      shrink: true,
                    }}
                    margin="normal"
                    variant="standard"
                    id="date"
                    type="date"
                    onChange={handleBaselineCreateDate}
                    InputLabelProps={{}}
                  />
                </Item>
              </Grid>
              {/* Customer Payment Terms */}
              <Grid item xs={3}>
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
                      shrink: true,
                    }}
                    variant="standard"
                    required
                    id="outlined-bare"
                    margin="normal"
                    onChange={handleCustomerPaymentTerms}
                  />
                </Item>
              </Grid>
              {/* Invoice Id */}
              <Grid item xs={3}>
                <Item>
                  <span
                    style={{
                      color: "#97A1A9",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    Invoice ID
                  </span>
                  <TextField
                    // style={addstyle.textStyle}
                    InputProps={{
                      disableUnderline: true,
                      className: useStyles.input,
                      shrink: true,
                    }}
                    variant="standard"
                    required
                    id="outlined-bare"
                    margin="normal"
                    onChange={handleInvoiceId}
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        
        <DialogActions style={addstyle.lowerBut}>
          <div style={{ flex: "3" }}>
            <Button
              style={addstyle.buttonStyle}
              onClick={handleClose}
              color="primary"
              size="medium"
            >
              Cancel
            </Button>
          </div>
          <div style={{ justifyContent: "flex-end" }}>
            
            <Button
              style={addstyle.buttonStyle}
              onClick={handlesubmit}
              color="primary"
              size="medium"
            >
              Add
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default FormDialog;
