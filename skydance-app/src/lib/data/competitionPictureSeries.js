const arr = new Array(13).fill(null);

const competitionPictureSeries = arr.map((_, index) => ({
  title: index + 1,
  images: [`/worldOfDance/${index + 1}.jpg`],
}));

export default competitionPictureSeries;
