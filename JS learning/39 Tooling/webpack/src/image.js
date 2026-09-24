 import tshirt from './t-shirt.jpg'

 function add_image(){
    const img=document.createElement('img');
    img.src=tshirt;
    const body=document.querySelector('body')
    body.append(img);
}

export default add_image;