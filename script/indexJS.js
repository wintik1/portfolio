/* Sass Document */

// let work = document.getElementById('myWorks');

function workColor(element) {
                var result = "";
                for (var i = 0; i < element.innerHTML.length; i++) {
                    result += "<span style='color: rgb(" + ~~(Math.random() * 255) + ", " + ~~(Math.random() * 255) + ", " + ~~(Math.random() * 255) + ")'>" + element.innerHTML.charAt(i) + "</span>"
                }
                element.innerHTML = result;
    
        }
    
        workColor(document.getElementById("myWorks"));
    