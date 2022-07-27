
import Header from './header.js';
import Content from './Content.js';
import Footer from './footer';
import { useState, useEffect } from "react";
import AddItem from './Additem.js';
import SearchItem from './SearchItem.js';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []

    // default data
    //    [ {
    //         id: 1,
    //         checked: false,
    //         item:"item1"
    //     },
    //     {
    //         id:2,
    //         checked: false,
    //         item:"item 2"
    //     },
    //     {
    //         id: 3,
    //         checked: false,
    //         item:"item 3"
    //     },
    //   ]
);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('')
  
    useEffect(() => {
      // JSON.parse(localStorage.getItem('shoppinglist'))
      localStorage.setItem('shoppinglist', JSON.stringify(items))
    }, [items])
    
  // const setAndSaveItems = (newItems) => {
  //   setItems(newItems);
  //   // saving state in local storage
  //   localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  // } not in use because use effect is initiallizing and saving to local storage so set set of items at the individual functions


  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item)
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id );
    setItems(listItems);
  }

  const handleSubmit = (e) => {
   e.preventDefault();
   if (!newItem) return;
    //  add item
    addItem(newItem)
    setNewItem('')
  }


  return (
    <div className="App">
      <Header length={items.length}/>
      <SearchItem
        search ={search}
        setSearch ={setSearch}
      />
      <AddItem
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      
      <Content 
        items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer />

    </div>
  );
}

export default App;
