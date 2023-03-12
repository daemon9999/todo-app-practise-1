import Divider from "components/Divider";
import Header from "components/Header";
import Input from "components/Input";
import NotesList from "components/NotesList";

function App() {
  return (
    <div className="h-full bg-gray-900 overflow-auto">
      <Header/>
      <div className="px-10 py-6  h-full bg-gray-900">
      <Input/>
      <Divider/>
      <NotesList/>
      </div>
    </div>
  );
}

export default App;
