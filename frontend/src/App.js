import Header from "./components/layout/Header";
import SearchBar from "./components/ui/SearchBar";
import MemoList from "./components/memo/MemoList";
import AddButton from "./components/ui/AddButton";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <MemoList />
      <AddButton />
    </div>
  );
}

export default App;