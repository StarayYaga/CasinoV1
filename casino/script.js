function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min)
    let result = Math.round(rand)
    console.log(result)
    return result
}

let can = true

var btn = document.getElementById('add');
let haveACount = document.querySelector('.count').textContent
console.log(haveACount)

btn.addEventListener('click', getN);

function getN() {
    if (can == true) {
        const getNum = document.getElementById('get_num').value;
        console.log(getNum);
        const status = document.querySelector('.status')
        const haveACount = Number(document.querySelector('.count').textContent)

        if (haveACount == 0){
            document.querySelector('.count').textContent.textContent = 'У вас нет очков'
            can = false
        }
        

        if (getNum == randomInteger(0, 9)) {
            document.querySelector('.count').textContent = haveACount + 100
            status.textContent = 'Вы угадали'

        } else {
            document.querySelector('.count').textContent = haveACount - 100
            status.textContent = 'Вы не угадали'
            
        }
    }
}