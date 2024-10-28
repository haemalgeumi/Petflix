
import { thumbs } from "./thumbs.js";
import { getVideoData } from "../api/videoData.js";
import { lightAndDarkMode } from "./ligthAndDarkMode.js";
// import { router } from "./router.js";
import { setupNavigation } from '../routing/navigation.js';
import { navigate } from '../routing/navigate.js';

const videos = getVideoData();
console.log("getVideoData", videos);

//header__dropdown를 클릭하면 header__profile--modal이 보였다가 안보였다가
document.querySelector(".header__dropdown").addEventListener("click", function(){
    document.querySelector(".header__profile--modal").classList.toggle("show");
})
thumbs();
lightAndDarkMode();
// navigate();
// router();
// 네비게이션 설정
setupNavigation();

// 초기 로드 시 기본 콘텐츠 로드
navigate({ path: '/' });