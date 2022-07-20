import ItemList from "./itemList"


const Content = ({items, handleCheck, handleDelete }) => {

    return (

        
        <main>
            {items.length ? (
              <ItemList 
              items = {items}
              handleCheck = {handleCheck}
              handleDelete = {handleDelete}
              />
            ) : (
                <p> <span> Your List is Empty</span></p>
            )}
        </main>
    );
  }
  
  export default Content;
  