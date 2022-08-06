
var prompttext = prompt('値を入力してください');
//console.log(prompttext);
selectcolor(prompttext)
function selectcolor (prompttext) {
    var test = document.querySelector('#target-id');
    if(prompttext === '赤'){
        test.classList.add('change-red')
        console.log(prompttext);   
    }
    else if(prompttext ==='青')　{
        test.classList.add('change-blue')
    }
    else if(prompttext ==='緑') {
        test.classList.add('change-green')
    }
    else {
        test.textContent ='指定の色はありませんでした'
    }
}