import { ref } from "vue";

const count = ref(0)

function add(){
    count.value++
}
function minus(){
    if (count.value !== 0) {
        count.value--
    }
}

export {add, minus, count}