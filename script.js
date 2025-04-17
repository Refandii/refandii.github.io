let next1 = document.querySelector('.next-1')
let prev1 = document.querySelector('.prev-1')

next1.addEventListener('click', function(){
    let items = document.querySelectorAll('.item-skills')
    document.querySelector('.slide').appendChild(items[0])
})

prev1.addEventListener('click', function(){
    let items = document.querySelectorAll('.item-skills')
    document.querySelector('.slide').prepend(items[items.length - 1])
})



let next2 = document.querySelector('.next-2')
let prev2 = document.querySelector('.prev-2')

next2.addEventListener('click', function(){
    let items = document.querySelectorAll('.item-ex')
    document.querySelector('.slide-ex').appendChild(items[0])
})

prev2.addEventListener('click', function(){
    let items = document.querySelectorAll('.item-ex')
    document.querySelector('.slide-ex').prepend(items[items.length - 1])
})