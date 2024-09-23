const video = [
    {videoId:"ITbFRNIZBIY",title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"},
    {title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"},
    {title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"},
    {title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"},
    {title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"},
    {title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"},
    {title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"},
    {title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"},
    {title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"},
    {title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"},
    {title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"},
    {title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"},
    {title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"},
    {title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"},
    {title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"},
    {title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"}
   
]

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


