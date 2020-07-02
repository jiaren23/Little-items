let data = [
    // {todo:"erw"},
    // {todo:"ttt"},
];

let list = document.querySelector('.list');
let text = document.querySelector('#text');
let btn = document.querySelector('#btn');

const addTodo = function () {
    btn.addEventListener('click', function () {
        let str = {};
        str.todo = text.value;
        data.push(str)
        console.log(data)
        render();
    });

}

const render = function () {
    let str = "";
    for (let i = 0; i < data.length; i++) {
        str += `
    <li data-num=${i}>${data[i].todo}</li>
    `
    }
    list.innerHTML = str;
}

const deletTodo = function () {
    list.addEventListener('click', function (e) {
        console.log(e.target.nodeName)
        if (e.target.nodeName !== "LI") { return }
        console.log(e.target.dataset.num)
        console.log(e.target.textContent)
        let splice = e.target.dataset.num;
        data.splice(splice, 1);
        console.log(data)
        render();
        console.log(e.target.textContent)
    })
}

render();
addTodo();
deletTodo();

