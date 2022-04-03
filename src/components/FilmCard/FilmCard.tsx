import React, {FC} from 'react';
import {IFilm} from "../../models/IFilm";

const FilmCard:FC<IFilm> = (film) => {
    return (
        <div className='card'>
            <p>{film.original_title}</p>
            <img src={'https://image.tmdb.org/t/p/w500' +  film.backdrop_path} alt=""/>
            <span>{film.title}</span>
        </div>
    );
};

export default FilmCard;
