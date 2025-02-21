document.addEventListener("DOMContentLoaded", function () {
    const mladmob = document.querySelector(".nirvana");
  
    if (mladmob) {
      window.addEventListener("scroll", function () {
        let scrollY = window.scrollY; // Получаем текущий скролл страницы
        let moveAmount = Math.min(scrollY * 0.5, 200); // Ограничиваем движение
  
        mladmob.style.transform = `translateY(-${moveAmount}px)`; // Двигаем вверх
        mladmob.style.opacity = `${1 - scrollY / 400}`; // Плавно уменьшаем прозрачность
      });
    }
  });
  