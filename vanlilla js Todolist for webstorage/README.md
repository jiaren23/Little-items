## Todolist 

使用技巧 :
* CRUD
* data set 
* localStorage

注意事項 : 
*  本練習的 function 我使用 const arror function 做宣告 , 但因為 `ES6 const ` 並沒有 `hoisting` 所以 const 宣告的 函式 `一定要放在呼叫以前` , 因此本案例的監聽宣告我放在最下面 , 否則 會出現 `Uncaught TypeError: Cannot read property 'addEventListener' of null` 錯誤訊息


摘要 - 網頁渲染順序 : <br>
 loading >> 檢查 local storage 有無 data 要 get >> 有資料就直接渲染既有的資料 / 沒資料就空白 >> 當使用者輸入代辦項目後 按添加 / 刪除代辦項目  都會重複 ` render() 動作 + localStorage 的 setItem()`

<hr>

###  Todolist 步驟 基本介紹 ( 只有新增事項撰寫介紹 )

Todolist 簡易敘述 : <br>
* 配置 ` HTML ` 畫面 : `input 輸入框` + `button 輸入按鈕` + `<ul> 代辦事項顯示位置 `
* 撰寫 JS : 首先準備好一個欲存放 `代辦事項` 的空陣列 , 接著開始對` 輸入按鈕` 進行 `監聽`  , 在 `按下按鈕` 後 才取得輸入框裡面的 ` value ` , 然後以 `組織陣列的方式`  ` .push()` 該代辦項目進去 預先準備好存 代辦項目 資料的 陣列當中 , 接著執行 ` 渲染的含式 `。 
* 渲染的函式內依照 `innerTHML 方式` 依依把剛組好的 ( ` <li> 字串 (裏頭放入剛剛被 ,push完的 "代辦事項新陣列") ` ) 跑迴圈後賦予進 HTML 準備好的 `<ul> 代辦事項顯示位置 ` 。
     
<hr>
Todolist 詳細敘述 : <br>

1. 起手式 : 準備一筆空陣列 ` let data = [ ] ` , 想像他有代辦資訊在裏頭 ( 也就是我們要推組好的 `<li>` 進去的資料型態 ) : 
   ```js
    let data = [ "吃飯" , "洗澡" ]
   ```
2. 準備一個 推送資料的按鈕事件 , 當按鈕被 click 觸發後執行 推送資料事件 `addData()` : <br>
   內容步驟 : <br>
   1.  將輸入框裡的 `新代辦內容` 給 `.push()` 進去一開始定義的 ` data ` 之中。
   2. 此時便可以執行 ` render() ` 函式。
   ```js
    function addData(){
        data.push(input.value);
        render()  
    }
   ```    
3. 有了上面 ` 有內容的 data ` 以後便可以利用此 data 來渲染畫面了 : <br>
    內容步驟 : <br>
    1. 因應 ` innerHTML ` 特性 , 首先必須先塞準備一空陣列 ` let str = ' ' ` 。
    2. 執行迴圈 , 迴圈內容便是 ` str += 要組的字串內容 ` 
    3. 將 ` str ` 結果賦予到 ` DOM 的 <ul> 裡面 `
    ```js
        function render(){
            let str = '';
            for(let i=0;i<data.length;i++){
                str +=`<li>${data[i]}</li>`
            }
            list.innerHTML = str;
        }
    ```

         
<hr>
進階功能 : <br>

如需有 ` 刪除代辦事項 ` 、 `網頁記憶功能 (Storage)` 則必須依需求分別加入 `data set` 、 `localStorage()` 等程式碼去做控制 。<br>
詳細請看程式碼 。
