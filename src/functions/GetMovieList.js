export async function apiFetch(setMoviesFromApi, category) {
  const api = await fetch(
    `https://api.themoviedb.org/3/movie/${
      category ? category : "popular"
    }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
  );
  const apiRes = await api.text();
  const jsonData = JSON.parse(apiRes);
  setMoviesFromApi(jsonData.results);
  // console.log(jsonData.results);
}

// https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US

export async function apiFetchById(id, setMoviesFromApi) {
  const api = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
  );
  const apiRes = await api.text();
  const jsonData = JSON.parse(apiRes);
  setMoviesFromApi(jsonData);
  // console.log(jsonData,"Second api");
}

export function findMovie(e,data, setState, context) {
  const arr = [
    ...context.popularMoviesFromApi,
    ...context.upcomingMoviesFromApi,
    ...context.topRatedMoviesFromApi,
  ];

  console.log(arr);
  console.log(e.target.value.toUpperCase());

  const ans = arr.filter((ele) => {
    if((ele.original_title.toUpperCase()).includes(e.target.value.toUpperCase())){
      return ele
    }else{
      return null
    }
  });
  setState(ans);
  // console.log(data);
  // console.log(ans);
  
}
// if((ele.original_title.toUpperCase()).includes(e.target.value.toUpperCase())){
  // e, context.state, context.setState, context