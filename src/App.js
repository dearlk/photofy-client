import React from "react";
import './App.css';
import Posts from "./post_list.js";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api/?item=5")
  //     .then((res) => res.json())
  //     .then(
        
  //       (data) => setData(data[0].url)

  //       );
  // }, []);
  return (
    <div className="App">
        <Posts/>
    </div>
  );
}

export default App;
