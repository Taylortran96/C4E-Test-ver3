const button = document.getElementById('button');
const result = document.getElementById('isResult');

function isCheckSoNguyenTo(number) {
    if (number < 2) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

button.addEventListener('click', () => {
    const number1 = Number.parseInt(document.getElementById('isNumberA').value);
    const number2 = Number.parseInt(document.getElementById('isNumberB').value);

    if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
        result.innerHTML = "Nhập lại!!";
        return;
    }

    if (number1 > number2) {
        result.innerHTML = "Nhập số a không được lớn hơn số b";
        return;
    }

    let sum = 0;
    for (let i = number1; i <= number2; i++) {
        if (isCheckSoNguyenTo(i)) sum += i;
    }
    result.innerHTML = `Tổng các số nguyên tố trong đoạn từ ${number1} đến ${number2} là: ${sum}`;
});