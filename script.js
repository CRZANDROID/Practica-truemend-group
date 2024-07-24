document.getElementById('toggle Options').addEventListener('click', function(){
    var options= document.getElementById('options');
    if (options.style.display === 'none' || options.style.display === ''){
        options.style.display= 'block';
    }else{
        options.style.display = 'none';
    }
});

document.getElementById('showName').addEventListener('click',function(){
    var name= document.getElementById('nameInput').value;
        alert('Tu nombre es: '+ name);
});

document.getElementById('showImageText').addEventListener('click',function(){
    var imagenContainer = document.getElementById('imagenContainer');
    var exampleImage = document.getElementById('exampleImage');
    exampleImage.src ='https://cdn.shopify.com/s/files/1/0108/0043/1167/files/WhatsAppImage2024-05-10at12.35.33PM.jpg?v=1715366177';

    imagenContainer.style.display = 'block';
});

window.onclick = function(event){
    if(!event.target.matches('#toggleOptions')){
        var dropdowns = document.getElementsByClassName ('dropdown-content');
            for (var i = 0; i< dropdowns.length;i++){
                var openDropdown = dropdowns[i];
                if(openDropdown.style.display === 'block'){
                    openDropdown.style.display='none';
                }
            }
    }
}