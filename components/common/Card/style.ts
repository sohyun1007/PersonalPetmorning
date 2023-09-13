import { MOBILE_VERSION_MAX_WIDTH } from "styles/GlobalStyle";
import styled, { css } from "styled-components";

export const Card = styled.div`
  width: 90%;
  height: 7rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding-left: 5rem;
  color: #B0B0B0;
  background-color: white;
  margin-top: 1rem;
  margin-bottom: 1rem;
  justify-content: space-between;
`;

export const Button = styled.button`
    width: 5rem;
    height: 5rem;
    margin-right: 2.5rem;
`

export const Description = styled.p`
`

export const NotificationToggle = styled.button`
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    margin-right: 2.5rem;
`;