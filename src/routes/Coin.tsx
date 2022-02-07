import { useParams } from "react-router";

interface RouteParams {
  coinId: string;
}
function Coin() {
  const { coinId } = useParams<RouteParams>();
  //http://localhost:3000/btc 의 btc 부분을 가지고옴.
  return <h1>Coin : {coinId}</h1>;
}

export default Coin;
