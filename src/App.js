import React,{useState,useEffect} from "react";
import Pagination from "./Pagination";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/books"
      );
      const data = await response.json();
    //  console.log("hi",data)
      setBooks(data);
    }
  }, []);

  books.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      <Pagination items={books} />
    </div>
  );
};

export default App;
