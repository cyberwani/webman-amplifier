/**
 * WebMan Posts shortcode scripts
 *
 * @package     WebMan Amplifier
 * @subpackage  Shortcodes
 *
 * @since       1.0
 */

jQuery(function(){function c(){b.each(function(){var b=jQuery(this);b.isotope({layoutMode:b.data("layout-mode"),isOriginLeft:"rtl"!=jQuery("html").attr("dir"),transformsEnabled:"rtl"!=jQuery("html").attr("dir")})})}function e(a){if(a.hasClass("with-margin")){var b=2*(a.outerWidth()/104)+"px";a.find(".owl-item").css({paddingLeft:b,paddingRight:b})}}function f(a){a.children().each(function(a,b){jQuery(b).parent().prepend(jQuery(b))})}function g(){jQuery('[class*="scrollable-"]').each(function(){var c=jQuery(this),d=c.find(".wm-items-container"),e=d.children().eq(0).outerWidth(!0),f=e-d.children().eq(0).outerWidth(),g=d.data("columns")?d.data("columns"):3,h=d.hasClass("stack")?g:1,i=d.data("time")&&999<d.data("time")?d.data("time"):4e3;768>a?(e=c.outerWidth(),f=0,g=h=1,d.closest(".wm-posts-wrap").hasClass("wm-posts-wm_logos")&&(e/=3,g=h=3)):e-=f,d.bxSlider({auto:d.closest(".wm-posts-wrap").hasClass("scrollable-auto"),pause:i,minSlides:1,maxSlides:g,slideWidth:parseInt(e),slideMargin:parseInt(f),moveSlides:h,pager:!1,autoHover:!0,adaptiveHeight:c.hasClass("auto-height"),useCSS:!1})})}var a=document.body.clientWidth;if(jQuery(window).on("resize orientationchange",function(){a=document.body.clientWidth}),jQuery().isotope){var b=jQuery(".filter-this");b.prev(".wm-filter").on("click","a",function(a){a.preventDefault();var b=jQuery(this),c=b.data("filter");b.closest(".wm-posts-wrap").find(".filter-this").isotope({filter:c,isOriginLeft:"rtl"!=jQuery("html").attr("dir"),transformsEnabled:"rtl"!=jQuery("html").attr("dir")}),b.parent("li").addClass("active").siblings("li").removeClass("active")}),b.imagesLoaded(function(){c()})}if(jQuery().masonry){var d=jQuery(".masonry-this");d.imagesLoaded(function(){d.masonry({isRTL:"rtl"==jQuery("html").attr("dir"),isOriginLeft:"rtl"!=jQuery("html").attr("dir")})})}jQuery().owlCarousel?jQuery('[class*="scrollable-"]').each(function(){var b=jQuery(this),c=b.find(".wm-items-container"),d=c.data("columns")?c.data("columns"):3,g=Math.min(2,d),h=Math.min(3,d),i=c.hasClass("stack")?!0:!1,j=b.hasClass("scrollable-auto")&&c.data("time")&&999<c.data("time")?c.data("time"):!1;c.owlCarousel({items:d,autoPlay:j,stopOnHover:!0,scrollPerPage:i,navigation:!0,navigationText:["<",">"],pagination:!1,slideSpeed:800,autoHeight:b.hasClass("auto-height"),afterAction:e,itemsCustom:[[0,1],[420,g],[768,h],[1020,d]],itemsDesktopSmall:[1020,h],itemsTablet:[768,g],itemsMobile:[420,1],autoPlayDirection:"rtl"!=jQuery("html").attr("dir")?!1:"rtl",startPosition:"rtl"!=jQuery("html").attr("dir")?!1:-1,beforeInit:"rtl"!=jQuery("html").attr("dir")?!1:f})}):jQuery().bxSlider&&(g(),jQuery(window).on("resize orientationchange",function(){g()}))});