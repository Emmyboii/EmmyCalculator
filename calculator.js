(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');
    let del = document.querySelector('.btn-del');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function(e){
        if (screen.value === "") {
            screen.value = "0";
        }
        else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
        screen.value;
    })

    clear.addEventListener('click', function(e){
        screen.value = "";
    })

    del.addEventListener("click", function(e){
       screen.value = screen.value.toString().slice(0,-1);
    })
})();