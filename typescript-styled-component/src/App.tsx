import styled from "styled-components";

export default function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  return (
    <div className="App">
      <Title>Hello CodeSandbox</Title>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
