const content={
    title:'The none',
    message(){
        console.log(this);
    }
}

content.share=function(){
    console.log(this)
}

function Share(channel_title){
    this.chanel_title=channel_title;
    console.log(this);
}

const shar_video=new Share('hello guys');

content.message();