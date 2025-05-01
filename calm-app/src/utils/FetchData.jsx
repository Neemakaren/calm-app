import axios from "axios";

// export const exerciseOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//     'X-RapidAPI-Key': 'c0bac2aea6msh108d8db2cdd60ecp1afc8cjsnf227e55c4123',
//   },
// };

// export const exerciseOptions = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//         'X-RapidAPI-Key': 'c0bac2aea6msh108d8db2cdd60ecp1afc8cjsnf227e55c4123',
//       },
//     };

// export const youtubeOptions = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
//     "X-RapidAPI-Key": "c0bac2aea6msh108d8db2cdd60ecp1afc8cjsnf227e55c4123",
//   },
// };


export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "c0bac2aea6msh108d8db2cdd60ecp1afc8cjsnf227e55c4123",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};


