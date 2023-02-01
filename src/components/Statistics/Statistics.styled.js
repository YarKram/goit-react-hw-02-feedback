import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  & > li {
    margin-bottom: 5px;

    :nth-child(1) {
      color: green;
    }
    :nth-child(2) {
      color: orange;
    }
    :nth-child(3) {
      color: red;
    }
    :nth-child(4) {
      color: grey;
      font-weight: bold;
    }
    :nth-child(5) {
      font-weight: bold;
    }
  }
`;
