
import {Movie} from './movie';
export interface UpCOmmingMovies {
    adult : boolean,
    results : Movie[],
    total_pages: number,
    total_results: number
}