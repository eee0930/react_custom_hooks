import { useEffect } from "react";
import './App.css';

function App() {
  const sayHello = () => console.log("Hello");
  useEffect(() => {
    sayHello();
  }, []);
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
