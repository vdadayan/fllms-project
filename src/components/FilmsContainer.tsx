import React, {FC} from 'react';
import FilmCard from "./FilmCard/FilmCard";
import {filmsApi} from "../services/FilmsService";

const FilmsContainer:FC = ({children}) => {
    const {data} = filmsApi.useGetTopRatedQuery('')

    return (
        <div className='films-container'>
            {data && data.results.map(film =>
            <FilmCard {...film}/>)}
        </div>
    );
};

export default FilmsContainer;
