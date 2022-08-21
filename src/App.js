import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const btnStyle = {
  border : "none",
  padding : "12px 20px",
  fontSize : "16px",
  borderRadius : "6px",
  cursor : "pointer"
}
const divStyle = {
  width: "400px",
  border : "2px solid #fff",
  padding : "10px",
  margin : "20px 0",
  borderRadius : "6px"
}

function App() {
  
  
  function Country() {
    const myCountry = [
      {
        CountryName : "Bangladesh",
        yourCountry : "Is my country??"
      },
      {
        CountryName : "United-States",
        yourCountry : "Not my country"
      },
      {
        CountryName : "France",
        yourCountry : "Not my country"
      },
      {
        CountryName : "Dubai",
        yourCountry : "Not my country"
      }
    ];
     return(
       <div>
        {
          myCountry.map((country,index) => <DisplayCountry key={index} name = {country} />)
        }
       </div>
     )
   }
   function DisplayCountry(props) {
    const {CountryName, yourCountry} = props.name;
    return(
      <div style={divStyle}>
        <h1>{CountryName}</h1>
        <h4>{yourCountry}</h4>
      </div>
    )
   }
 
  function Counting() {

      const [count, setCount] = useState(0);

      const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
      }
  
  
    return(
      <div>
        <h1>Count : {count}</h1>
        <MovieCout movies = {count + 4} />
       <button style={btnStyle} onClick={handleIncrement}>Click Me</button>
      </div>
    )
  }

  function MovieCout(props) {
    return <h1>Movie Count : {props.movies}</h1>
  }
 
  function Table() {
    const [users, setUsers] = useState([]);
      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
      }, [])
    return (
      <div>
        <ul style={{textAlign: "left", listStyleType: "none"}}>
         {
          users.map((user, index) => <li key={index} style={{margin: "20px 0"}}>{index + 1} {user.name} <br></br><small> Phone : {user.phone}</small></li>)
         }
        </ul>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Table />
        <Counting />
        <Country />   

      </header>
    </div>
  );
}

export default App;
