import './App.css';
import styled from 'styled-components';
import InputArea from './components/InputArea';

const ChatArea = styled.div`
width: 600px;
height: 600px;
background: lightgray;
border: solid 2px black;
justify-content: flex-end;
align-items: flex-end;
align-content: flex-end;
`;
const MesagesChatArea = styled.div`
box-sizing: border-box;
padding: 48%;
`;

function App() {
  return (
    <div className="chat-area-container" >
      <ChatArea >
        <MesagesChatArea />
        <InputArea />
      </ChatArea>
    </div>
  );
}

export default App;
