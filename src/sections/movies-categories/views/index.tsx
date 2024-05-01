import MoviesCategory from "../movies-category";
import MoviesSearchInput from "../movies-search-input";
import MoviesSkeletonLoading from "../movies-skeleton-loading";

const MoviesCategoriesSection = () => {
    return (
        <div className="t-py-5">
            <MoviesSearchInput />
            {/* <MoviesCategory link="/" list={[]} title="اکران ۱۴۰۳" /> */}
        </div>
    );
};

export default MoviesCategoriesSection;
