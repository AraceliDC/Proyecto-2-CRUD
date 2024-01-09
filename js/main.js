function validateData(){
    let nombre= document.getElementById('inputNombre').value;
    let email= document.getElementById('inputCorreo').value;
    let numero = document.getElementById('inputNumero').value;

    if (nombre == ""){
        alert("Ingrese un nombre");
        return false;
    }
    if (email == "" || !email.includes('@')){
        alert("Ingrese un correo valido");
        return false;
    }
    if(numero == ""){
        alert("Ingrese un telefono");
        return false;
    }
    return true;
}

function addData(){
    if (validateData() == true){
        let nombre= document.getElementById('inputNombre').value;
        let email= document.getElementById('inputCorreo').value;
        let numero = document.getElementById('inputNumero').value;
        

        let listPeople;
        if (localStorage.getItem('listPeople') == null){
            listPeople = [];
        } else {
            listPeople = JSON.parse(localStorage.getItem('listPeople'))
        }

        listPeople.push({
            nombre: nombre,
            email: email,
            numero: numero
        });
        localStorage.setItem('listPeople', JSON.stringify(listPeople));

        showData();
    
        clearData();
    }
}

function showData(){
    let listPeople

    if (localStorage.getItem('listPeople') == null){
        listPeople = [];
    } else {
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    let html = "";
    listPeople.forEach(function (element, index){
        html += "<tr>"
        html += "<td>" + element.nombre + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.numero + "</td>";
        html += '<td><button onclick="updateData(' + index + ')" class="btn btn-outline-primary">Editar</button> <button onclick="deleteData(' + index + ')" id="btnDelete" class="btn btn-outline-danger">Eliminar</button> </td>';
        html += "</tr>";
    })
    document.querySelector('#tableData tbody').innerHTML = html;
}
document.onload = showData();

function clearData(){
    document.getElementById('inputNombre').value="";
    document.getElementById('inputCorreo').value="";
    document.getElementById('inputNumero').value="";
}
function people(){
    let listPeople
    if (localStorage.getItem('listPeople') == null){
        listPeople = [];
    } else {
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }
    return listPeople;
}
function deleteData(index){
    let listPeople = people();
    listPeople.splice(index, 1);
    localStorage.setItem('listPeople', JSON.stringify(listPeople));
    showData();
}

function updateData(index){
    document.getElementById("btnAdd").style.display = 'none';
    document.getElementById("btnDelete").style.display = 'none';
    document.getElementById("btnUpdate").style.display = 'block'; 

    btnDelete

    let listPeople = people();

    document.getElementById('inputNombre').value = listPeople[index].nombre;
    document.getElementById('inputCorreo').value = listPeople[index].email;
    document.getElementById('inputNumero').value = listPeople[index].numero;

    document.querySelector("#btnUpdate").onclick = function(){
        if (validateData() == true){
            listPeople[index].nombre = document.getElementById('inputNombre').value;
            listPeople[index].email = document.getElementById('inputCorreo').value;
            listPeople[index].numero = document.getElementById('inputNumero').value;

            localStorage.setItem('listPeople', JSON.stringify(listPeople));

            showData();

            clearData();

            document.getElementById("btnAdd").style.display = 'block';
            document.getElementById("btnDelete").style.display = 'block';
            document.getElementById("btnUpdate"&& btnAdd).style.display = 'none';
        }
    }
}