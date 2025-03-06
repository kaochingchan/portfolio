// 初始化Swiper
const swiper = new Swiper(".swiper", {
  // 自動播放設定
  autoplay: {
    delay: 3000, // 每張幻燈片展示3秒
    pauseOnMouseEnter: true,
    disableOnInteraction: false, // 用戶互動後不停止自動播放
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  },

  // 循環模式
  loop: true,

  // 淡入淡出效果
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // 已移除分頁指示器設定
});

// 防止點擊文字區域時的事件傳播
document.querySelectorAll(".slide-content").forEach((content) => {
  content.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

// 別忘了在<head>中引入GSAP
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>

// 側邊欄動畫
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");
  let isOpen = false;

  // 選單開關
  menuToggle.addEventListener("click", function () {
    if (!isOpen) {
      // 打開選單
      gsap.to(sidebar, {
        right: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(overlay, {
        visibility: "visible",
        opacity: 1,
        duration: 0.3,
      });

      menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      // 關閉選單
      gsap.to(sidebar, {
        right: -300,
        duration: 0.5,
        ease: "power2.in",
      });

      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        onComplete: function () {
          overlay.style.visibility = "hidden";
        },
      });

      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }

    isOpen = !isOpen;
  });

  // 點擊遮罩關閉選單
  overlay.addEventListener("click", function () {
    if (isOpen) {
      gsap.to(sidebar, {
        right: -300,
        duration: 0.5,
        ease: "power2.in",
      });

      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        onComplete: function () {
          overlay.style.visibility = "hidden";
        },
      });

      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      isOpen = false;
    }
  });
});
