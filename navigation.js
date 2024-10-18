import { navigate } from "./navigate.js";

export function setupNavigation() {
    document.querySelectorAll('.nav__menu').forEach(button => {
      button.addEventListener('click', () => {
        const path = button.getAttribute('data-path');
        const state = { path };
  
        // URL 변경
        history.pushState(state, '', path);
  
        // 화면 내용 업데이트
        navigate(state);
      });
    });
  
    // 뒤로 가기/앞으로 가기 버튼 처리
    window.addEventListener('popstate', (event) => {
      if (event.state) {
        navigate(event.state);
      } else {
        navigate({ path: '/' }); // 기본 경로
      }
    });
  }