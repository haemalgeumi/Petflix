const video = [
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
    {title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"},
    {title: "강아지1", owner :"오너1", views:"100회", time:"1시간 전"}
   
]

const container = document.getElementsByClassName('thumbs__wrapper')[0];

video.forEach(video=>
{
    const item = document.createElement("div");
    item.classList.add("thumbs__item");

    item.innerHTML = `
      <img class="thumbs__thumbnail" src="./새롬.jpg" alt="새롬" />
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