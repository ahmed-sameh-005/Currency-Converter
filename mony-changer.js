let dollar=document.getElementById('dollar');
let pound=document.getElementById('pound');
let box=document.getElementById('the-converter');
let innerHeader=document.getElementById('converter-title');

dollar.onkeyup=function(){
    pound.value=dollar.value*48.13;
}
pound.onkeyup=function(){
    dollar.value=pound.value/48.13;
}

//style
document.body.style.textAlign='center';
document.body.style.backgroundColor='#cd7a7aff';
box.style.backgroundColor='#8c3030ff';
box.style.padding='20px';
box.style.width='300px';
box.style.borderRadius='10px';
box.style.display='inline-block';
box.style.boxShadow='0 0 20px black';
innerHeader.style.backgroundColor='#e4dd03b0';
innerHeader.style.padding='10px';
innerHeader.style.borderRadius='10px';
innerHeader.style.boxShadow='0 0 10px black';

