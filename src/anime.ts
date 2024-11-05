function shuffleArray(arr: Array<any>) {
    const newArr = [...arr]; // Create a shallow copy of the array
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }

export type Anime = {
    image: string;
    name: string;
}

export const anime = [
  { image: "/img/img1.jpg", name: "Lorem1" },
  { image: "/img/img2.jpg", name: "Lorem2" },
  { image: "/img/img3.jpg", name: "Lorem3" },
  { image: "/img/img4.jpg", name: "Lorem4" },
  { image: "/img/img5.jpg", name: "Lorem5" },
  { image: "/img/img6.jpg", name: "Lorem6" },
];

export const randomAnimeSet1 = shuffleArray(anime);
export const randomAnimeSet2 = shuffleArray(anime);
