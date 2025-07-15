let count = 0;

function add(){
    count++
}
function minus(){
    if (count !== 0) {
        count--
    }
}
function getCount(){
    return count
}

export {add, minus, getCount}