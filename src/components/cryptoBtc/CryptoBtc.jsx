import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { LineChart } from "@mui/x-charts/LineChart";
import { orange } from "@mui/material/colors";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

const BtcCard = () => {
  const btcAmount = 0.7568;
  const usdValue = 16213.2;
  const changePercent = 0.56;

  const chartData = [9, 10, 9.5, 10.2, 10.5, 10.9, 11, 11.1, 11.5, 12];

  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        maxWidth: 300,
      }}
    >
      <CardContent>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {btcAmount} BTC
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${usdValue.toLocaleString()}
            </Typography>
          </Box>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Box>

        {/* Chart */}
        <Box sx={{ mt: 2 }}>
          <LineChart
            width={250}
            height={100}
            series={[{ data: chartData, color: "#7B61FF" }]}
            xAxis={[
              {
                scaleType: "point",
                data: chartData.map((_, i) => i.toString()),
                tickLabelStyle: { display: "none" }, // X o‘qi raqamlari yashiriladi
                lineStyle: { stroke: "transparent" }, // X o‘qi chizig‘i yashiriladi
              },
            ]}
            yAxis={[
              {
                tickLabelStyle: { display: "none" }, // Y o‘qi raqamlari yashiriladi
                lineStyle: { stroke: "transparent" }, // Y o‘qi chizig‘i yashiriladi
              },
            ]}
            grid={{ horizontal: false, vertical: false }} // Tarmoq chiziqlari yo‘q qilinadi
            sx={{
              ".MuiLineElement-root": { strokeWidth: 2 },
              ".MuiMarkElement-root": { display: "none" }, // nuqtalarni ham yashiramiz
            }}
          />
        </Box>

        {/* Footer */}
        <Box display="flex" alignItems="center" mt={2}>
          <Avatar sx={{ bgcolor: orange[500], width: 32, height: 32 }}>
            <CurrencyBitcoinIcon fontSize="small" />
          </Avatar>
          <Box ml={1}>
            <Typography variant="body2" fontWeight="bold">
              BTC/USD
            </Typography>
            <Typography variant="caption" sx={{ color: "#4CAF50" }}>
              ▲ {changePercent}%
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BtcCard;
