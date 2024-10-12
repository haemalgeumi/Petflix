
import { fetchData } from "./fetchData.js";

export async function getVideoData() {
  const apiKey = "AIzaSyDUcZE9hEtEY9NSlZaa-BVGwD-fmXF5vek"; // 실제 API 키를 입력하세요
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&hl=ko&maxResults=16&regionCode=KR&videoCategoryId=15&key=${apiKey}`;

  try {
    const data = await fetchData(url);
    console.log("api 응답 데이터 :", data);
    
    const video = data.items.map((videoItem, index) => ({
      videoId: `${videoItem.id}`,
      title: `${videoItem.snippet.title}`,
      owner: "오너1",
      views: "100회",
      time: "1시간 전"
    }));

    console.log(video);
    return video;
  } catch (error) {
    console.log("error :", error);
    return []; // 오류가 발생하면 빈 배열 반환
  }
}

