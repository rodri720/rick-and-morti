import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const userName = "fmontoya@soyhenry.com";
  const password = "feli123";
  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // data --> {}
        (
          data.name
            ? characters.filter((char) => char.id === data.id).length === 0
            : ""
        )
          ? setCharacters([...characters, data])
          : alert("Personaje ya existe");
      })
      .catch((error) => console.log(error));
  };

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id));
    setCharacters(filtered);
  };

  const login = (userData) => {
    // {userName : "fmontoya@soyhenry.com", password: "feli123"}
    /* if(userData.userName === userName &&
      userData.password === password) {
        setAccess(true);
        navigate("/home")
      }else{
        alert("Datos incorrectos, por favor verifique")
      } */
      setAccess(true);
      navigate("/home");
  };

  const logOut = () => {
    access && setAccess(false) 
    navigate("/")
  }

  useEffect(()=>{
    !access && navigate("/")
  },[access, navigate])

  return (
    <div
      className="App"
      style={{
        padding: "25px",
      }}
    >
      {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
