import {ref,onMounted} from 'vue';

// Composable: fetch data from a URL on mount.
// Returns reactive loading, error, data, and a reload function.
export function use_fetch(url){
    const data=ref(null)
    const loading=ref(true)
    const error=ref('')

    async function load() {
        loading.value=true
        error.value=''

        try{
            const response=await fetch(url)
            if(!response.ok){
                throw new Error(`HTTP ${response.status}`)
            }
            const json=await response.json()
            data.value=json
        }catch(err){
            error.value=err.message || "Failed to load"
        }finally{
            loading.value=false
        }   
    }

    onMounted(load)
    return{
        data,
        loading,
        error,
        reload:load,
    }
}