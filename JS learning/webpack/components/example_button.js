import './example_component.scss'

class Example_button{
    render(){
        const button = document.createElement('button');
        button.innerHTML='Press Me!';
        button.classList.add('green-button')
    
        const body=document.querySelector('body')
        body.append(button);
    }
}

export default Example_button;