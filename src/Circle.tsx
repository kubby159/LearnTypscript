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
