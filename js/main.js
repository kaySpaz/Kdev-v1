$(document).ready(function() {
    $('svg#menu-icon').click(openSidebar,);
    $('#menuClose').mouseenter(spinCloseMenu).mouseleave(function() {
        $(this).css({'transform': 'rotate(0)'})
    });
    $('#contact-close').mouseenter(spinCloseMenu).mouseleave(function() {
        $(this).css({'transform': 'rotate(0)'})
    });
    $('#menuClose').click(hideSidebar);
    $(function() {
        var header = $("#largemenu");
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll >= 500) {
                header.addClass("black");
            } else {
                header.removeClass("black");
            }
        });
    });
    $('#menu-close-wrapper').click(hideSidebar);
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }
        if (isEscape) {
            $(hideSidebar);
        }
    };
    (function() {
        var videoHeight = $('#myVideo').height();
        $('#hero').height(videoHeight);
    });
    $('#info').click(showContactModal);
    $('#contact-close').click(hideContactModal);
    $('#footer-contact-link').click(showContactModal);
});
function openSidebar() {
    $('#largemenu').css({
        'top': '-500px'
    });
    $('#sidebar').css({'transform': 'translateX(0)'});
    $('#menu-close-wrapper').css({display: 'block'});
}
function hideSidebar() {
    $('#sidebar').css({'transform': 'translateX(-600px)'})
    $('#largemenu').css({'top': '0'});
    $('#menu-close-wrapper').css({display: 'none'});}
function spinCloseMenu() {
    $(this).css({
        'transform': 'rotate(720deg)'
    })
}
function showContactModal() {
    // lock the scroll position and retain settings for later
    var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
  ];
    var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
    html.data('scroll-position', scrollPosition);
    html.data('previous-overflow', html.css('overflow'));
    html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
    $('#contact-form-modal-container').show(100);
    $(hideSidebar);
    $('#contact-form-modal-container').delay(250).animate({
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    });
}
function hideContactModal() {
    // Reset Scroll To previous
    var html = jQuery('html');
    var scrollPosition = html.data('scroll-position');
    html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1])
    $('#contact-form-modal-container').animate({
        backgroundColor: 'rgba(0, 0, 0, 0.0)'
    });
    $('#contact-form-modal-container').delay(250).hide(100);
}