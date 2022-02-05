import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  // 만약에 value 값이 number 또는 string 이 되길 원한다면?
  const [value, setValue] = useState<number | string>("");
  setValue("2");
  return (
    <Container borderColor={borderColor ?? bgColor} bgColor={bgColor}>
      {text}
    </Container>
  );
}

export default Circle;

interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) =>
  `Hello${playerObj.name} you are ${playerObj.age}`;

sayHello({ name: "nico", age: 12 });
// sayHello({ name: "jay", age: 12, hello });
