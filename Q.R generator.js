
let img=document.getElementById('img');

qr=document.getElementById('qr');

generateQr=(url)=>{
    img.src=url;
img.addEventListener('load',function(){

qr.classList.add('show');
console.log('added')
})
}

document.getElementById('button').addEventListener('click',function(){
    let text=document.getElementById('Text').value;
    let Url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`

generateQr(Url);
console.log(Url);
})

let text=document.getElementById('Text')
text.addEventListener('keyup',function(){
    qr=document.getElementById('qr');
    let text=document.getElementById('Text').value
    if(text.trim()){
qr.classList.remove('show')
    }
});