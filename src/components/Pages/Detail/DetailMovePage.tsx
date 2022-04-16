import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import Loader from "../../Loader";
import {useParams} from "react-router-dom";
import {movieCastAction, movieDetail} from "../../../store/ActionCreators/DetailActions";

const DetailMovePage: FC = () => {
    const params = useParams()
    const dispatch = useAppDispatch()
    const {detail, isLoading} = useAppSelector(state => state.movieReducer)
    const {cast} = useAppSelector(state => state.movieCast)
    useEffect(() => {
        if (!detail.id && params.id) {
            dispatch(movieDetail(+params.id))
            dispatch(movieCastAction(+params.id))
        }
    }, [])
    if (isLoading) return <Loader/>
    return (
        <div className='detail-film'>
            <div className='detail-film__image'>
                <img src={'https://image.tmdb.org/t/p/w500/' + detail.poster_path} alt={detail.title}/>
            </div>
            <div className='detail-film-content'>
                <p className='detail-film__title'>{detail.title}</p>
                <span>О фильме</span>
                <div className='about-film'>
                    <div className='about-film-pair'>
                        <span>Год производства</span>
                        <span>{detail.release_date}</span>
                    </div>
                    <div className="about-film-pair">
                        <span>Страна</span>

                        <span>{detail.production_countries.map(country => country.name + ' ')}</span>
                    </div>
                    <div>{cast && cast.map(person => {
                        return <span key={person.id}>{person.name + ' '}</span>
                    })}</div>
                </div>
            </div>
        </div>
    );
};

export default DetailMovePage;
