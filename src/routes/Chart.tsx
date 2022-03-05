import { useQuery } from "react-query";
import { useParams } from "react-router";
import { fetchCoinHistory } from "./api";
import ApexChart from "react-apexcharts";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

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
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <div>
      {isLoading ? (
        "Loading.."
      ) : (
        <ApexChart
          type="candlestick"
          series={data?.map((e) => {
            return {
              name: "",
              data: [
                {
                  x: e.time_open,
                  y: [
                    e.open.toFixed(2),
                    e.high.toFixed(2),
                    e.low.toFixed(2),
                    e.close.toFixed(2),
                  ],
                },
              ],
            };
          })}
          options={{
            legend: {
              show: false,
            },
            chart: {
              height: 550,
              width: 500,
              background: `#2f3640`,
              offsetX: 0,
            },

            title: {
              text: "CandleStick Chart",
              align: "left",
            },
            theme: {
              mode: isDark ? "dark" : "light",
            },
            xaxis: {
              type: "datetime",
              crosshairs: {
                show: true,
              },
              tickPlacement: "between",
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
            stroke: {
              show: true,
              curve: "smooth",
              lineCap: "butt",
              colors: undefined,
              width: 2,
              dashArray: 0,
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
