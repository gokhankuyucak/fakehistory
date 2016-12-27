function drawRectangles(x, y) {
    var xmlns = "http://www.w3.org/2000/svg";
    var gitRect = document.getElementById('gitrect');
    var fistElement = gitRect.firstChild;
    var groupX = 0;
    var groupY = 0;
    var rectX = 13;
    for (i = 0; i < x; i++) {
        var g = document.createElementNS(xmlns, 'g');
        g.setAttributeNS(null, "transform", "translate(" + groupX + "," + groupY + ")");
        groupX = groupX + 13;
        var rectY = 0;
        for (d = 0; d < y; d++) {
            var rect = document.createElementNS(xmlns, 'rect');
            rect.setAttributeNS(null, "id", "w" + i + "_d" + d);
            rect.setAttributeNS(null, "class", "day");
            rect.setAttributeNS(null, "width", "10");
            rect.setAttributeNS(null, "height", "10");
            rect.setAttributeNS(null, "x", rectX);
            rect.setAttributeNS(null, "y", rectY);
            rect.setAttributeNS(null, "data-count", "0");
            rect.setAttributeNS(null, "data-date", "2015-12-20");
            rectY = rectY + 12;
            g.appendChild(rect);
        }
        rectX = rectX - 1;
        gitRect.insertBefore(g, fistElement);
    }
}

function drawText() {
    var inputWord = document.getElementById('inputWord');
    clearWall();
    draw(inputWord.value);
}

function clearWall() {
    var els = [].slice.apply(document.getElementsByClassName("day"));
    for (var i = 0; i < els.length; i++) {
        els[i].setAttributeNS(null, "class", "day");
    }
}

function draw(word) {
    var items = ["color2", "color3", "color4"]
    var str_array = word.split('');
    var padding_X = getStringLength(str_array);
    console.log(getStringLength(str_array));
    for (var index = 0; index < str_array.length; index++) {
        var currChar = str_array[index].toUpperCase();
        var charFunc = eval('initLetter' + currChar);
        var asciiCharArr = charFunc();
        for (l_x = 0; l_x < asciiCharArr.length; l_x++) {
            for (l_y = 0; l_y < 7; l_y++) {
                if (asciiCharArr[l_x][l_y] !== undefined) {
                    var currentX = l_x + padding_X;
                    var letterCoordinate = document.getElementById('w' + currentX + '_d' + l_y);
                    var itemColor = items[Math.floor(Math.random() * items.length)];
                    if (letterCoordinate != null) {
                        letterCoordinate.setAttributeNS(null, "class", "day " + itemColor);
                    }
                }
            }
        }
        padding_X = padding_X + asciiCharArr.length + 1;

    }

}

function getStringLength(str_array) {
    var result = 0;
    for (var index = 0; index < str_array.length; index++) {
        var currChar = eval('letter' + str_array[index].toUpperCase());
        var len = currChar.length;
        result += len + 1;
    }
    var roundedResult = 1;
    console.log(result);
    if (result < 52) {
        roundedResult = Math.round((52 - result) / 2);
    }
    return roundedResult;
}