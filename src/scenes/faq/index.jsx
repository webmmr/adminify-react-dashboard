import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

function Faq() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box className="default-container">
      <Header title="Faq" subtitle="Frequently asked question" />

      <Accordion
        defaultExpanded
        sx={{
          margin: "0 0 20px 0",
          backgroundColor: colors.primary[500],
        }}
      >
        <AccordionSummary
          expandIcon={<expandIcon />}
          backgroundColor={colors.primary[500]}
        >
          <Typography color={colors.redAccent[400]} variant="h5">
            Frequently asked question number 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            debitis optio commodi natus, ipsa exercitationem sequi quidem
            nostrum adipisci libero.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          margin: "0 0 20px 0",
          backgroundColor: colors.primary[500],
        }}
      >
        <AccordionSummary
          expandIcon={<expandIcon />}
          backgroundColor={colors.primary[500]}
        >
          <Typography color={colors.redAccent[400]} variant="h5">
            Frequently asked question number 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            debitis optio commodi natus, ipsa exercitationem sequi quidem
            nostrum adipisci libero.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          margin: "0 0 20px 0",
          backgroundColor: colors.primary[500],
        }}
      >
        <AccordionSummary
          expandIcon={<expandIcon />}
          backgroundColor={colors.primary[500]}
        >
          <Typography color={colors.redAccent[400]} variant="h5">
            Frequently asked question number 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            debitis optio commodi natus, ipsa exercitationem sequi quidem
            nostrum adipisci libero.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          margin: "0 0 20px 0",
          backgroundColor: colors.primary[500],
        }}
      >
        <AccordionSummary
          expandIcon={<expandIcon />}
          backgroundColor={colors.primary[500]}
        >
          <Typography color={colors.redAccent[400]} variant="h5">
            Frequently asked question number 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            debitis optio commodi natus, ipsa exercitationem sequi quidem
            nostrum adipisci libero.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          margin: "0 0 20px 0",
          backgroundColor: colors.primary[500],
        }}
      >
        <AccordionSummary
          expandIcon={<expandIcon />}
          backgroundColor={colors.primary[500]}
        >
          <Typography color={colors.redAccent[400]} variant="h5">
            Frequently asked question number 5
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            debitis optio commodi natus, ipsa exercitationem sequi quidem
            nostrum adipisci libero.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Faq;
