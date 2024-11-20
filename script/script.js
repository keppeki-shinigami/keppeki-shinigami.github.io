
// https://qiita.com/teloppy_com/items/cd483807813af5a4a38a //
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));//timeはミリ秒

document.addEventListener('DOMContentLoaded', (event) => {
  const load = document.getElementById('load');
  const symbol = document.getElementById('load-symbol');
  load.classList.remove('loaded');
  symbol.classList.remove('loaded');
});

window.onload = function() {
  const load = document.getElementById('load');
  const copy = document.getElementById('copy');
  const symbol = document.getElementById('load-symbol');
  async function hogehoge() {
    symbol.classList.add('loaded');
    await sleep(1000);
    copy.classList.add('loaded2');
  }
  hogehoge();

  const delayedFunction = () => {
    load.classList.add('loaded');
    copy.classList.remove('loaded2');
  }
  setTimeout(delayedFunction, 1000);
  

};

$(window).on('scroll',function(){

    $(".underline").each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight){
        $(this).addClass('active');
      }
      else {
        $(this).removeClass('active');
      }
    });
    
   });

//スクロールのためのスクリプト　https://mitsutano-oshiro.com/archives/1842　//
//キャッチコピー//
$(function () {
  // ウィンドウをスクロールしたら…
  $(window).scroll(function () {
      // ウィンドウの高さを取得
      const wHeight = $(window).height();
      // スクロールした量を取得
      const wScroll = $(window).scrollTop();
          // それぞれのblockクラスに対して…
          $(".copy3").each(function () {
              // それぞれのblockクラスのウィンドウからの高さを取得
              const bPosition = $(this).offset().top;
              // スクロールした量が要素の高さを上回ったら
              // その数値にウィンドウの高さを引き、最後に200pxを足す
          if (wScroll > bPosition - wHeight) {
              $(this).addClass("fadeIn");
          }
      });
  });
});


/*メニュー */
const button = document.getElementById('btn');
const pos1 = document.getElementById('pos1');
const pos2 = document.getElementById('pos2');
const pos3 = document.getElementById('pos3');
const topmenu = document.getElementById('top-menu');
const cover = document.getElementById('cover');

button.addEventListener('click', function() {
  pos1.classList.toggle('clicked2');
  pos2.classList.toggle('clicked2');
  pos3.classList.toggle('clicked2');
  topmenu.classList.toggle('clicked');
  cover.classList.toggle('clicked');
});

const summary = document.getElementById('summaryid');
const li = document.getElementsByClassName('lili');
const li2 = document.getElementsByClassName('lilili');

summary.addEventListener('click', function() {
  // 数秒後に実行する関数を定義
  const delayedFunction = () => {
    for (let i = 0; i < li.length; i++) {
      li[i].classList.toggle('moved');
    }
  };
  // 2秒後にdelayedFunctionを実行（調整可能）
  setTimeout(delayedFunction, 0);
});

/*
$(document).on('click', 'a.lilili', function(e) {
	e.preventDefault(); //htmlデフォルトの挙動をキャンセルする
  const link = $(this).attr('href');
  pos1.classList.toggle('clicked2');
  pos2.classList.toggle('clicked2');
  pos3.classList.toggle('clicked2');
  topmenu.classList.toggle('clicked');
  cover.classList.toggle('clicked');
  window.location.href = link
});

/*
https://aya404.com/blog/develop/167_a-href-jquery/
https://alicia-ing.com/programming/front-end/arrow-horizon-scroll/
*/

/*
const amazing1 = document.getElementById('amazing')

amazing1.addEventListener('click', function() {
  amazing1.classList.addClass('ch2');
});

*/