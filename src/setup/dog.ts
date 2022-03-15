import {ref} from "vue";

export function dog (){
    const color = ref('黄')
    function eat (){
        color.value = '灰'
    }
    return {
        eat,
        color
    }

}
