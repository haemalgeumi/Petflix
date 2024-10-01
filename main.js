import { fetchData } from "./fetchData.js";
import { YoutubeApi } from "./youtubeApi.js";
import { thumbs } from "./thumbs.js";
import { getVideoData } from "./viedoData.js";




const videos = getVideoData();
console.log("getVideoData", videos);


thumbs();
// YoutubeApi(videos);
// fetchData();