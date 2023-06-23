import styled from 'styled-components';

export const FeedbackStyled = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 50px;
  }
  ul {
    list-style: none;
    font-size: 20px;
    li:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  p {
    font-size: 20px;
  }
  button:hover {
    cursor: pointer;
    &:active {
      background-color: lightgreen;
    }
  }
`;
