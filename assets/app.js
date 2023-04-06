var konami_command = [
    38,
    38,
    40,
    40,
    37,
    39,
    37,
    39,
    66,
    65
];
var key_number = 0;
document.addEventListener("keyup",function(e) {
    key_number ++;
    if (e.keyCode == konami_command[key_number - 1]) {
        // 入力した回数 = 必要な入力数なら発動
        if (key_number == konami_command.length) {
            var element = document.querySelector('body .main .image');
            element.classList.add('konami');
            setTimeout(() => {
                element.classList.remove('konami');
            }, 2000);
        }
    } else {
        // 間違えたキーからカウントできるようにもう一回ifを挟む
        if (e.keyCode == konami_command[0]) {
            key_number = 1;
        } else {
            key_number = 0;
        }
    }
});