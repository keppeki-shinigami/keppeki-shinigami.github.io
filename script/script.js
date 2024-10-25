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


