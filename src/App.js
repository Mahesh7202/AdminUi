import UserList from './components/UserList/UserList';
import UserContextProvider from './context/UserContext';

function App() {
  return (
    <div className="App">
        <UserContextProvider>
            <UserList />
        </UserContextProvider>
    </div>
  );
}

export default App;
