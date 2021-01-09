
import {Movie} from './movie';
export interface TopRatedMovies {
    adult : boolean,
    results : Movie[],
    total_pages: number,
    total_results: number
}