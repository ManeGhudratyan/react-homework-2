import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [data, setData] = useState([]);
  useEffect(()=>{
    fetch(`https://api.github.com/users`)
    .then(response => response.json())
    .then(data => setData(data))
  })
  return (
    <div className="App">
      {data.map(item => <div key={item.id}>
        <p>{item.id}</p>
        <p>{item.type}</p>
        <p className='myLogin'>{item.login}</p>
        <img src={item.avatar_url} height={300}/>
      </div>)}
    </div>
  );
}

export default App;
