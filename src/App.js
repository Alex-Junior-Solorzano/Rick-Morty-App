
import React, {useEffect, useState}from 'react';
import './App.css';
import  Navbar  from "./componentes/Navbar.jsx";
import  Characters  from "./componentes/Characters.jsx";
import  Paginacion  from "./componentes/Paginacion.jsx";

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const inicialUrl ="https://rickandmortyapi.com/api/character/";

  const fetchCharacters = (url) => {
    fetch (url)
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  };

  const onPrevius = () => {
    fetchCharacters(info.prev)
  }

  const onNext = () => {
    fetchCharacters(info.next)
  }

  useEffect(() => {
    fetchCharacters(inicialUrl)
  }, [])

  return (
    <>
      <Navbar brand="Rick & Morty App"/>
      <div className = "container mt-5" >
        <Paginacion prev={info.prev} next = {info.next} onPrevius={onPrevius} onNext={onNext}/>
        <Characters characters = {characters} />
        <Paginacion prev={info.prev} next = {info.next} onPrevius={onPrevius} onNext={onNext}/>
      </div>
    </>
  );
};

export default App;
