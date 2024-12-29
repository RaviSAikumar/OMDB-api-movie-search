import { useEffect, useState } from "react";
// http://www.omdbapi.com/?i=tt3896198&apikey=cb91092d
function SearchBar({ setSearchQuery }) {
  //   const [inputSearch, setInputSearch] = useState("");

  function HandleValue(event) {
    setSearchQuery(event.target.value);
  }

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <div>
      <input style={{ display: "inline" }} type="text" onChange={HandleValue} />
    </div>
  );
}

export default SearchBar;
