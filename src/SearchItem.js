import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


function SearchItem({search, setSearch}) {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
         <label htmlFor='search'><i class="fa-regular fa-magnifying-glass"></i>Search</label>
         <input
            type="text"
            id='search'
            role='searchbox'
            placeholder='Search Items'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />
    </form>
  )
}

export default SearchItem