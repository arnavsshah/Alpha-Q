
var bt1 = document.getElementById('import');

bt1.onclick = function(){
    var t1 = document.getElementById("keyWord");
    var tt = t1.value;
    var t2 = document.getElementsByClassName('copy-text');
    //var msg = document.createTextNode(tt);
    //t2[0].appendChild(msg);
    t2[0].textContent +=  tt;
    t1.value = '';
    //var lb = document.createTextNode(' ');
    //t2[0].appendChild(lb);
    t2[0].textContent += ' ';
    
}

var bt2 = document.getElementById('pbt');

bt2.onclick = function(){
    var tLevel = document.getElementById('right').value;
    var level =  document.getElementsByClassName('bar-level');

    if (tLevel == 0) { level[0].setAttribute('style', 'width:0%');}

    if(tLevel>0 && tLevel< 10){
        level[0].setAttribute('style', 'width:5%');
    }
    if (tLevel >= 10 && tLevel < 20) {
        level[0].setAttribute('style', 'width:10%');
    }
    if (tLevel >=20  && tLevel < 30) {
        level[0].setAttribute('style', 'width:20%');
    }
    if (tLevel >= 30 && tLevel < 40) {
        level[0].setAttribute('style', 'width:30%');
    }
    if (tLevel >= 40 && tLevel < 50) {
        level[0].setAttribute('style', 'width:40%');
    }
    if (tLevel >= 50 && tLevel < 60) {
        level[0].setAttribute('style', 'width:50%');
    }
    if (tLevel >= 60 && tLevel < 70) {
        level[0].setAttribute('style', 'width:60%');
    }
    if (tLevel >= 70 && tLevel < 80) {
        level[0].setAttribute('style', 'width:70%');
    }
    if (tLevel >= 80 && tLevel < 90) {
        level[0].setAttribute('style', 'width:80%');
    }
    if (tLevel >= 90 && tLevel < 100) {
        level[0].setAttribute('style', 'width:90%');
    }

    if (tLevel == 100) { level[0].setAttribute('style', 'width:100%'); }
    
}