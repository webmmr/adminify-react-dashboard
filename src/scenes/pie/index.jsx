import { Box } from "@mui/material";
import PieChart from "../../components/PieChart";
import Header from "../../components/Header";

function Piechart() {
  return (
    <Box className="default-container">
      <Header title="Pie Chart" subtitle="This is a demo Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}

export default Piechart;
