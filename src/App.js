import Header from "./Header";
import Input from "./Input";
import Result from "./Result";
import Details from "./Details";
import { useState } from "react";

function App() {
  const [data, setData] = useState('')

  const onCalNewData = (newData) =>{
    setData(newData)
  }

  const clearData = () =>{
    setData('')
  }
  return (
    <div>
      <Header />
      <Details />
      {data !== '' &&<Result  data={data} onClose={clearData}/>}
      <Input onCalData={onCalNewData}/>
    </div>
  );
}

export default App;
