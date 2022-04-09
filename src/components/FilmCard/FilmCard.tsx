import React, {FC} from 'react';
import {IFilm} from "../../models/IFilm";

type FilmCardType = {
    film: IFilm,
    showModalHandler: any
}

const FilmCard: FC<FilmCardType> = ({film, showModalHandler}) => {
    return (
        <>
            <div className='card' >
                <p>{film.original_title}</p>
                <img src={'https://image.tmdb.org/t/p/w500' + film.backdrop_path} alt=""/>
                <img onClick={() => showModalHandler(film.id)} className='card_trailer' src="https://cdn-icons-png.flaticon.com/512/83/83519.png" alt=""/>
            </div>
        </>

    );
};

export default FilmCard;
