import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

function Contact() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Register ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email Number", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "Zipcode", flex: 1 },
  ];

  return (
    <Box className="default-container">
      <Header title="Contacts" subtitle="All team member contact information" />

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
          "& .css-vi39f8-MuiButtonBase-root-MuiButton-root": {
            color: `${colors.redAccent[400]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
}

export default Contact;
