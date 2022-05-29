import './App.css';
import styled from 'styled-components';
import InputArea from './components/InputArea';

const ChatArea = styled.div`
margin-top: 0.5em;
margin-bottom: 1em;
background: lightgray;
border: solid 2px black;
`;

const MessagesChatArea = styled.div`
box-sizing: border-box;
padding: 50%;
justify-content: flex-end;
`;

function App() {
  return (
    <div className="chat-area-container" >
      <ChatArea >
        <MessagesChatArea/>
        <InputArea />
      </ChatArea>
    </div>
  );
}

export default App;
