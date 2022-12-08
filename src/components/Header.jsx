import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

function Header({ title, subtitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.redAccent[400]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
        textTransform="uppercase"
      >
        {title}
      </Typography>
      <Typography color={colors.grey[300]} variant="h6">
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;
