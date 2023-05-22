import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import UserUi from "./components/UserUI/UserUi";
import UserContextProvider from "./components/Providers/UserContextProvider";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <UserContextProvider>
          <UserUi />
        </UserContextProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
