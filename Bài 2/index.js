function numberOneTriangle(number) {
    if(number < 1 || number > 10) {
        alert("Nhập lại số trong khoảng từ 1 đến 10!!")
        return;
    }
    for (let i = 1; i <= number; i++) {
        let str = '';
        for (let j = 0; j < i; j++) {
            str += '*';
        }
        document.write(`<div>${str}</div>`);
    }
}

numberOneTriangle(5);