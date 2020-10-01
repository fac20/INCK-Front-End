import styled from "styled-components";
import { keyframes } from "styled-components";

const float = keyframes`
50%{
    transform: translate(0, 40px);
}

`;

export default styled.div`
  animation: ${float} 3s ease infinite;
  background: transparent;
`;
