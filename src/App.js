import './App.css';
import Header from './components/Header/Header';
import styled, { createGlobalStyle } from 'styled-components';
import Input from './components/Input/Input';
import Items from './components/Itemlist/Items';
import { useEffect, useState } from 'react';
import { setLocalStorage, loadLocalStorage } from './components/Storage/localStorage'
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  const { search } = require("fast-fuzzy");
  const [data, setData] = useState(loadLocalStorage("itemList") ?? []);
  const [filter, setFilter] = useState([]);
  const [InputFieldData, setInputFieldData] = useState("");

  const [Cart, setCart] = useState(loadLocalStorage("cartlist") ?? [])


  const toShoppingCart = (itemName) => {
    setCart([...Cart, itemName])
    setFilter(filter.filter((event) => event !== itemName));
    console.log(itemName);
  }

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
    setLocalStorage("cartlist", Cart);
  }, [Cart])

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
        <ShoppingCart Cart={Cart} />
        <Input data={data} InputFieldData={InputFieldData} setInputFieldData={setInputFieldData} filterList={filterList} />
        <Items filter={filter} toShoppingCart={toShoppingCart} />

      </MainContent>
    </div>
  );
}

const MainContent = styled.div`
background-color: var(--bodyColor);
height: 100vh;
`

export default App;
