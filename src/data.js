import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Growing Through The Cracks",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/5158b15bf8cb3b9d50588cfc31d36d28c816dc0c-1024x1024.jpg",
      artist: "Philanthrope mommy",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=35636",
      color: ["#3924CD", "#663EA2"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nectarine",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/06/2b9d337d372db542748e2643dc90af62dd3418e2-1024x1024.jpg",
      artist: "Es-K, Danny James, John Culbreth",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=34242",
      color: ["#556481", "#AE0401"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Where The Sun Goes",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-1024x1024.jpg",
      artist: "Delayde, anybodyy",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23188",
      color: ["#8960D6", "#5EB4A1"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Melancholy",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
      artist: "Makzo",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11778",
      color: ["#FEE96A", "#F77F01"],
      id: uuidv4(),
      active: false,
    },
  ];
}
export default chillHop;
