import { useEffect, useState } from "react"
import DisplayCards from "./DisplayCards"

function App() {
  let [data, setData] = useState({villagers: []})
  let [search, setSearch] = useState("")
  let [faves, setFaves] = useState([])


  // fetch the villager data
  useEffect(() => {
    fetch('http://acnhapi.com/v1/villagers/')
      .then(response => response.json())
      .then((rdata) => {
        rdata = Object.values(rdata)
        setData({villagers: rdata})
        console.log('Villager Data:', rdata)
      })
  }, [])

  // call function when user enters search
 const handleChange = (e) => {
   setSearch(e.currentTarget.value)
  }

  // compare search to list of villages and return matches
  const getFilteredVillagers = (e) => {
    return data.villagers.filter(v => {
      let lowerCaseName = v.name['name-USen'].toLowerCase()
      return lowerCaseName.includes(search.toLowerCase())
    })
  }

  const handleClick = (villager) => {
    console.log("HANDLE CLICK")
    if(faves.indexOf(villager)===-1){
    setFaves([...faves, villager])
  }
  }

  return (
    <div className="App">
      <div className="searchBox">
        <label htmlFor="villager-search">Search for a villager:</label>
        <input 
          id="villager-search" 
          type="text" 
          value={search} 
          onChange={handleChange}
        />
      </div>
      <div>
      <DisplayCards 
        villagers={getFilteredVillagers()}
        handleClick={handleClick}
      />
      </div>
      <div id="faves">
        <h1>Favorite Villagers:</h1>
        <DisplayCards 
          handleClick={handleClick} 
          villagers={faves}
        />
      </div>
    </div>
  );
}

export default App;

