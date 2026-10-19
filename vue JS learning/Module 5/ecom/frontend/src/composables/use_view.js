import {ref} from 'vue'

//composable that manages the current view model

export function use_view(){
    //check which functio is active card or list
    const current_view=ref('card')

    //change the view -> validate the input
    function set_view(view_name){
        if(view_name==='card' || view_name==='list'){
            current_view.value=view_name
        }
    }

    return {current_view,set_view}
}