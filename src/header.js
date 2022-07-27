


function Header({length}) {
  
  return (

      <header className="header" >
        <h2>ToDo List</h2>
        <h6> {length} List {length <= 1 ? 'item': 'items'}</h6>

      </header>
  );
}

export default Header;
