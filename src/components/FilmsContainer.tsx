import React, {FC, useEffect, useState} from 'react';
import FilmCard from "./FilmCard/FilmCard";
import Loader from "./Loader";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchFilms, getVideo} from "../store/reducers/ActionCreator";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ModalContainer from "./ModalContainer";


const FilmsContainer: FC = ({children}) => {
    const {results, isLoading, page, video: arrVideo, isLoadingVideo} = useAppSelector(state => state.filmReducer)
    const dispatch = useAppDispatch()
    const [show, setShow] = useState(false)
    const closeModalHandler = () => setShow(false)
    const showModalHandler = async (id: number, e: any) => {
        e.preventDefault()
        await setShow(true)
        await dispatch(getVideo(id))
    }
    const handleChange = (event: any, value: any) => dispatch(fetchFilms(value))

    useEffect(() => {
        dispatch(fetchFilms(''))
    }, [])
    if (isLoading) return <Loader/>
    return (
        <>
            <div className='films-container'>
                {results && results.map(film =>
                    <FilmCard showModalHandler={showModalHandler} key={film.id} film={film}/>)}
            </div>
            <Stack spacing={2}>
                <Pagination defaultPage={1}
                            page={page}
                            onChange={handleChange} size="large" count={500} color="primary"/>
            </Stack>
            <ModalContainer closeModal={closeModalHandler} modalIsOpen={show} title={'Трейлер'}>
                {isLoadingVideo ? <Loader/> :

                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${arrVideo[0]?.key}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>}
            </ModalContainer>
        </>
        
    );
};

export default FilmsContainer;
