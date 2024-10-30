import { StyledButton } from "./components/button.styled"
import styled from 'styled-components' 
import icelandPhoto from '/iceland.image.jpg';
import { Title, Paragraph } from './components/styled-components';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0rem' }}>
      <PageContainer>
        <Title>Welcome to Iceland</Title>
        <Paragraph>Traveling to Iceland can be an incredible experience, with its stunning landscapes and rich, fascinating culture.</Paragraph> 
        <StyledButton>Book here</StyledButton>
        <StyledButton $primary = {true}>More information</StyledButton>
      </PageContainer>
    </div>
  );
}

const PageContainer = styled.div`
  background-color: #f5eff7;  /* background of the page */
  background-image: url(${icelandPhoto});
  background-size: cover;  
  background-position: center; 
  background-repeat: no-repeat; /* Prevents the image from repeating */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  min-width: 100vw;
`;


export default App
