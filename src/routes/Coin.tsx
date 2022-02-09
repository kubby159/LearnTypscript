import { useState } from "react";
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

function Coin() {
  const { coinId } = useParams<RouteParams>();

  const [loading, setLoading] = useState(true);
  const { state } = useLocation<RouteState>();

  return (
    <Container>
      <Header>
        <Title>{state.name.toUpperCase() || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>{`Loading...`}</Loader> : null}{" "}
    </Container>
  );
}

export default Coin;
