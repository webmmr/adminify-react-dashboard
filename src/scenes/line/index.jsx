import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";
import Header from "../../components/Header";

function Linechart() {
  return (
    <Box className="default-container">
      <Header title="Line Chart" subtitle="This is a demo Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
}

export default Linechart;
