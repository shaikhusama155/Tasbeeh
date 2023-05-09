var click = document.getElementById("click")
var count1 = document.getElementById("count")
var reload1 = document.getElementById("reload2")
var count = 0
click.addEventListener("click", function () {
    count++
    count1.textContent = count
    if(count == 33){
        alert("33 done")
    }
    else if(count == 100){
        alert("100 done")
    }
})
function reload() {
    location.reload();
}