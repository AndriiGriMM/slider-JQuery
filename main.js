$(document).ready(function () {
    $('#next').click(function () {

        let $activeImage = $('.active');
        let $activeIndex = $('p.active').index()
        let $nextStep = $activeIndex + 1
        let $nextP = $('p').eq($nextStep)
        if ($activeIndex !== $('p').length - 1) {
            $activeImage.removeClass('active')
            $nextP.addClass('active')
        }
    })
    $('#prev').click(function () {
        let $activeImage = $('.active');
        let $activeIndex = $('p.active').index()
        let $prevStep = $activeIndex - 1
        let $prevP = $('p').eq($prevStep)
        if ($activeIndex !== 0) {
            $activeImage.removeClass('active')
            $prevP.addClass('active')
        }
    })
})