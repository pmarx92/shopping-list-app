import './App.css';
import Header from './components/Header/Header';
import styled from 'styled-components';
import Input from './components/Input/Input';
import Items from './components/Itemlist/Items';


function App() {
  return (
    <div className="App">
      <MainContent>
        <Header />
        <Input />
        <Items /> 
      </MainContent>
    </div>
  );
}
const MainContent = styled.div`
background-color: var(--bodyColor);
height: 100vh;
`

export default App;
