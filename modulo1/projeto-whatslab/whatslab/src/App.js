import styled from 'styled-components';
import InputArea from './components/InputArea';

const ChatAreaContainer = styled.div`
  display: flex;
  justify-content: center;
  `;

const ChatArea = styled.div`
display: flex;
margin-top: 0.5em;
margin-bottom: 1em;
border: solid 2px black;
min-height: 90vh;
border-radius: 10px;
width: 40%;

`;


function App() {
  return (
    <ChatAreaContainer >
      <ChatArea >
      <InputArea />
      </ChatArea>
    </ChatAreaContainer>
  )
}

export default App;
