import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

function ProgressCircle({ progress = "0.75", size = "40" }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log(progress);
  const angle = progress * 360;

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[500]} 55%, transparent 56%),
        conic-gradient(transparent 0deg ${angle}deg, ${colors.grey[700]} ${angle}deg 360deg), ${colors.greenAccent[400]}`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
      }}
    />
  );
}

export default ProgressCircle;
