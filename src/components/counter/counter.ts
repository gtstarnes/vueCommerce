import { ref } from "vue";

const count = ref(0);

function add(){
    count.value++
}
function minus(){
    if (count.value !== 0) {
        count.value--
    }
}
function getCount():number{
    return count.value
}

export {add, minus, getCount}