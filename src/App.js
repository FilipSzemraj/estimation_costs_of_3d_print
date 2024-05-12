import './App.css';
import { EstimateForm } from "./components/EstimateForm";
import { OutputTable } from "./components/OutputTable";
import {Header} from './components/Header';


function App() {
  return (
      <div className="App">
        <Header />
        <EstimateForm />
        <OutputTable />
      </div>
  );
}

export default App;
