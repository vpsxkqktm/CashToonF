import styled from "styled-components";

export const TextInput = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 15px 7px;
  border-radius: 4px;
  margin-bottom: ${(props) => (props.lastOne ? "12" : "8")}px;
`;
