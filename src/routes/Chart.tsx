import { useQuery } from "react-query";
import { useParams } from "react-router";
import { fetchCoinHistory } from "./api";
import ApexChart from "react-apexcharts";
import { useState } from "react";
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  // {
  //   name: "candle",
  //   data: [
  //     {
  //       x: null,
  //       y: null,
  //     },
  //   ],
  // },
  return (
    <div>
      {isLoading ? (
        "Loading.."
      ) : (
        <ApexChart
          type="candlestick"
          series={data?.map((e) => {
            return {
              data: [{ x: e.time_open, y: [e.open, e.high, e.low, e.close] }],
            };
          })}
          options={{
            chart: {
              height: 350,
              width: 500,
              background: "transparent",
            },
            title: {
              text: "CandleStick Chart",
              align: "left",
            },
            theme: {
              mode: "dark",
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#00B746",
                  downward: "#EF403C",
                },
                wick: {
                  useFillColor: true,
                },
              },
            },
            fill: {
              colors: ["#1A73E8", "#B32824"],
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
