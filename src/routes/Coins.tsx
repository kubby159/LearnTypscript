import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: #fff;
  color: ${(props) => props.theme.bgColor};

  margin-bottom: 10px;
  border-radius: 15px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.5s ease-in;
    cursor: pointer;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface CoinInterFace {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const API_URL = "https://api.coinpaprika.com/v1/coins";

function Coins() {
  const [coins, setCoins] = useState<CoinInterFace[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //즉시 실행함수
    (async () => {
      const response = await fetch(API_URL);
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>Cypto Screen</Title>
      </Header>
      {loading ? (
        <Loader>{`Loading...`}</Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => {
            return (
              <Coin key={coin.id}>
                <Link
                  to={{
                    pathname: `/${coin.id}`,
                    state: { name: coin.name },
                  }}
                >
                  <Img
                    alt={`symbol`}
                    src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  />
                  {coin.name} &rarr; {console.log(coin)}
                </Link>
              </Coin>
            );
          })}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
