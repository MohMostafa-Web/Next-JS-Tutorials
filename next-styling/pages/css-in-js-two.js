import styled from "styled-components";

/* Create Styled Component "Title" using "styled" from Styled Components */
const Title = styled.h2`
  padding: 30px;
  text-align: center;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary}; // using Tempelate Literals, "theme.colors"
`;

function CssJsTwo() {
  return <Title>Hello World, using Styled Components</Title>;
}

export default CssJsTwo;
