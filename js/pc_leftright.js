$(function() {
    // 変数にクラスを入れる
    var logo = $('#pclogo');
    var nav = $('#pcnav');
    
    //スクロールしてページトップから100に達したらボタンを表示
    $(window).on('load scroll', function(){
      if($(this).scrollTop() > 100) {
        logo.addClass('active');
        nav.addClass('active');
      }else{
        logo.removeClass('active');
        nav.removeClass('active');
      }
    });
  });
  