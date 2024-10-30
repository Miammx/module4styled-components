import styled, {css} from 'styled-components'

const StyledButton = styled.button<{ $primary?: boolean; }>`
  background-color: #93daf7;
  font-size: 20px;
  font-style: verdana;
  width: 170px;          
  height: 60px;
  margin: 3.5rem 1rem;
  padding: 0.5rem 0;
  border-radius: px;  


  ${props => props.$primary && css`
    background: #fcd47f;
    color: black;
    margin-top: -120px;
    margin-bottom: 100px;
  `}      
`;
   
export {StyledButton}