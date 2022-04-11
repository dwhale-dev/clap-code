import styled from "styled-components";

export default function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  return (
    <div className="App">
      <Title>Hello Clap</Title>
      <h2>Start Coding!!</h2>
    </div>
  );
}
