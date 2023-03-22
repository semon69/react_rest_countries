import logo from './logo.svg';
import './App.css';
import Countries from './Component/Countries/Countries';
function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// // function RestCountries(){
// //   const [countries, setCountries] = useState([]);
// //   useEffect(()=> {
// //     fetch('https://restcountries.com/v3.1/all')
// //     .then(res => res.json())
// //     .then(data => setCountries(data))
// //   },[])
// //   return(
// //     <div>
// //       <h1>Let's have a world tour</h1>
// //       <h3>Countries: {countries.length}</h3>
// //       {
// //         countries.map(country => <Country name={country.name.common} startWeek={country.startOfWeek}></Country>)
// //       }
// //     </div>
// //   )
// // }

// function Country(props){
//   return (
//     <div>
//       <h1>Name: {props.name}</h1>
//       <h2>First Day Of Week: {props.startWeek}</h2>
//     </div>
//   )
// }
export default App;
