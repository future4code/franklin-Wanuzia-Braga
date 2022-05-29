import './App.css';
import styled from 'styled-components';
import InputArea from './components/InputArea';

const ChatArea = styled.div`
width: 600px;
height: 600px;
background: lightgray;
border: solid 2px black;
`;

const MessagesChatArea = styled.div`
box-sizing: border-box;
padding: 48%;
justify-content: flex-end;
`;

function App() {
  return (
    <div className="chat-area-container" >
      <ChatArea >
        <MessagesChatArea />
        <InputArea />
      </ChatArea>
    </div>
  );
}

export default App;
