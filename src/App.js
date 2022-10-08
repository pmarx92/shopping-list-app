import './App.css';
import Header from './components/Header/Header';
import styled from 'styled-components';
import Input from './components/Input/Input';
import Items from './components/Itemlist/Items';
import { useEffect, useState } from 'react';
import { setLocalStorage, loadLocalStorage } from './components/Storage/localStorage'

function App() {
  const { search } = require("fast-fuzzy");

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [InputFieldData, setInputFieldData] = useState("");


  useEffect(() => {
    const url = "https://fetch-me.vercel.app/api/shopping/items";
    fetchData();
    async function fetchData() {
      const response = await fetch(url);
      const result = await response.json();
      const resultData = result.data;
      setData(resultData);
    }
  }, [])

  useEffect(() => {
    setLocalStorage("itemList", data);
  }, [data])

  const filterList = () => {
    const results = search(InputFieldData, data, {
      keySelector: ({ name }) => name.de,
    });
    console.log("Result aus app: " + results);
    setFilter(results);
  }

  return (
    <div className="App">
      <MainContent>
        <Header />

        <Input data={data} InputFieldData={InputFieldData} setInputFieldData={setInputFieldData} filterList={filterList} />
        <Items filter={filter}/>
      </MainContent>
    </div>
  );
}

const MainContent = styled.div`
background-color: var(--bodyColor);
height: 100vh;
`

export default App;
