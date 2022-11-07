// const makeId = (length) => {
//   return Math.random()
//     .toString(36)
//     .slice(2, length + 2);
// };

export const makeId = (length) => {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
