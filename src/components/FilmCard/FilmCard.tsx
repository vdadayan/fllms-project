import React, {FC} from 'react';
import {IFilm} from "../../models/IFilm";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";
import {movieCastAction, movieDetail} from "../../store/ActionCreators/DetailActions";

type FilmCardType = {
    film: IFilm,
    showModalHandler: any
}

const FilmCard: FC<FilmCardType> = ({film, showModalHandler}) => {
    const dispatch = useAppDispatch()
    const movieHandler = () => {
        dispatch(movieDetail(film.id))
        dispatch(movieCastAction(film.id))
    }
    return (
        <Link to={`/movieDetail/${film.id}`} onClick={movieHandler}>
            <div className='card'>
                <p>{film.original_title}</p>
                <img src={'https://image.tmdb.org/t/p/w500' + film.backdrop_path} alt=""/>
                <img onClick={(e) => showModalHandler(film.id, e)} className='card_trailer'
                     src="https://cdn-icons-png.flaticon.com/512/83/83519.png" alt=""/>
            </div>
        </Link>

    );
};

export default FilmCard;
