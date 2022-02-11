import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";
import ApexChart from "react-apexcharts";
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
  return (
    <div>
      {isLoading ? (
        "Loading chart...."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "hello",
              data: data?.map((price) => {
                return price.close;
              }),
            },
          ]}
          options={{
            chart: {
              height: 400,
              width: 400,
            },
            theme: {
              mode: "dark",
              palette: "palette1",
              monochrome: {
                enabled: false,
                color: "#255aee",
                shadeTo: "light",
                shadeIntensity: 0.65,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
