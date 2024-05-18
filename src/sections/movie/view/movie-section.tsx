import MovieHeaderSection from "./movie-header-section";
import MovieAboutSection from "./movie-about-section";
import MovieSansSection from "./movie-sans-section";

const MovieSection = () => {
    return (
        <>
            <div className="t-bg-muted">
                <MovieHeaderSection />
                <MovieAboutSection />
            </div>
            <MovieSansSection />
        </>
    );
};

export default MovieSection;
