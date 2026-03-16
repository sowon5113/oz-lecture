// 영화 생성자
function Movie(title, director, year, genre) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.genre = genre;
}

// 영화 객체 생성 하드코딩
const movie1 = new Movie("The Shawshank Redemption", "Frank Darabont", 1994, "Drama");
const movie2 = new Movie("The Godfather", "Francis Ford Coppola", 1972, "Crime");
const movie3 = new Movie("The Dark Knight", "Christopher Nolan", 2008, "Action");
const movie4 = new Movie("Pulp Fiction", "Quentin Tarantino", 1994, "Crime");

// 영화 객체 출력
console.log(`영화 제목: ${movie1.title}, 감독: ${movie1.director}, 개봉 연도: ${movie1.year}, 장르: ${movie1.genre}`);
console.log(`영화 제목: ${movie2.title}, 감독: ${movie2.director}, 개봉 연도: ${movie2.year}, 장르: ${movie2.genre}`);
console.log(`영화 제목: ${movie3.title}, 감독: ${movie3.director}, 개봉 연도: ${movie3.year}, 장르: ${movie3.genre}`);
console.log(`영화 제목: ${movie4.title}, 감독: ${movie4.director}, 개봉 연도: ${movie4.year}, 장르: ${movie4.genre}`);

// // 영화 객체 하드코딩 배열 (다른 방법)
// const movies = [
//   { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994, genre: "Drama" },
//   { title: "The Godfather", director: "Francis Ford Coppola", year: 1972, genre: "Crime" },
//   { title: "The Dark Knight", director: "Christopher Nolan", year: 2008, genre: "Action" },
//   { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994, genre: "Crime" }
// ];

// // 영화 제목과 감독 출력 (다른 방법)
// movies.forEach(movie => {
//   console.log(`영화 제목: ${movie.title}, 감독: ${movie.director}, 개봉 연도: ${movie.year}, 장르: ${movie.genre}`);
// });

// 총 영화 수
const totalMovies = 4; // 하드코딩된 영화 수
console.log(`총 영화 수: ${totalMovies}`);

// 영화 객체 배열 선언
let movies = [];
const DEFAULT_VALUE = "Unknown"; // 누락 디폴드 기본 설정

// 영화 객체 배열에 영화 추가
movies.push(movie1, movie2, movie3, movie4);

// 영화 목록 출력 함수 (for 함수 활용)
function printMovies(movieArray) {
    console.log("Movie Collection");
    for (let i = 0; i < movieArray.length; i++) {   // for 반복문 함수
        let movie = movieArray[i];
    if (!Movie.titele) Movie.title = DEFAULT_VALUE; // 빈 속성 설정 및 누락 디폴드 설정
    if (!Movie.director) Movie.director = DEFAULT_VALUE;
    if (!Movie.year) Movie.year = 0;
    if (!Movie.genre) Movie.genre = DEFAULT_VALUE;
    console.log(    // 출력 형식
            (i + 1) + ". " +
            "Title: " + movie.title + ", " +
            "Director: " + movie.director + ", " +
            "Year: " + movie.year + ", " +
            "Genre: " + movie.genre
        );
    }
    var totalCount = movieArray.length; // var 사용 및 총 영화 수 출력
    console.log("Total Movies: " + totalCount);
}

// 영화 검색
function searchGenre(movieArray,targetGenre) {
    console.log(`\n${targetGenre} Movies:`)
    // filter로 영화 검색
    const filteredMovies = movieArray.filter(movie => movie.genre === targetGenre);

    console.log(`\n${targetGenre} Movies:`);

    // 결과가 있는지 확인
    if (filteredMovies.length === 0) {
        console.log(`No movies found for genre: ${targetGenre}.`);
        return;
    }

    // 필터링된 결과 출력 (forEach 활용)
    filteredMovies.forEach((movie, index) => {
        console.log(
            `${index + 1}. Title: ${movie.title}, ` +
            `Director: ${movie.director}, ` +
            `Year: ${movie.year}, ` +
            `Genre: ${movie.genre}`
        );
    });
}

// 통계 계산: 평균 출판년도 (익명 함수 활용)
const calculateAverageYear = function(movieArray) {
    if (movieArray.length === 0) return 0;
    
    let sum = 0;
    for (const movie of movieArray) {
        sum += movie.year;
    }
    return (sum / movieArray.length).toFixed(1); // 소수점 첫째자리까지
};

// 통계 계산 (최신 영화 찾기, 화살표 함수)
const findNewestMovie = (movieArray) => {
    if (movieArray.length === 0) return null;
    
    let newest = movieArray[0];
    for (let i = 1; i < movieArray.length; i++) {
        if (movieArray[i].year > newest.year) {
            newest = movieArray[i];
        }
    }
    return newest;
};

// 영화 목록 전체 출력 실행 (for 함수 목록)
printMovies(movies);

// 장르 검색 실행
searchGenre(movies, "Action");

// 통계 출력
console.log("\nStatistics:");
console.log(`Average Year: ${calculateAverageYear(movies)}`);
const newest = findNewestMovie(movies);
if (newest) {
    console.log(`Newest Movie: ${newest.title} (${newest.year})`);
}