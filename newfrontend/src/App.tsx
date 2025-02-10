import axios from "axios";
import { useEffect, useState } from "react";

interface listitem {
  _id: string;
  name: string;
}

const App_URL = "http://localhost:2500/myitems";

const App = () => {
  const [name, setName] = useState("");
  const [itemlist, setItemList] = useState<listitem[]>([]);

  useEffect(() => {
    axios.get(App_URL).then((res) => setItemList(res.data));
  }, []);

  const handleClick = () => {
    setItemList([...itemlist, { _id: Math.random().toString(), name: name }]);
    setName("");

    axios.post(App_URL, { name });
  };

  return (
    <>
      <h3>Enter An Item Name</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Add</button>
      <ul>
        {itemlist.map((l) => (
          <li key={l._id}>{l.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
