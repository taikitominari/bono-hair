
'use strict';
    // トップのfadein(ふわっと表示)
    const topFadein = document.getElementById('fadein');
    window.onload = function() {
       topFadein.animate([{opacity: '0'}, {opacity: '1'}], 1500);
    };

    // メニューの開閉
    const show = document.getElementById('show');
    const hide = document.getElementById('hide');

    show.addEventListener('click', function() {
        document.body.className = 'open-menu';
    });
    hide.addEventListener('click', function() {
        document.body.className = '';
    });

    // m-itemを押したらメニューが閉じる
    const mItem = document.getElementsByClassName('m-item');
    const itemArray = Array.from(mItem);

    itemArray.forEach(function(item) {
        item.addEventListener('click', () =>{
            document.body.className = '';
        });
    });

    // リサイズ時にメニューが閉じる
    window.addEventListener('resize', () => {
        document.body.className = '';
    });


    
