import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

function Invoices() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email Number", flex: 1 },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (p) => (
        <Typography color={colors.redAccent[400]}>${p.row.cost}</Typography>
      ),
    },
    { field: "date", headerName: "Date", flex: 1 },
  ];

  return (
    <Box className="default-container">
      <Header title="Invoices" subtitle="List of all invoice balances" />

      <Box
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: `1px solid ${colors.primary[500]}`,
          },
          "& .MuiDataGrid-cell": {
            borderBottom: `1px solid ${colors.primary[500]} !important`,
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: `1px solid ${colors.primary[500]}`,
            backgroundColor: colors.primary[500],
          },
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: `1px solid ${colors.primary[500]}`,
            backgroundColor: colors.primary[500],
          },
          "& .name-column--cell": {
            color: colors.redAccent[400],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.redAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
}

export default Invoices;
