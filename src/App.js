import UserContext from "./components/context/UserContext";
import Login from "./components/Login";

//let us change the default value of login context


function App() {
  return (
<UserContext.Provider value={{login:"Welcome from main page"}}>
<div className=" text-white">
  <h1 className="text-center my-4">Context Store the global store config</h1>
<Login/>
</div></UserContext.Provider>

  );
}

export default App;
