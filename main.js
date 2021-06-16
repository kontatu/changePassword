const nowPassword = document.getElementById('nowPassword');
const confirmPassword = document.getElementById('confirmPassword');
const newPassword = document.getElementById('newPassword');
const setBut = document.getElementById('setPassword');

// nowPW === confirmPW  -> newPWの更新
let defPW = 'aaabbbccc';
nowPassword.textContent = `現在のPWは、${defPW}`;

setBut.addEventListener('click', () => {
    confirmPW = confirmPassword.value;
    newPW = newPassword.value;
    if (defPW === confirmPW) {
        if (confirmPW !== newPW) {
            // abcの連続しない
            const reserach = /abc/g;
            let result = newPW.search(reserach);
            console.log(result);
            if (result < 0) {
                alert(`PWを「${newPW}」に変更しました`);
                defPW = newPW;
            } else {
                alert('「abc」を含むものは使えません');
            }

            // 連続しない
            // const check = /(.)\1/;
            // let result = check.test(newPW);
            // xxx-yyyyの形
            // let result = newPW.match(/^\d{3}-?\d{4}$/g);

            // if (result) {
            //     alert('文字を連続にしないで');
            // } else {
            //     alert(`PWを「${newPW}」に変更しました`);
            //     defPW = newPW;
            // }

            // 8文字制限
            // if (newPW.length > 8) {
            //     lengthPW(newPW);
            //     alert(`PWを「${newPW}」に変更しました`);
            //     defPW = newPW;
            // } else {
            //     alert('文字数が足りないです')
            // }
        } else {
            alert('同じPWは使えません')
        }
    } else {
        alert('PWが違います');
    }
    nowPassword.textContent = `現在のPWは、${defPW}`;
});

// ^\d{3}-\d{4}  xxx-xxxx
// (.)\1+  同じ文字が連続した場合
// abc