import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../reducer/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
function Card({ id, name, species, image, gender, onClose, deleteFavorite, addFavorite, myFavorites }) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      deleteFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({ id, name, species, image, gender, onClose });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        {isFav ? null : (
          <button onClick={onClose} className={styles.button}>
            X
          </button>
        )}
      </div>
      <Link to={`/detail/${id}`} className={styles.link}>
        <div className={styles.imageContainer}>
          <img src={image} alt="Not found" />
          <h2 className={styles.name}>{name}</h2>
        </div>
        <div className={styles.propsContainer}>
          <h2>{species}</h2>
          <h2>{gender}</h2>
        </div>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    deleteFavorite: (id) => {
      dispatch(deleteFavorite(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
