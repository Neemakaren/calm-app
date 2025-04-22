import { vec1, vec3 } from "./assets/images";

export const data = [
  {
    id: "recZkNf2kwmdBcqd0",
    name: "item1",
    description: "Meditation",
    profile: vec3,
  },
  {
    id: "recEHmzvupvT8ZONH",
    name: "item2",
    description: "Song",
    profile: vec3,
  },
  {
    id: "rec5NBwZ5zCD9nfF0",
    name: "item3",
    description: "Stars",
    profile: vec3,
  },
  {
    id: "recd1jIVIEChmiwhe",
    name: "item4",
    description: "Movie",
    profile: vec3,
  },
  {
    id: "recoM2MyHJGHLVi5l",
    name: "item5",
    description: "Zoela",
    profile: vec3,
  },
];


export const moodButtons = 
[
  {
    "id":1,
    "name": "Happy"
  },
  {
    "id":2,
    "name": "Sad"
  },
  {
    "id":3,
    "name": "Anxious"
  },
  {
    "id":4,
    "name": "Scared"
  },
  {
    "id":5,
    "name": "Hopeful"
  },
  {
    "id":6,
    "name": "lost"
  },
]
// export const data1 = [
//   {
//     id: "recZkNf2kwmdBcqd0",
//     name: "item1",
//     description: "jewellery",
//     profile: img,
//   },
//   {
//     id: "recEHmzvupvT8ZONH",
//     name: "item2",
//     description: "hairextensions",
//     profile: img,
//   },
//   {
//     id: "rec5NBwZ5zCD9nfF0",
//     name: "item3",
//     description: "makeup",
//     profile: img,
//   },
//   {
//     id: "recd1jIVIEChmiwhe",
//     name: "item4",
//     description: "shoes",
//     profile: img,
//   },
//   {
//     id: "recoM2MyHJGHLVi5l",
//     name: "item5",
//     description: "clothes",
//     profile: img,
//   },
// ];


export const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

