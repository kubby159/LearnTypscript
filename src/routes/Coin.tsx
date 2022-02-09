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
function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  // useState 타입을 지정해줘야함.
  // 매번 타입을 지정해줄 필요 없이 자동생성할 수 있음<div className=""></div>
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});
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

  return (
    <Container>
      <Header>
        <Title>{state.name.toUpperCase() || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>{`Loading...`}</Loader> : <span></span>}
    </Container>
  );
}

export default Coin;
