import {ref} from "vue";

export function cat ():Function{
    const color = ref('白')
    function eat ():Function{
        color.value = '黑'
    }
    return {
        eat,
        color
    }
}
