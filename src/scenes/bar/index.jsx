import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";

function Barchart() {
  return (
    <Box className="default-container">
      <Header title="Bar Chart" subtitle="This is a demo Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
}

export default Barchart;
