


function Header({length}) {
  
  return (

      <header >
        <h2>Groceries List</h2>
        <h6> {length} List {length <= 1 ? 'item': 'items'}</h6>

      </header>
  );
}

export default Header;
