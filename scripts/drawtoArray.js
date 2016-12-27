window.onload = function() {
    drawRectangles(6, 7);
    $('rect.day').click(function() {
        var id = $(this).attr('id');
        var letterCoordinate = document.getElementById(id);
        if (letterCoordinate.classList.contains('color4')) {
            letterCoordinate.setAttributeNS(null, "class", "day");
        } else {
            letterCoordinate.setAttributeNS(null, "class", "day color4");
        }
    });
}

function getArray() {
    var letterName = document.getElementById('letterName').value;
    var letter = new Array(6);
    var result = '';
    for (var i = 0; i < 6; i++) {
        letter[i] = new Array(7);
        for (j = 0; j < 7; j++) {
            var letterCoordinate = document.getElementById('w' + i + '_d' + j);
            if (letterCoordinate.classList.contains('color4')) {
                letter[i][j] = 1;
                result = result + 'letter' + letterName + '[' + i + '][' + j + ']=1; <br/>';
            }
        }
    }
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'var letter' + letterName + ' = new Array(6);<br/>for (var i = 0; i < 6; i++) {<br/>letter' + letterName + '[i] = new Array(7);<br/>}<br/>function initLetter' + letterName + '() {<br/>';
    resultDiv.innerHTML += result + '<br/>return letter' + letterName + ';<br/>}';
    var section = document.getElementById('sectionResult');
    section.style.visibility = 'visible';
}