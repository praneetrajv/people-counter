//document.getElementById("counter").innerText = 7;

let htmlcounter = document.getElementById("counter")

// let htmlsave = document.getElementById("save")

let saveEl = document.getElementById("save-el")

let count = 0
let total = 0

function increment()
{
    count+=1
    htmlcounter.textContent = count
}

function save()
{
    let countstr = count + " - "
   saveEl.textContent += countstr
   total+=count
   count = 0
   htmlcounter.textContent = 0

}



