import styled, {css} from 'styled-components';

export default styled.img`
  width: 100%;
  height: 200px;
  ${(props) =>
          props.src && css`src: ${(props) => props.src}`};
`;