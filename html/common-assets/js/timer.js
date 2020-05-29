$(function () {
    $('#clock').countdown('2020/6/19 12:00:00 UTC').on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
                                              + '<span class="h1 font-weight-bold">%D</span> Day%!d'
                                              + '<span class="h1 font-weight-bold">%H</span> Hr'
                                              + '<span class="h1 font-weight-bold">%M</span> Min'
                                              + '<span class="h1 font-weight-bold">%S</span> Sec'));
    });
  
  });
  