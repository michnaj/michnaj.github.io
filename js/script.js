$(function(){$("#heading-nav a").click(function(e){e.preventDefault();let t=$("#heading-nav"),a=$("#hamburger");"open"==t.attr("class")&&(t.removeClass("open"),a.removeClass("active"));let l=$(this).attr("href");$("html, body").animate({scrollTop:$(l).offset().top},1e3)}),$(".scroll").click(function(e){e.preventDefault();let t=$(this).attr("href");$("html, body").animate({scrollTop:$(t).offset().top},1e3)}),$("#hamburger").click(function(e){e.preventDefault();let t=$(this),a=$("#heading-nav");t.toggleClass("active"),a.toggleClass("open")})});