import { fetchData } from "./fetchData.js";
import { YoutubeApi } from "./youtubeApi.js";
import { thumbs } from "./thumbs.js";
import { getVideoData } from "./viedoData.js";
import { lightAndDarkMode } from "./ligthAndDarkMode.js";



const videos = getVideoData();
console.log("getVideoData", videos);

//header__dropdown를 클릭하면 header__profile--modal이 보였다가 안보였다가
document.querySelector(".header__dropdown").addEventListener("click", function(){
    document.querySelector(".header__profile--modal").classList.toggle("show");
})
thumbs();
lightAndDarkMode();
