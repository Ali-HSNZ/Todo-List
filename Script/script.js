// دسترسی به عناصر  Html
let pTime = document.querySelector(".box_left-p");
let input = document.querySelector(".main-input");
let ul = document.querySelector(".main_ul")
let time_p = document.querySelector('.time-p')
let main_button = document.querySelector(".main-button")
let dataList = document.querySelector("#dataList")
let option = dataList.querySelectorAll("option") 
let LIST,id;
let reload = document.querySelector(".reload");

// مربوط به ایجاد آیتم
let default_checkBox;
let default_deleteIcon;
let default_show;     
// ----------------------------------------------------------------------------------------------------------

// تغییر رنگ پس زمینه  Select Option
option[1].style.backgroundColor = "#a5ffa3";
option[2].style.backgroundColor = "#ffa3a5";
// -----------------------------------------------------------------------------------------------------------

// اگر روی دکمه 'ریلود' کلیک کند تمام داده ها پاک میشود و صفحه 'رفرش' می شود
reload.addEventListener("click",function(){
    localStorage.removeItem("item")
    location.reload()
})
// ------------------------------------------------------------------------------------------------------------

// گرفتن وقت دقیق سیستم
var options = {
    day : "numeric",
    month : "long",
    weekday :"long",
}
function getTime(){
    let time = new Date();
    let h = time.getHours()
    let m = time.getMinutes();
    let s = time.getSeconds();
    time_p.innerHTML = time.toLocaleDateString("fa-IR",options)
    let TimePersian = ( h < 10 ? "0"+h : h) +" : " +( m < 10 ? "0"+m : m)+ " : " +( s < 10 ? "0"+s : s)
    // فارسی سازی عدد برای  نمایش 
    pTime.innerHTML = persianJs(TimePersian).englishNumber().toString();
}
setInterval(getTime,1000)
// ------------------------------------------------------------------------------------------------------------

// گرفتن داده های ثبت شده از مرورگر
var data = localStorage.getItem("item")
// ------------------------------------------------------------------------------------------------------------

// اگر داده ای در مرورگر وجود داشته باشه
if(data){
    // تبدیل مقدار رشته ای که در مرورگر ذخیره شده بود به آبجکت
    // برای استفاده کردن از قابلیت های آبجکت
    LIST = JSON.parse(data)
    // ----------------
    id = LIST.length
    // فرستادن داده های گرفته شده به فانکش تولید آیتم ها
    LoadListInLS(LIST)
    // ----------------
}else{
    LIST = []
    id = 0
}
// ------------------------------------------------------------------------------------------------------------

// پیدا کردن تمام موارد ارسال شده از طرف مرورگر و ارسال تک تک آنها به 'اد آتم' برای ایجادشان
function LoadListInLS(Items){
    Items.forEach(function(e){
        addItem(e.name, e.date, e.time, e.id, e.removed, e.check)
    })
}
// ------------------------------------------------------------------------------------------------------------

// مرکز اصلی ایجاد "آیتم" ها

function addItem(inputValue,date,time,id,remove,check){

// اگر این مقدار برابر با فعال باشد یعنی آن مقدار قبلا حذف شده است و دیگر نشان نمیدهد
    if(remove){
        return
    }
// ---------------
    default_checkBox = "check_box_outline_blank";
    default_show = "show";
    default_deleteIcon = ""

    if(check){
        default_checkBox = "check_box"
        default_show = "checked"
        default_deleteIcon = "deleted"

    }else{
        default_checkBox = "check_box_outline_blank";
        default_show = "show"
    }

    if(check == false){
        default_deleteIcon = ""
    }
    insert = `<li class="main_ul-li fs ${default_show}">
                        <i class="fa fa-remove icon ${default_deleteIcon}" job="remove" id="${id}" ></i>
                        <p class="main_ul-li_p">${inputValue}</p>
                        <i class="fa material-icons icon" job="check" id="${id}">${default_checkBox}</i>
                        <div class="created_time"></div>
                        <div class="main_ul-time">
                            <p>: ثبت شده در </p>
                            <div class="pp">
                                <span class="main_ul-li_p-time" >${time} : ساعت</span>
                                <span class="main_ul-li_p-time" >تاریخ : ${date}</span>
                            </div>
                        </div>
                    </li>`;

    position = "beforeend";

    ul.insertAdjacentHTML(position,insert)
}
// ------------------------------------------------------------------------------------------------------------

// زمانی که کلید کیبورد فشرده شده باشه
document.addEventListener("keyup",function(e){
// ----------

// اکر کلیدی که فشرده شده باشه "اینتر" باشه

    if(e.keyCode == 13){
// --------

// گرفتن متن های کیبورد با حداقل 0 کاراکتر و تا حداکثر 30 کاراکتر
        inputValue = input.value.substr(0,30)
// -------

// فارسی کردن عدد های اینپوت
        inputValue = persianJs(inputValue).englishNumber().toString();
// --------

    if(inputValue){
        
        let date =  time_p.innerHTML
        let time = pTime.innerHTML
        
        addItem(inputValue,date,time,id,false,false)

        LIST.push({
            name : inputValue,
            date : date,
            time : time,
            id : id,
            removed : false,
            check : false
        });

// اگر بخواهیم داده ای وارد فضای ذخیره سازی مرور گر کنیم باید از نوع رشته باشد
// با کد زیر می توانیم داده های آبجکت را به استرینگ تبدیل کنیم
            localStorage.setItem("item",JSON.stringify(LIST))
// -------------
           id++;
            
            showAllItem()
            dataList.value = "نمایش همه"
    }       
           
            input.value = ""
    }
})
//  ------------------------------------------------------------------------------------------------------

main_button.addEventListener("click",function(e){

    inputValue = input.value.substr(0,30)

    inputValue = persianJs(inputValue).englishNumber().toString();

    if(inputValue){
       
        let date =  time_p.innerHTML
        let time = pTime.innerHTML
       
       addItem(inputValue,date,time,id,false,false)

        LIST.push({
            name : inputValue,
            date : date,
            time : time,
            id : id,
            removed : false,
            check : false
        });

        localStorage.setItem("item",JSON.stringify(LIST))
        id++;
        showAllItem()
        dataList.value = "نمایش همه"
      
        input.value = ""
    }
})

// نمایش تمام داده ها
function showAllItem(){
    let li = document.querySelectorAll("li");
    Array.prototype.forEach.call(li,function(item){
        item.style.display = "block"

    })
}
// ----------------------------------------------------------------------------------------------------------

// پنهان کردن آیتم هایی که "چک" نیستن
function clearShowItem(){
    showAllItem()
    let li_show = document.querySelectorAll("li.show");
    Array.prototype.forEach.call(li_show,function(item){
        item.removeAttribute("style");
        item.setAttribute("style","display:none");
    })
}
// ----------------------------------------------------------------------------------------------------------

// پنهان کردن آیتم هایی که "چک" هستن
function clearCheckedItem(){
    showAllItem()
    let li_checked = document.querySelectorAll("li.checked");
    Array.prototype.forEach.call(li_checked,function(item){
        item.removeAttribute("style");
        item.setAttribute("style","display:none");
        // item.querySelector(".fa-remove").style.display = "none"
    })
}
// ----------------------------------------------------------------------------------------------------------
function changed(){
    let dataList = document.querySelector("#dataList").value

    if(dataList == "نمایش همه"){
        showAllItem()
    }
    else if(dataList == "انجام شده"){
        showAllItem()
        clearShowItem()
    }
    else if(dataList == "انجام نشده"){
        showAllItem()
        clearCheckedItem()
    }

}
// ----------------------------------------------------------------------------------------------------------

ul.addEventListener("click",function(e){

    var event = e.target;
    var eventTarget = event.attributes.job.value;
    
// اگر روی دکمه چک کلیک شده بود
    if(eventTarget == "remove"){
        removeLI(event)
    }
// ----------

// اگر روی دکمه چک کلیک شده بود
    else if(eventTarget == "check"){
        checkedLI(event)
    }
// -----------

// اگر روی هر کدام از این دو کلیک کرد داده هارا به محل ذخیره سازی داده ها در مرورگر ارسال کند 
// یه جورایی کار همگام سازی را انجام میدهد
    localStorage.setItem("item",JSON.stringify(LIST))
// ----------
})
// ---------------------------------------------------------------------------------------------------

// اگر روی آیکون حذف کلیک کرد
function removeLI(event){
    event.parentNode.parentNode.removeChild(event.parentNode)
    LIST[event.id].removed = true;
}
// ----------------------------------------------------------------------------------------------------------

// اگر روی آیکون "چک" کلیک کرد 
function checkedLI(event){

    eventParent = event.parentNode;
    eventParent.classList.toggle("checked");
    eventParent.classList.remove("show");

    LIST[event.id].check =  LIST[event.id].check ? false : true

// اگر روی آیکون چک کلیک کرد و این آیکون از قبل چک نشده بود 
    if(LIST[event.id].check == false){
        position = "afterbegin";
        text = `<i class="fa fa-remove icon" job="remove"></i>`
        event.parentNode.insertAdjacentHTML(position,text);
    }
// ------------

    if(event.innerHTML == "check_box"){
     
        event.innerHTML = "check_box_outline_blank";

// اگر از قبل آیکون حذف وجود داشت آیکن جدید نسازد و اگر نداشت یکی بسازد
            if(isNaN(event.parentNode.querySelector(".fa-remove")) != true){

                position = "afterbegin";
                text = `<i class="fa fa-remove icon" job="remove"></i>`
                event.parentNode.insertAdjacentHTML(position,text);

            }
// ----------------------------------------------------------------------------------------------------------
        if(eventParent.className = "main_ul-li fs checked"){
            eventParent.className = "main_ul-li fs show"
        }
    }else{
// اگر روی چک باکس غیر فعال کلیک کرد
// باید آیکون چک باکس فعال را نمایش دهد و
        event.innerHTML = "check_box";
// ----------

// آیکون "حذف آیتم" را حذف کند
        event.parentNode.removeChild(event.parentNode.querySelector(".fa-remove"))
// ----------
    }
}
// ------------------------------------------------------------------------------------------------------------