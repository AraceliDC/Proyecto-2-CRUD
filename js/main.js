function validarForm(){
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let comentario = document.getElementById('comentario').value;

    if (nombre == "" ){
        alert("Ingrese su nombre");
        return false
    }
    else if (!email.includes('@')){
        alert("El correo no es valido");
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
            comentario: comentario  
        });

        localStorage.setItem('listpeople', JSON.stringify(listpeople))

        showdata();

        cleardata();
        }
    
}

function cleardata(){
    document.getElementById('nombre').value = "";
    document.getElementById('email').value = "";
    document.getElementById('comentario').value = "";
}

function showdata(){
    let listpeople;
    if (localStorage.getItem('listpeople') == null){
        listpeople = [];
    }
    else {
        listpeople = JSON.parse(localStorage.getItem('listpeople'));
    }

    let html = "";
    listpeople.forEach(function (element, index){
        html +="<tr>";
        html +="<td>" + element.nombre + "</td>";
        html +="<td>" + element.email + "</td>";
        html +="<td>" + element.comentario + "</td>";
        html +='<td><button onclick="updateData(' + index + ')" style=" font-size: 12pt; padding: 10px; border-radius: 8px; background-color: #C28F47; border: hidden; color: white;">Actualizar</button> <button onclick="deleteData(' + index + ')" id="btndelete" style=" font-size: 12pt; padding: 10px; border-radius: 8px; background-color: #39131D; border: hidden; color: white;">Eliminar</button></td>';
        html +="</tr>";
    })

    document.querySelector('#tableData tbody').innerHTML=html;
}

document.onload = showdata();

function deleteData(index){
    let listpeople
    if (localStorage.getItem('listpeople') == null) {
        listpeople = [];
    } else {
        listpeople = JSON.parse(localStorage.getItem('listpeople'));
    }

    listpeople.splice(index, 1);

    localStorage.setItem('listpeople', JSON.stringify(listpeople));
    showData();
}

function updateData(index){
    document.getElementById("btnadd").style.display='none';
    document.getElementById("actualizar", btnadd).style.display='block';
    document.getElementById("btndelete").style.display='none';
    btndelete

    let listpeople;

    if(localStorage.getItem('listpeople')== null){
        listpeople = [];
    }
    else{
        localStorage= JSON.parse(localStorage.getItem('listpeople'));
    }

    document.getElementById('nombre').value=listpeople[index].nombre;
    document.getElementById('email').value=listpeople[index].email;
    document.getElementById('comentario').value=listpeople[index].comentario;

    document.querySelector("#actualizar").onclick = function(){
        if (validarForm == true){
            listpeople[index].nombre=document.getElementById('nombre').value;
            listpeople[index].email=document.getElementById('email').value;
            listpeople[index].comentario=document.getElementById('comentario').value;

            localStorage.setItem('listpeople', JSON.stringify(listpeople));

            showdata()

            cleardata()

            document.getElementById("btnadd").style.display='block';
            document.getElementById("actualizar").style.display='none';
            document.getElementById("btndelete").style.display='block';
        }

    }
}