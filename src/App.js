import './App.css';
import { EstimateForm } from "./components/EstimateForm";
import { OutputTable } from "./components/OutputTable";
import {Header} from './components/Header';
import {useState} from "react";


function App() {
    const [formData, setFormData] = useState(null);
    const [showTable, setShowTable] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);

    return (
      <div className="App">
        <Header />
        <EstimateForm setFormData={setFormData} setShowTable={setShowTable} setFileUrl={setFileUrl}/>
        {showTable && <OutputTable formData={formData} fileUrl={fileUrl}/>}
      </div>
  );
}

export default App;
