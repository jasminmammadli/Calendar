const dates = document.querySelector(".dates")
const weekDays = document.querySelector(".weekDays")
const monthDays = document.querySelector(".monthDays")
const monthButton=document.querySelector(".monthButton")

let today=new Date()
let newDate = new Date()
const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
const a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

let days = ""
for (let item of daysOfWeek) {
    days += `<div>${item[0].toUpperCase() + item.slice(1, 3)}</div>`
}
weekDays.innerHTML = days



function writeDays() {
    let firstDayOfMonth = new Date(newDate.getFullYear(), newDate.getMonth(), 1).getDate()
    let lastDayOfMonth = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate()
    let kod = ""
    dates.innerHTML = `
                <button onclick="backDate()">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <div>
                    <h1>${months[newDate.getMonth()].toUpperCase()}</h1>
                    <p>${daysOfWeek[newDate.getDay()][0].toUpperCase() + daysOfWeek[newDate.getDay()].slice(1)}, ${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()}</p>
                </div>
                <button onclick="nextDate()">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
                `
    let num = a.indexOf(new Date(newDate.getFullYear(), newDate.getMonth(), 1).toDateString().split(" ")[0])
    for (let i = 0; i < num; i++) {
        kod += `<div></div>`
    }
    for (let i = firstDayOfMonth; i <= lastDayOfMonth; i++) {
        if (i == today.getDate() && newDate.getFullYear()==today.getFullYear() && newDate.getMonth()==today.getMonth()) {
            kod += `<div class="currentDay">${i}</div>`
        } else {
            kod += `<div>${i}</div>`
        }
    }
    monthDays.innerHTML = kod
}
writeDays()

function backDate() {
    newDate = new Date(newDate.getFullYear(), (newDate.getMonth == 0 ? newDate.getFullYear() - 1 : newDate.getMonth() - 1))
    writeDays()
    document.querySelectorAll("input").forEach(item=>item.checked=false)

}
function nextDate() {
    newDate = new Date(newDate.getFullYear(), newDate.getMonth() + 1)
    writeDays()
    document.querySelectorAll("input").forEach(item=>item.checked=false)
}

let btnKod=""
for(let i=0;i<months.length;i++){
    btnKod+=`
            <div>
                <label for="${months[i]}">${months[i][0].toUpperCase()+months[i].slice(1,3)}</label>
                <input type="radio" name="btn" id="${months[i]}" oninput="changeMonth(event)" />
            </div>
            `
}
monthButton.innerHTML=btnKod

function changeMonth(e){
    newDate=new Date(`${newDate.getFullYear()},${e.target.id}`)
    writeDays()
}