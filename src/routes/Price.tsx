import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";
import ApexChart from "react-apexcharts";
import styled from "styled-components";
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

const PriceBox = styled.div``;

function Price({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    { refetchInterval: 10000 }
  );

  return (
    <>
      <PriceBox>
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => price.close.toFixed(2)),
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "#2f3640",
            },
            title: {
              text: "Coin Price Move (2WEEKS)",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            xaxis: {
              type: "datetime",
              categories: data?.map((price) => {
                return price.time_close;
              }),
            },
          }}
        ></ApexChart>
      </PriceBox>
    </>
  );
}

export default Price;
