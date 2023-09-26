import styled from 'styled-components';

const Card =  styled.div `
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  padding: 2px;
  margin-right: 10px;
  color: black;
  background: white;
  text-align: center;
  font-family: 'arial', 'sans-serif';
`;

const CardTitle = styled.p`
  color: grey;
  font-size: 18px;
`;

const CardNIM = styled.p`
  color: grey;
  font-size: 20px;
`;

const CardButton = styled.button`
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  
  &:hover {
    opacity: 0.7;
  }
`;

export default Card;
export {CardTitle, CardNIM, CardButton}