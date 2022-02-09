import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";
interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const API_URL = "https://api.coinpaprika.com/v1/coins";
const API_URL_PRICE = "https://api.coinpaprika.com/v1/tickers";

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: object;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  // useState 타입을 지정해줘야함.
  // 매번 타입을 지정해줄 필요 없이 자동생성할 수 있음<div className=""></div>
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  useEffect(() => {
    (async () => {
      const infoData = await (await fetch(`${API_URL}/${coinId}`)).json();
      const priceData = await (
        await fetch(`${API_URL_PRICE}/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, []);
  console.log(priceInfo);
  return (
    <Container>
      <Header>
        <Title>{state.name.toUpperCase() || "Loading..."}</Title>
      </Header>
      {loading ? (
        <Loader>{`Loading...`}</Loader>
      ) : (
        <span>{priceInfo?.quotes.USD.price}</span>
      )}
    </Container>
  );
}

export default Coin;
