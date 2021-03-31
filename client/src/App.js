import "./App.css";
import AddContact from "./components/addContact";
import ListContacts from "./components/listContacts";
import SearchContacts from "./components/searchContacts";

function App() {
  return (
    <>
      <AddContact />
      <ListContacts />
      <SearchContacts />
    </>
  );
}

export default App;
