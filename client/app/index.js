var campos = [
    document.querySelector('#data'), 
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]; 

var tbody = document.querySelector('table tbody'); 

document.querySelector('.form').addEventListener('submit', function(event){
    
    var tr = document.createElement('tr');

    campos.forEach(function(campo){

        event.preventDefault();
        
        var td = document.createElement('td');     
        td.textContent = campo.value;  
        tr.appendChild(td);

    });

    var tdVolume = document.createElement('td'); 
    tdVolume.textContent = campos[1].value * campos[2].value; 
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = '';
    campos[2].value = '';

    campos[0].focus();

}); 

