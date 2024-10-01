
export function YoutubeApi(video){

    const tag = document.createElement('script');
  
    tag.src ="https://www.youtube.com/iframe_api";
    
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    var player;
    
          window.onYouTubeIframeAPIReady=function() {
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
}


