export interface IFilm {
    poster_path: string
    adult: boolean
    overview: string
    release_date: string
    genre_ids: number[]
    id: number
    original_title: string
    original_language: string
    title: string
    backdrop_path: string
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
}

export interface IFilmResult {
    page: number
    results: IFilm[]
    total_pages: number
    total_results: number
    isLoading: boolean
    isLoadingVideo: boolean
    error: string
    video_id: number
    video: IVideoResults[]
}

export interface IVideoResults {
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: boolean,
    published_at: string,
    id: string
}


export interface IVideo {
    id: number
    results: IVideoResults[]
    isLoading: boolean
    error: string
}

export interface IMovieDetailGenres {
    id: number,
    name: string
}

export type DetailMovie = {
    adult: boolean | null,
    backdrop_path: string,
    belongs_to_collection: number,
    budget: number,
    genres: [],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: null | string,
    production_companies: Production_companiesType[],
    production_countries: Production_countriesType[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: Production_countriesType[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface IMovieDetail {
    detail: DetailMovie,
    isLoading: boolean
}

type Production_companiesType = {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
}

type Production_countriesType = {
    iso_3166_1: string,
    name: string
}

export type CastType = {
    adult: boolean,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    cast_id: number,
    character: string,
    credit_id: string,
    order: number
}

export interface ICredits {
    isLoading: boolean,
    id: number,
    cast: CastType[]
}
