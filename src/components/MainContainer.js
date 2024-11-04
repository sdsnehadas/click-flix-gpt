import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = ({nowPlayingMovies}) =>{

    console.log("movies in main", nowPlayingMovies, nowPlayingMovies[0])
    if (!nowPlayingMovies) return;
    const mainMovie = nowPlayingMovies[0];
    const {original_title, overview, id} = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;