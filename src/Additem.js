import React from 'react'
import {useRef} from 'react'

function AddItem({newItem, setNewItem, handleSubmit}) {
    const inputRef = useRef();
  return (
    <form className='addItem' onSubmit={handleSubmit}>
        <label htmlFor='addItem' className='new'>Add Item</label>
        <input className='form-control'
            autoFocus
            ref={inputRef}
            type="text" 
            id="addItem" 
            placeholder='Add Item'
            required
            value={newItem}
            onChange= {(e) => setNewItem(e.target.value)}
        />
        <button className='btn'
            type='submit'
            onClick ={() => inputRef.current.focus()}
        >Add</button>
    </form>
  )
}

export default AddItem