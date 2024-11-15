import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useDispatch } from "react-redux";
import { addSelectedMovie } from "../utils/movieSlice";

const MainContainer = ({nowPlayingMovies}) =>{
    const dispatch = useDispatch();

    if (!nowPlayingMovies) return;
    const mainMovie = nowPlayingMovies[2];
    const {original_title, overview, id} = mainMovie;
    dispatch(addSelectedMovie(mainMovie));
    
    return (
        <div className="pt-[40%] md:pt-0">
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;