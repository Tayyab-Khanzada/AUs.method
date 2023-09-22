// let a = [100, 22 ,43, 23,50]
// let b = a.every(adultAge)

// function adultAge(age){
//     return age >= 22

// }
// document.write(b)


// let b = prompt( "Enter your name")

// document.write(b)


// let a = [100, 22 ,43, 23,50]

// let c = a.push(25,40)
// document.write(c)
//  function increaseChar(x){
// var increaseChar = x.value.length;
// if(increaseChar >= 10){
//     var length = increaseChar + "ch"
//     x.style.width = length;
// }

//  }


var index = 0;
var colors = ["red,", "Green", "blue", "pink", "orange", "Gray", "aqua"]

function changeC(){
    document.getElementsByTagName("body")[0].style.background =colors[index++]
     if(index > colors.length -1 )
     index = 0;
}





