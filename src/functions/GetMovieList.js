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

export async function apiFetchById(id,setMoviesFromApi) {
  const api = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
  );
  const apiRes = await api.text();
  const jsonData = JSON.parse(apiRes);
  setMoviesFromApi(jsonData);
  // console.log(jsonData,"Second api");
}
