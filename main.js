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
            let result = newPW.match(/^\d{3}-?\d{4}$/g);
            if (!result) {
                alert('xxx-yyyyの形にしてください');
            } else {
                alert(`PWを「${newPW}」に変更しました`);
                defPW = newPW;
            }

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
    nowPassword.textContent = `現在のPWは、${newPW}`;
});

// ^\d{3}-\d{4}  xxx-xxxx
// (.)\1+  同じ文字が連続した場合
// abc