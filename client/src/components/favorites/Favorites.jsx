import { connect } from "react-redux";
import Card from "../card/Card";
import { Div } from "../assets/styledComponents";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../reducer/actions";
import {useState} from "react"
function Favorites({ myFavorites }) {
  // const [aux, setAux] = useState(false)
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "order":
        // setAux(!aux)
        return dispatch(orderCards(value));
      case "filter":
        return dispatch(filterCards(value));

      default:
        break;
    }
  };
  return (
    <div>
      <div style={{marginBottom: "20px"}}>
        <select name="order" onChange={handleClick}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select
          name="filter"
          onChange={(e) => {
            dispatch(filterCards(e.target.value));
          }}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknow">unknow</option>
        </select>
      </div>
      <Div>
        {myFavorites?.map(({ id, name, species, image, gender }) => (
          <Card
            id={id}
            key={id}
            name={name}
            species={species}
            image={image}
            gender={gender}
          />
        ))}
      </Div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
