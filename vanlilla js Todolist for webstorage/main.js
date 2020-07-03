/*   function 說明 
storageHandler : 用於每次渲染畫面後 也要一起重新更新一次 local storage 裡面的 data
render : 渲染 組好的<li> 到 <ul>
clearInput : 按下 增添按鈕後 清掉原剛輸入的事項
addTodo : click button 添加項目
enterAddTodo : enter 添加項目
deleteTodo : 刪除項目
deleteAllTodo : 刪除所有事項
SOP : 整合重複使呼叫的 render() 、 storageHandler() 、 clearInput()
*/

let data = JSON.parse(localStorage.getItem('todoList')) || [];
let input = document.querySelector('#text');
let addBtn = document.querySelector('#btn');
let delAll = document.querySelector('#deletALL');
let list = document.querySelector('#list');

const storageHandler = () => {
    localStorage.setItem('todoList', JSON.stringify(data))
}

const render = () => {
    let str = '';
    data.forEach((item, index) => {
        str += `<li > ${item} <a href="#" data-num="${index}"> close </a> </li>`
    })
    list.innerHTML = str
}

const SOP = () => {
    render();
    storageHandler();
    clearInput();
}

const addTodo = () => {
    if (input.value === "") return  // 防止 添加空白項目
    data.push(input.value.trim()); // .trim() 移除字串前後空白 
    SOP();
}

const enterAddTodo = (e) => {
    if (e.key === "Enter") addTodo()
}

const clearInput = () => { input.value = ''; }

const deleteTodo = (e) => {
    e.preventDefault(); // 防止 delet 鍵 觸發後畫面跳到最上面
    if (e.target.nodeName == "A") {
        let splice = e.target.dataset.num;
        data.splice(splice, 1);
    }
    SOP();
}

const deleteAllTodo = () => {
    data = [];    // data.splice(0, data.length);
    SOP();
}


// ES6 const 並沒有 hoisting 所以 const 宣告的 函式 一定要放在呼叫以前 , 因此 監聽宣告要放在下面
addBtn.addEventListener('click', addTodo)
input.addEventListener('keyup', enterAddTodo)
list.addEventListener('click', deleteTodo)
delAll.addEventListener('click', deleteAllTodo)
render();







