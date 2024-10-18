export function navigate(state){
    const content = document.querySelector(".thumbs__wrapper");
    switch (state.path){
        case 'watch-history':
            content.innerHTML = "<div>안녕하세요</div>";
            break;
        case 'watch-later':
            content.innerHTML = "<div>안녕하세요1</div>";
            break;
        case 'liked-videos':
            content.innerHTML = "<div>안녕하세요3</div>";
            break;
    }
}
