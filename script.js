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

let slideIndex = 1; // 現在表示されているスライドのインデックス (1始まり)

document.addEventListener('DOMContentLoaded', function() {
    // ページ読み込み完了時に最初のスライドを表示
    showSlides(slideIndex);
});

// 次へ/前へボタンがクリックされたときに呼び出される関数
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// ドットインジケーターがクリックされたときに呼び出される関数
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// スライドを表示・非表示を切り替えるメイン関数
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // スライドが最後の次や最初の前に行った場合の調整
    if (n > slides.length) {
        slideIndex = 1; // 最後のスライドの次なら最初のスライドに戻る
    }
    if (n < 1) {
        slideIndex = slides.length; // 最初のスライドの前なら最後のスライドに行く
    }

    // 全てのスライドを非表示にする
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // 全てのドットから "active" クラスを削除する
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // 現在のスライドを表示する
    slides[slideIndex-1].style.display = "block"; // 配列のインデックスは0始まりなので -1 する

    // 現在のドットに "active" クラスを追加する
    dots[slideIndex-1].className += " active";
}

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