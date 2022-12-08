import {
  DownloadOutlined,
  EmailOutlined,
  PersonAdd,
  PointOfSale,
  Traffic,
} from "@mui/icons-material";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import StatBox from "../../components/StatBox";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import { mockTransactions } from "../../data/mockData";
import { borderBottom, textAlign } from "@mui/system";
import ProgressCircle from "../../components/ProgressCircle";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box className="default-container">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.redAccent[400],
              padding: "10px 20px",
              color: colors.grey[100],
              borderRadius: "5px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {" "}
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Receipts
          </Button>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[500]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="5px"
        >
          <StatBox
            title="12,459"
            subtitle="Emails Sent"
            progress="0.86"
            increase="+14%"
            icon={
              <EmailOutlined
                sx={{
                  color: colors.redAccent[400],
                  fontSize: "20px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[500]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="5px"
        >
          <StatBox
            title="1,456"
            subtitle="Sales Obtained"
            progress="0.77"
            increase="+29%"
            icon={
              <PointOfSale
                sx={{
                  color: colors.redAccent[400],
                  fontSize: "20px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[500]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="5px"
        >
          <StatBox
            title="34,876"
            subtitle="New Clients"
            progress="0.66"
            increase="+11%"
            icon={
              <PersonAdd
                sx={{
                  color: colors.redAccent[400],
                  fontSize: "20px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[500]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="5px"
        >
          <StatBox
            title="2,544,233"
            subtitle="Traffic received"
            progress="0.91"
            increase="+5%"
            icon={
              <Traffic
                sx={{
                  color: colors.redAccent[400],
                  fontSize: "20px",
                }}
              />
            }
          />
        </Box>

        {/* Row 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[500]}
          borderRadius="5px"
          padding="20px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h4"
                color={colors.grey[100]}
                fontWeight="600"
              >
                $59,321,433
              </Typography>
              <Typography variant="h6" color={colors.redAccent[400]}>
                Revenue generated
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlined
                  sx={{ color: colors.redAccent[400], fontSize: "25px" }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" mt="-10px">
            <LineChart isDashboard="true" />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[500]}
          borderRadius="5px"
          padding="20px"
          overflow="auto"
        >
          <Box
            borderBottom={`4px solid ${colors.primary[400]}`}
            paddingBottom="10px"
          >
            <Typography variant="h4" color={colors.grey[100]} fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          <Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                key={`${transaction.txId}-${i}`}
                borderBottom={`4px solid ${colors.primary[400]}`}
              >
                <Box p="10px 0">
                  <Typography color={colors.redAccent[400]} fontSize="14px">
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[400]} fontSize="14px">
                    {transaction.user}
                  </Typography>
                </Box>
                <Box>
                  <Typography textAlign="center" color={colors.grey[100]}>
                    {transaction.date}
                  </Typography>
                </Box>
                <Box
                  backgroundColor={colors.redAccent[400]}
                  color={colors.grey[100]}
                  p="5px 10px"
                  borderRadius="5px"
                >
                  $ {transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ROW 3 */}

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[500]}
          borderRadius="5px"
          padding="20px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="30px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.redAccent[400]}
              sx={{ mt: "15px" }}
            >
              $48,322 revenue generated
            </Typography>
            <Typography variant="h6">
              Includes exta misc expendtures and costs
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[500]}
          borderRadius="5px"
          padding="20px"
        >
          <Typography variant="h5" fontWeight="600">
            Sales Quantity
          </Typography>

          <Box height="250px">
            <BarChart isDahboard="true" />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[500]}
          borderRadius="5px"
          padding="20px"
        >
          <Typography variant="h5" fontWeight="600">
            Geography Based Chart
          </Typography>

          <Box height="220px" mt="20px">
            <GeographyChart isDashboard="true" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
