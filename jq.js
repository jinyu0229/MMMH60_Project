let page = 0;

// 關於我們(手機)
// 點擊右箭頭切換
$('.as-right').click(function () {
    console.log($(this).index());
    page++;
    if (page > 2) {
        page = 0;
    }
    $('.about-card').css('left', -300 * page + 'px');
})
// 點擊左箭頭切換
$('.as-left').click(function () {
    console.log($(this).index());
    page--;
    if (page < 0) {
        page = 2;
    }
    $('.about-card').css('left', -300 * page + 'px');
})

// 櫻花圖鑑    
// 點擊櫻花切換

if($(window).width() < 1439){
    $('.sakura-cardgroup li').click(function () {
        page = $(this).index();
        console.log($(this).index());
        $('.sakura-card').css('left', $(this).index() * -300 + 'px');
    })
}
else{
    $('.sakura-cardgroup li').click(function () {
    page = $(this).index();
    console.log($(this).index());
    $('.sakura-card').css('left', $(this).index() * -600 + 'px');
})
}




if ($(window).width() < 1439) {
    // 手機
    // 點擊右箭頭切換
    $('.ss-right').click(function () {
        console.log($(this).index());
        page++;
        if (page > 9) {
            page = 0;
        }
        $('.sakura-card').css('left', -300 * page + 'px');
    })

    // 點擊左箭頭切換
    $('.ss-left').click(function () {
        console.log($(this).index());
        page--;
        if (page < 0) {
            page = 9;
        }
        $('.sakura-card').css('left', -300 * page + 'px');
    })
}
else {
    // 電腦
    // 點擊右箭頭切換
    $('.ss-right').click(function () {
        console.log($(this).index());
        page++;
        if (page > 9) {
            page = 0;
        }
        $('.sakura-card').css('left', -600 * page + 'px');
    })
    // 點擊左箭頭切換
    $('.ss-left').click(function () {
        console.log($(this).index());
        page--;
        if (page < 0) {
            page = 9;
        }
        $('.sakura-card').css('left', -600 * page + 'px');
    })
}

// 賞櫻去處
// 點擊圖示切換

if ($(window).width() < 1439) {

    if($(window).width() < 376){
        // 點擊右箭頭切換
    $('.cs-right').click(function () {
        console.log($(this).index());
        page++;
        if (page > 4) {
            page = 0;
        }
        $('.card').css('left', -300 * page + 'px');
    })

    // 點擊左箭頭切換
    $('.cs-left').click(function () {
        console.log($(this).index());
        page--;
        if (page < 0) {
            page = 4;
        }
        $('.card').css('left', -300 * page + 'px');
    })
    }
    else{
        // 點擊右箭頭切換
    $('.cs-right').click(function () {
        console.log($(this).index());
        page++;
        if (page > 4) {
            page = 0;
        }
        $('.card').css('left', -700 * page + 'px');
    })

    // 點擊左箭頭切換
    $('.cs-left').click(function () {
        console.log($(this).index());
        page--;
        if (page < 0) {
            page = 4;
        }
        $('.card').css('left', -700 * page + 'px');
    })
    }

    
}
else {
    $('.choose li').click(function () {
        page = $(this).index();
        console.log($(this).index());
        $('.card').css('left', $(this).index() * -1000 + 'px');
    })
}


