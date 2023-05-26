document.onkeydown = function (e) {
    console.log("key code", e.keyCode)
    if (e.keyCode == 38) {
        var ryu = document.getElementById("ryu");
        ryu.classList.add('jump');
        setTimeout(() => {
            ryu.classList.remove('jump')
        }, 700);
    }else if(e.keyCode == 39){
        var ryu = document.getElementById("ryu");
        var ryuX = parseInt( window.getComputedStyle(ryu,null).getPropertyValue('left'));
         ryu.style.left= ryuX + 200 + "px";
        console.log(ryuX)

    }else if(e.keyCode == 37){
        var ryu = document.getElementById("ryu");
        var ryuX = parseInt( window.getComputedStyle(ryu,null).getPropertyValue('left'));
        console.log(ryuX)
         ryu.style.left= (ryuX - 200) + "px";

    }else if (e.keyCode == 40) {
        var ryu = document.getElementById("ryu");
        ryu.classList.add('box');
        setTimeout(() => {
            ryu.classList.remove('box')
        }, 500);
        
    }else if (e.keyCode == 90) {
        var ryu = document.getElementById("ryu");
        ryu.classList.add('sweep');
        setTimeout(() => {
            ryu.classList.remove('sweep')
        }, 500);
        
    }else if (e.keyCode == 88) {
        var ryu = document.getElementById("ryu");
        ryu.classList.add('boxUp');
        setTimeout(() => {
            ryu.classList.remove('boxUp')
        }, 500);
        
    }
}
