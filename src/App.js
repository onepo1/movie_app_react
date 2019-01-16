import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

//1.단계
// const movieTitles = [
//   "Matrix",
//   "Full Metal Jacket",
//   "Oldboy",
//   "Star Wars"
// ]


// const movieImages =[
//   "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg",
//   "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/05/full_metal_jacket_1987_3-h_2017.jpg",
//   "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg",
//   "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
// ]

// 2.단계 - 엄청난 양의 정보를 불러오고싶을땐 array-->그 다음엔 map
// const movies =[
//   {
//     // id: 1,
//     title: "Matrix",
//     poster: "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg"
//   },
//   {
//     // id: 2,
//     title: "Full Metal Jacket",
//     poster: "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/05/full_metal_jacket_1987_3-h_2017.jpg"
//   },
//   {
//     // id: 3,
//     title: "Oldboy",
//     poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg"
//   },
//   {
//     // id: 4,
//     title: "Star Wars",
//     poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
//   }
// ]

// // 3단계 state 사용
// class App extends Component {
//   // 싸이클
//   // Render: componentWillMount() --> render() --> componentDidMount()
//   // Update: componentWillReceiveProps() --> shouldComponentUpdate() --> componentWillUpdate() --> render() --> componentDidUpdate()
//   // 이 컴포넌트가 나에게 보여주는 것이 무엇인가? 이게 render 기능

//   // State
//   state = {
//     greeting:"Hi",

    
//     // movies:[
//     //   {
//     //     // id: 1,
//     //     title: "Matrix",
//     //     poster: "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg"
//     //   },
//     //   {
//     //     // id: 2,
//     //     title: "Full Metal Jacket",
//     //     poster: "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/05/full_metal_jacket_1987_3-h_2017.jpg"
//     //   },
//     //   {
//     //     // id: 3,
//     //     title: "Oldboy",
//     //     poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg"
//     //   },
//     //   {
//     //     // id: 4,
//     //     title: "Star Wars",
//     //     poster: "https://starwarsblog.starwars.com/wp-content/uploads/2018/05/star-wars-movie-posters.jpg"
//     //   },
//     //   {     
//     //     title: 'transportting',
//     //     poster:"http://pbs.twimg.com/media/CQExsCKWcAA7GhZ.png"
//     //   }
//     // ]
//   }

//   // 컴포넌트가 mount되면 5초 기다리고 ,greeting을 업데이트
//   componentDidMount(){
//     // 1. 5초뒤에 글이 title 추가
//     // setTimeout(()=>{
//     //   this.setState({
//     //     greeting :"Hi again!" 
//     //   })
//     // }, 5000);

//     // 2. 3초뒤에 리스트 하나더 추가
//     // setTimeout(()=>{
//     //   // console.log('hello');
//     //   this.setState({
//     //     movies:[ 
//     //       ...this.state.movies,
//     //       {     
//     //         title: 'transportting',
//     //         poster:"http://pbs.twimg.com/media/CQExsCKWcAA7GhZ.png"
//     //       }
//     //     ]
//     //   })
//     // },3000);

//     // 3.
//     setTimeout(()=>{
//       this.setState({

//         movies:[
//           {
//             // id: 1,
//             title: "Matrix",
//             poster: "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg"
//           },
//           {
//             // id: 2,
//             title: "Full Metal Jacket",
//             poster: "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/05/full_metal_jacket_1987_3-h_2017.jpg"
//           },
//           {
//             // id: 3,
//             title: "Oldboy",
//             poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg"
//           },
//           {
//             // id: 4,
//             title: "Star Wars",
//             poster: "https://starwarsblog.starwars.com/wp-content/uploads/2018/05/star-wars-movie-posters.jpg"
//           },
//           {     
//             title: 'transportting',
//             poster:"http://pbs.twimg.com/media/CQExsCKWcAA7GhZ.png"
//           }
//         ]
//       })
//     },3000);
//   }

//   _renderMovies = () =>{
//     const movies = this.state.movies.map((movie, index) => {
//       return <Movie title={movie.title} poster={movie.poster} key={index} />
//     })
//     return movies;
//   }
//   render() {//모든 컴포넌트는 render() 가지고 있다->뭔가를 보여주는, 출력하는
//     return (
//       <div className="App">
//         {this.state.greeting}
//         {/*       1단계 결과
//         <Movie title={movieTitles[0]} poster={movieImages[0]}/>
//         <Movie title={movieTitles[1]} poster={movieImages[1]}/>
//         <Movie title={movieTitles[2]} poster={movieImages[2]}/>
//         <Movie title={movieTitles[3]} poster={movieImages[3]}/> */}

//         {/* 2단계결과
//         {movies.map((movie, index) => {
//           return <Movie title={movie.title} poster={movie.poster} key={index} />
//         })} */}
//         {/* 
//         위의 결과는
//         {[
//           <Movie title={movies[0].title} poster={movies[0].poster} />
//           <Movie title={movies[1].title} poster={movies[1].poster} />
//           <Movie title={movies[2].title} poster={movies[2].poster} />
//           <Movie title={movies[3].title} poster={movies[3].poster} />
//         ]}
//         이다
        
//         */}
       
//         {/* {this.state.movies.map((movie, index) => {
//           return <Movie title={movie.title} poster={movie.poster} key={index} />
//         })} */}


//         {/* 3단계 */}
//         {this.state.movies ? this._renderMovies() : 'Loading'}
//       </div>
//     );
//   }
// }

// 4.AJAX
// then(function)은 1개의 attribute만 준다.-fetch의 결과물. 오브젝트
class App extends Component {
  state = {}

// 2.get movies라는 function 사용
  componentDidMount(){
    this._getMovies();
  }
// 7.const movies는 맵핑을 한다. 영화타이틀, 포스터(large_cover_image순으로)
  _renderMovies = () => {
    const movies = this.state.movies.map((movie)=>{
      // index를 사용하면 느리므로 movie에 있는 id를 넣는것이 맞다.
      // const movies = this.state.movies.map((movie, index)=>{
      // console.log(movie);
      // 만든 object
      // return<Movie title={movie.title} poster={movie.poster} key={index} />

      // api에서 가져온 json의 key

      // props 추가1
      return<Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        synopsis ={movie.synopsis}
      />
    })
    return movies
  }

// 3. get movies asymchronous function이다.
  _getMovies = async () => {
    // return value
    // call api 작업완료하고 return하기를 await했다.
    //  그래서 json.data.movies의 value는 , const movies의 결과값이다.
    // async안쓰면 await은 있어도 작동을 안한다.
    const movies = await this._callApi();
//  5. 그리고 나의 component의 state를 movies로 set한거다.
    this.setState({
      // movies:movies의 모던 자바스크립트
      movies
    })
  }

//1. fetch를 call api로 변경 
  _callApi = () => {
        // console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating'));
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
        .then(response => response.json())
        // .then(json=>console.log(json))
        // =>함수는 reture이 포함되어 있다.
// 4.call api는 fetch promise를 return 할 것인데 이는 모든 데이터의 JSON이다.
//  그래서 json.data.movies의 value는 , const movies의 결과값이다.
        .then(json=>json.data.movies)
        .catch(err =>console.log(err))
    
        // .catch(function(){
        //   console.log(err)
        // });
        
  }
  render(){
//     return(
//       <div className="APP">
// {/* 6. state안에 movies가 있으면 render movies라는 function을 불러올거야 */}
//         {this.state.movies ? this._renderMovies() : 'Loading'}
//       </div>
//     );

      const {movies} = this.state;
      return(
          <div className={movies ? "App" : "App--loading"}>
            {this.state.movies ? this._renderMovies() : 'Loading'}
          </div>
      );
  }
}
export default App;
