let count = 1;
document.getElementById("slide1").checked = true;

setInterval( function(){
    nextimage();
}, 3000)

function nextimage(){
    count++;
    if(count>3){
        count = 1;
    }
    document.getElementById("slide"+count).checked = true;

}