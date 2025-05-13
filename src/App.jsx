import ToDoList from "./ToDoList.jsx";

function App() {
  const appStyle = {
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={appStyle}>
      <ToDoList />
    </div>
  );
}

export default App;
