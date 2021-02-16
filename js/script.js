$(document).ready(function(){
    $('ul.tabs_choice').on('click', 'li:not(.tab_active)', function() {
        $(this)
          .addClass('tabs_content_active').siblings().removeClass('tabs_content_active')
          .closest('div.container').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
});