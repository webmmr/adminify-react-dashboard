import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

function StatBox({ title, subtitle, icon, progress, increase }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  console.log(progress);

  return (
    <Box width="100%" m="0 30px">
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box flex="1 1 100%">
            {icon}
            <Typography
              marginTop="10px"
              variant="h4"
              fontWeight="bold"
              sx={{ color: colors.grey[100] }}
            >
              {title}
            </Typography>
            <Typography
              fontSize="14px"
              fontStyle="italic"
              sx={{ color: colors.redAccent[600] }}
            >
              {subtitle}
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <ProgressCircle progress={progress} />
            <Typography
              sx={{
                color: colors.grey[300],
                fontStyle: "italic",
                fontSize: "12px",
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              {increase} increase
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default StatBox;
