import { useState } from "react"

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item:"Coacoa covered  almonds unsalted"
        },
        {
            id: 2,
            checked: false,
            item:"ha"
        },
        {
            id: 3,
            checked: false,
            item:"ho"
        }
    ]);

    const handleCheck = (id) =>{
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
        setItems(listItems)
                // saving state in local storage
                localStorage.setItem('shoppinglist', JSON.stringify(listItems));

    }
    const handleDelete = (id) =>{
        const listItems = items.filter((item) => item.id !== id );
        setItems(listItems)

                // saving state in local storage
                localStorage.setItem('shoppinglist', JSON.stringify(listItems));

    }
    return(
        <main>
            {items.length ? (
            <ul>
                {items.map((item)=> (
                    <li className="" key={item.id}>
                        <input type="checkbox" name="" id="" 
                            checked ={item.checked}
                            onChange={() => handleCheck(item.id)}
                        />
                        <label htmlFor=""
                         style={(item.checked) ? {textDecoration: 'line-through'} : null}
                        >
                            {item.item}
                        </label>
                            <button onClick={() => handleDelete(item.id)}> X</button>
                    </li>
                ))}
            </ul>
            ):(
                <p> <span>you havent added any item yet</span></p>

            )}
        </main>
    );
}

export default Content;