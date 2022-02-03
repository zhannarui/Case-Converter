let text = document.querySelector("textarea")

document.getElementById("upper-case").addEventListener("click", function(){
    text.value = text.value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function(){
    text.value = text.value.toLowerCase();
});
document.getElementById("proper-case").addEventListener("click", function(){
    let words = text.value.toLowerCase().split(" ");
   for(let i = 0; i < words.length; i++){
       words[i] = words[i][0].toUpperCase() + words[i].slice(1);
   }
   text.value = words.join(" ");
});
document.getElementById("sentence-case").addEventListener("click", function(){
    let sentence = text.value.toLowerCase().split(". ");
    for(let i = 0; i < sentence.length; i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    text.value = sentence.join(". ");
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener("click", function (){
    let text = document.querySelector("textarea").value;
    let filename = "text.txt";
    download(filename,text);
});

