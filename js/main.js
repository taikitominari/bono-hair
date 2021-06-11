'use strict';

    // トップのfadein(ふわっと表示)
    const topFadein = document.getElementById('fadein');
    window.addEventListener('DOMContentLoaded', () => {
        topFadein.animate([{opacity: '0'}, {opacity: '1'}], 800);
    });

    // メニューの開閉
    const showMenu = document.getElementById('show');
    const closeMenu = document.getElementById('shadow');

    showMenu.addEventListener('click', function() {
        document.body.classList.add('open-menu');
    });
    closeMenu.addEventListener('click', function() {
        document.body.classList.remove('open-menu');
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


    
