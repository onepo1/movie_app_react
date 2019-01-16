import React, {Component} from 'react';
import propsTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

// class Movie extends Component{
//     static propsTypes = {
//         title: propsTypes.string.isRequired,
//         poster: propsTypes.string.isRequired
//     }
// // 1.
//     componentWillMount(){
//         console.log('will mount');
//     }
// // 4.
//     componentDidMount(){
//         console.log('did mount');
//     } 

// // 2.
//     render(){
//         console.log('did render');
//         // 부모가 자식에게 속성을 알려주는 것 title을 props로 불러오는 것.왜냐하면 movie 컴포넌트는 title이라는 요소가 있으니까
//         // console.log(this.props);
//         return (//헬로 이건 영화임
//             <div>
//                 <MoviePoster poster ={this.props.poster}/>
//                <h1>{this.props.title}</h1>
//             </div>
            
//         )
//     }
// }


// class MoviePoster extends Component{
//     static propsTypes = {
//         title: propsTypes.string.isRequired,//isRequired필수 요건이라고 하고  데이터가 없을 경우 메시지를 받을 수 있다.
//         poster: propsTypes.string.isRequired
//     }
//     // 3.
//     render(){
//         console.log(this.props);
//         return(
//             <img src ={this.props.poster} alt="Poster"/>
//         )
//     }
// }

// 4.stateless function -->dump component
function Movie({title, poster, genres, synopsis}){
    return(
        // props 추가2
        // 베이직 html 작업 className추가 JSX
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster poster ={poster} alt={title}/>
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                {/* 쟝르를 맵핑할때 movie genre라는 새로운 컴포넌트 만듬 */}
                     {genres.map((genre, index) => <MovieGenres genre={genre} key={index} />)}
                </div>
                <p className="Movie_Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>
        </div>
    )
}

function MoviePoster({poster,alt}){
    return(
        <img src ={poster} alt={alt} title={alt} className="Movie_Poster"/>
    )
}
function MovieGenres({genre}){
    return(
        <span className="Movie_Genre">{genre} </span>
    )
}
Movie.propsTypes = {
    title: propsTypes.string.isRequired,
    poster:propsTypes.string.isRequired,
    genres:propsTypes.array.isRequired,
    synopsis:propsTypes.string.isRequired
}
MoviePoster.propsTypes = {
    poster: propsTypes.string.isRequired,
    alt: propsTypes.string.isRequired
}
MovieGenres.propsTypes = {
    genre: propsTypes.string.isRequired
}

export default Movie