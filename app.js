import "./App.css";
import Users from "./Users";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      {data.map(({ id, name, username, email, phone, website }) => {
        return (
          <>
            <Users
              name={name}
              username={username}
              email={email}
              phone={phone}
              website={website}
            />
          </>
        );
      })}
    </div>
  );
}
export default App;
