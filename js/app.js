function chuyenDoi(type, element) {
    var tabs = document.getElementsByClassName('list-item');
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.background = '#c0aa83';
    };
    element.style.background = '#b34204';

    document.getElementById(type).style.display = 'block';

    switch (type) {
        case 'coffee':
            document.getElementById('green').style.display = 'none';
            document.getElementById('roasted').style.display = 'none';
            document.getElementById('itali').style.display = 'none';
            break;
         case 'green':
            document.getElementById('coffee').style.display = 'none';
            document.getElementById('roasted').style.display = 'none';
            document.getElementById('itali').style.display = 'none';
             break;
         case 'roasted':
            document.getElementById('coffee').style.display = 'none';
            document.getElementById('green').style.display = 'none';
            document.getElementById('itali').style.display = 'none';
             break;
        case 'itali':
            document.getElementById('coffee').style.display = 'none';
            document.getElementById('green').style.display = 'none';
            document.getElementById('roasted').style.display = 'none';
             break;
    };
}