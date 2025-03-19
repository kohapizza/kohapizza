// スムーススクロールの実装
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          window.scrollTo({
              top: target.offsetTop - 50, // ヘッダーの高さを考慮
              behavior: 'smooth',
          });
      }
  });
});

const responsive_menu_btn = document.querySelector('.responsive_btn');
responsive_menu_btn.addEventListener('click', menuToggle);

function menuToggle() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('menu_active');
    
    // ボタンのマークを切り替え
    if (nav.classList.contains('menu_active')) {
        responsive_menu_btn.textContent = '×';
    } else {
        responsive_menu_btn.textContent = '☰';
    }
}

document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('header nav');
        nav.classList.remove('menu_active');

        // ボタンのマークを切り替え
        if (nav.classList.contains('menu_active')) {
            responsive_menu_btn.textContent = '×';
        } else {
            responsive_menu_btn.textContent = '☰';
        }
    });
});

// button for detailed descriptions
const description_btn = document.querySelector('.description_btn');
description_btn.addEventListener('click', toggle);

const detailed_description = document.querySelector('.detailed_description')

function toggle() {
    const detailed_description = document.querySelector('.info .detailed_description');
    detailed_description.classList.toggle('active');
    
    // ボタンのマークを切り替え, 詳細テキストの表示/非表示
    if (detailed_description.classList.contains('active')) {
        description_btn.textContent = '∨';
        // detailed_descriptionを非表示
    } else {
        description_btn.textContent = '∧';
    }
}
