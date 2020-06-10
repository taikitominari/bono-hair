
(function() {
    'use strict';

    var show = document.getElementById('show');
    var hide = document.getElementById('hide');

    show.addEventListener('click', function() {
        document.body.className = 'open-menu';
    });
    hide.addEventListener('click', function() {
        document.body.className = '';
    });
})();

