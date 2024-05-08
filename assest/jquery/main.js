$('.nav-link').on('click', function(){
$(this).next('.dropdown').slideToggle(1000);
$('.dropdown').not($(this).next('.dropdown')).slideUp(1000);
$(this).children().eq(1).addClass('rotate')
$('.rotate').not($(this).children().eq(1)).toggleclass('.rotate');
});
 
// $('.header_usa').on('click',function(){
// $(this).next().slidedown(1000);
// });
$('.header_usa').click(function(){
    $('.sub_list').toggleClass('d-block');  
});
$('.not-bell').click(function(){
    $('.notification').toggleClass('d-block');
})
$('.bar').click(function(){
   $('aside').toggleClass('w-60');
   $('.logo_content').toggleClass('pad_none');
   $('header').toggleClass('m-200');
   $('.lo_content>span').toggleClass('d-none');
    $('.menu').toggleClass('p-10');
    $('.menu_head').toggleClass('d-none');
    $('.field_name>span').toggleClass('d-none');
    $('.field_icon').toggleClass('d-none');
    $('.zz').toggleClass('z10');
    $('aside .logo').toggleClass('p-10');
    $('.content_area').toggleClass('m-200');
});
$('.theme').click(function(){
    $('header').toggleClass('header_dark');
});

$('.img-vec').click(function(){
    $('.img_log').toggleClass('d-block');  
});
