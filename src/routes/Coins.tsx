import styled from "styled-components";

const Container = styled.div`
  padding: 0px 10px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li``;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

function Coins() {
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
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      <CoinsList>
        {coins.map((coin) => {
          <Coin key={coin.id}> {coin.name} </Coin>;
        })}
      </CoinsList>
    </Container>
  );
}

export default Coins;
