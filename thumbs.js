import { YoutubeApi } from "./youtubeApi.js";
import { fetchData } from "./fetchData.js";
import { getVideoData } from "./viedoData.js";

const video = getVideoData();

//썸네일 아이템을 만드는 함수
export function thumbs(){

  
  const container = document.getElementsByClassName('thumbs__wrapper')[0];

  async function createVideoItem(){

    const video = await getVideoData(); // getVideoData()의 Promise가 해결될 때까지 대기
  console.log("video",video); 
  
    video.forEach((video,index)=>
    {
      const playerId = `player-${index}`;
        const item = document.createElement("div");
        item.classList.add("thumbs__item");
    
        item.innerHTML = `
    
           <div id="${playerId}"></div>
              <div class="thumbs__info">
                <div class="thumbs__profile">
                  <img
                    class="thumbs__profile--img"
                    src="./정면 사진.jpg"
                    alt="이미지 사진"
                  />
                </div>
                <div class="thumbs__text">
                  <h3 class="thumbs__text--title">${video.title}</h3>
                  <p class="thumbs__text--owner">${video.owner}</p>
                  <p class="thumbs__text--anal">조회수 ${video.views} &middot; ${video.time}</p>
                </div>
              </div>
        `;
    
        container.appendChild(item);
    }
    )
  }
  createVideoItem();
}


document.addEventListener("DOMContentLoaded", async function() {
  try {
    const video = await getVideoData(); // 비동기 함수의 결과를 기다림
    YoutubeApi(video); // 받아온 비디오 데이터를 YoutubeApi 함수에 전달
    
  } catch (error) {
    console.error("비디오 데이터를 받아오는 중 오류 발생:", error);
  }
});