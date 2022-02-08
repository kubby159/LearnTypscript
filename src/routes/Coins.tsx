import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  padding: 0px 20px;
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
    /* 글자 밖을 클릭해도 접속할 수 있게 블럭요소로 바꿔준다. */
    display: block;
    /* padding을 이용해서 클릭범위를 넓힌다. */
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

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const coins = [
  {
    id: "stx-stacks",
    name: "Stacks",
    symbol: "STX",
    rank: 61,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "etc-ethereum-classic",
    name: "Ethereum Classic",
    symbol: "ETC",
    rank: 39,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "matic-polygon",
    name: "Polygon",
    symbol: "MATIC",
    rank: 16,
    is_new: false,
    is_active: true,
    type: "token",
  },
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
];
function Coins() {
  return (
    <Container>
      <Header>
        <Title>Cypto Screen</Title>
      </Header>
      <CoinsList>
        {coins.map((coin) => {
          return (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`}> {coin.name} &rarr; </Link>
            </Coin>
          );
        })}
      </CoinsList>
    </Container>
  );
}

export default Coins;
