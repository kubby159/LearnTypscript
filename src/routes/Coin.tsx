import { useParams } from "react-router";

interface RouteParams {
  coinId: string;
}
function Coin() {
  const { coinId } = useParams<RouteParams>();
  //http://localhost:3000/btc 의 btc 부분을 가지고옴.
  //TS : useParams를 이용 시 타입을 안붙여주면 TS는 {} 데이터로 인식하게 되어 오류를 발생시킨다.
  //그러므로 위와 같이 타입을 지정해줘야함.
  return <h1>Coin : {coinId}</h1>;
}

export default Coin;
