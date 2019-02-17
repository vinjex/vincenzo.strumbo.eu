let divWidth, tb;
$(function () {
  tb = $('#thumbs');
  divWidth = tb.outerWidth();


  $('.history-block').on('click', function () {
    if (window.visualViewport.width >= 737) {
      const shouldOpen = $(this).find('.timeline').css('display') !== 'block';
      $('.history-block').not($(this)).css('width', '320px');
      $('.history-block').not($(this)).find('.title').css('width', '300px');
      $('.history-block .timeline').not($(this).find('.timeline')).hide(150);
      if (shouldOpen) {
        $(this).css('width', '420px');
        $(this).find('.title').css('width', '320px');
        $(this).find('.timeline').show(400);
      }
    }
  });

  $(window).on('resize', () => {
    if (window.visualViewport.width < 737) {
      $('.history-block').css('width', '320px');
      $('.history-block').find('.title').css('width', '300px');
      $('.history-block .timeline').hide(150);
    }
  });

});