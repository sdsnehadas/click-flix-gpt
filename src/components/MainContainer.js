import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = ({nowPlayingMovies}) =>{

    if (!nowPlayingMovies) return;
    const mainMovie = nowPlayingMovies[2];
    const {original_title, overview, id} = mainMovie;
    return (
        <div className="pt-[40%] md:pt-0">
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;