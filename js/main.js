function validarForm(){
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let tipo = document.getElementById('tipo').value;
    let comentario = document.getElementById('comentario').value;

    if (nombre == "" ){
        alert("Ingrese su nombre");
        return false
    }
    else if (!email.includes('@')){
        alert("El correo no es valido");
        return false
    }
    else if (tipo.length<1){
        alert("Elija una opción");
        return false
    }
    else if (comentario == ""){
        alert("Ingrese un comentario");
        return false
    }
    return true;
};

function addData(){
    if (validarForm() == true){
        let nombre = document.getElementById('nombre').value;
        let email = document.getElementById('email').value;
        let tipo = document.getElementById('tipo').value;
        let comentario = document.getElementById('comentario').value;

        let listpeople;
        if (localStorage.getItem('listpeople') == null){
            listpeople = [];
        }
        else {
            listpeople = JSON.parse(localStorage.getItem('listpeople'));
        }
        listpeople.push({
            nombre: nombre,
            email: email,
            tipo: tipo,
            comentario: comentario  
        });

        localStorage.setItem('listpeople', JSON.stringify(listpeople))

        showdata();

        cleardata()
        }
    
}

function cleardata(){
    document.getElementById('nombre').value = "";
    document.getElementById('email').value = "";
    document.getElementById('tipo').value = "";
    document.getElementById('comentario').value = "";
}

function showdata(){
    
}