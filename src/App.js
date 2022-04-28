import PersonCard from "./components/PersonCard";
import './App.css';

const App = ()  => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="contendor-cards">
        <PersonCard firstName = "Jane" id = "id1" lastName = "Doe" age = "45" hairColor = "Black"/>
        <PersonCard firstName = "John" id = "id2" lastName = "Smith" age = "88" hairColor = "Brown"/>
        <PersonCard firstName = "Millard" id = "id3" lastName = "Fillmore" age = "50" hairColor = "Brown"/>
        <PersonCard firstName = "Maria"  id = "id4"lastName = "Smith" age = "62" hairColor = "Brown"/>
      </div>
    </div>
  );
}

export default App;
