import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";

import Header from "../../components/Header";
import { tokens } from "../../theme";

function Geographychart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.action.mode);

  return (
    <Box className="default-container">
      <Header
        title="Geography Chart"
        subtitle="This is a demo Geography Chart"
      />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="5px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
}

export default Geographychart;
