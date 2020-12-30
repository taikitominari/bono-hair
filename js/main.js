
'use strict';

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
    console.log(mItem);
    const itemArray = Array.from(mItem);
    console.log(itemArray);

    itemArray.forEach(function(item) {
        item.addEventListener('click', () =>{
            document.body.className = '';
        });
    });

    // リサイズ時にメニューが閉じる
    window.addEventListener('resize', () => {
        document.body.className = '';
    });
    