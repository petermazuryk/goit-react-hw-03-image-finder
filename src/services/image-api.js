export const fetchImg = (query = '', pageNumder = 1) => {
  return fetch(
    `https://pixabay.com/api/?key=13042188-dc29c2397758c430becc93316&q=${query}&page=${pageNumder}`,
  )
    .then(res => res.json())
    .then(data => data.hits);
};
