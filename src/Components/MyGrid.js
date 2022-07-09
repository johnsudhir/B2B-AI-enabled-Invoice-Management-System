import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/core";
import React from "react";
function MyGrid(props) {
  const [checkboxSelection, setCheckboxSelection] = React.useState(true);

  const cols = [
    { field: "id", headerName: "SN" }, //sl_no
    { field: "customerName", headerName: "Customer Name", width: 120 },
    { field: "customerId", headerName: "Customer ID" }, //cust_number
    //start
    { field: "clear_date", headerName: "Clear Date", width: 100 },
    { field: "business_year", headerName: "Business Year", width: 120 },
    { field: "doc_id", headerName: "Document ID", width: 120 },
    { field: "posting_date", headerName: "Posting Date", width: 120 },
    {
      field: "document_create_date",
      headerName: "Document Create Date",
      width: 150,
    },
    { field: "dueDate", headerName: "Due Date" },
    { field: "invoice_currency", headerName: "Invoice Currency", width: 120 },
    { field: "document_type", headerName: "Document Type", width: 120 },
    { field: "posting_id", headerName: "Posting ID", width: 120 },
    { field: "invoiceAmt", headerName: "Invoice Amount", width: 120 },
    {
      field: "baseline_create_date",
      headerName: "Baseline Create Date",
      width: 120,
    }, //business_Code
    {
      field: "cust_payment_terms",
      headerName: "Customer Payment Terms",
      width: 120,
    }, //business_Code
    { field: "invoiceId", headerName: "Invoice ID" },
    { field: "aging_bucket", headerName: "Aging Bucket", width: 120 }, //business_Code
  ];
  const useStyle = makeStyles({
    root: {
      "& .MuiDataGrid-columnHeaderTitle": {
        overflow: "visible",
        lineHeight: "1.43rem",
        whiteSpace: "normal",
        color: "white",
        // fontWeight:'bold',
      },

      "& .MuiDataGrid-row": {
        color: "white",
      },
      "& .MuiTablePagination-selectRoot ": {
        color: "white",
      },
      "& .MuiTablePagination-root ": {
        color: "white",
      },
      "& .MuiTablePagination-menuItem": {
        color: "white",
      },
      "& .MuiTablePagination-selectIcon": {
        color: "white",
      },
      "& .MuiDataGrid-selectedRowCount": {
        color: "white",
      },
      "& .MuiDataGrid-checkboxInput": { color: "white" },
    },
  });
  const classes = useStyle();

  return (
    <>
      <div
        style={{ display: "flex", height: "100%", backgroundColor: "#2f4251" }}
      >
        <div style={{ width: "100%", height: 530 }}>
          <DataGrid
            rows={props.data}
            className={classes.root}
            columns={cols}
            checkboxSelection={checkboxSelection}
            onSelectionModelChange={props.selectionModel}

            // getRowId={(r) => r.id}
          />
        </div>
      </div>

      {/* <p>
      {data[0]?.customerName}
    </p> */}
    </>
  );
}
export default MyGrid;
