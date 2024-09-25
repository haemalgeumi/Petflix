const video = [
  {videoId:"KQ689Rd_LKg",title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"},
  {videoId:"hY7m5jjJ9mM", title: "강아지2", owner :"오너2", views:"150회", time:"2시간 전"},
  {videoId:"dQw4w9WgXcQ", title: "강아지3", owner :"오너3", views:"200회", time:"3시간 전"},
  {videoId:"eX2qFMC8cFo", title: "강아지4", owner :"오너4", views:"250회", time:"4시간 전"},
  {videoId:"nlHkpgC8Sm4", title: "강아지5", owner :"오너5", views:"300회", time:"5시간 전"},
  {videoId:"9bZkp7q19f0", title: "강아지6", owner :"오너6", views:"350회", time:"6시간 전"},
  {videoId:"f5OjK_FfgAw", title: "강아지7", owner :"오너7", views:"400회", time:"7시간 전"},
  {videoId:"2Vv-BfVoq4g", title: "강아지8", owner :"오너8", views:"450회", time:"8시간 전"},
  {videoId:"gxepGeFdpTg", title: "강아지9", owner :"오너9", views:"500회", time:"9시간 전"},
  {videoId:"cFzNTs4Rqw8", title: "강아지10", owner :"오너10", views:"550회", time:"10시간 전"},
  {videoId:"9bZkp7q19f0", title: "강아지11", owner :"오너11", views:"600회", time:"11시간 전"},
  {videoId:"y_2YIO68uO8", title: "강아지12", owner :"오너12", views:"650회", time:"12시간 전"},
  {videoId:"9tZ94NyX-gA", title: "강아지13", owner :"오너13", views:"700회", time:"13시간 전"},
  {videoId:"_OEyRSoegIc", title: "강아지14", owner :"오너14", views:"750회", time:"14시간 전"},
  {videoId:"PVjiKRfKpPI", title: "강아지15", owner :"오너15", views:"800회", time:"15시간 전"},
  {videoId:"X1vTOz_wCq8", title: "강아지16", owner :"오너16", views:"850회", time:"16시간 전"}
];
const container = document.getElementsByClassName('thumbs__wrapper')[0];

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

const tag = document.createElement('script');
tag.src ="https://www.youtube.com/iframe_api";

const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



var player;
      function onYouTubeIframeAPIReady() {
        video.forEach((video,index) =>{
          const playerId = `player-${index}`
          player = new YT.Player(playerId, {
            height: '180',  
            width: '320',  
            videoId: video.videoId || 'M7lc1UVf-VE',
            playerVars: {
              'rel': 0,   
              'controls': 0,    
              'autoplay' : 0,   
              'mute' : 1,   
              'loop' : 1,    
              'playsinline' : 1,    
              'playlist' : video.videoId || 'M7lc1UVf-VE'
            },
            events: {
              'onReady': onPlayerReady, 
              'onStateChange': onPlayerStateChange 
            }
          });
        })
      
      }

      function onPlayerReady(event) {
        const player = event.target;  
        const iframe = player.getIframe();  
        
        iframe.addEventListener('mouseover', function() {
            player.playVideo();
        });
    
        iframe.addEventListener('mouseout', function() {
            player.pauseVideo();  
        });
      }

      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
const apiKey = "";
const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&hl=ko&maxResults=2&regionCode=KR&videoCategoryId=15&key=${apiKey}`
fetch(url)
      .then((response) => {
        if(!response.ok){
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      
      .then(data => console.log("data:", data.items[0].id))
      .catch((error) => console.log("error :", error));


