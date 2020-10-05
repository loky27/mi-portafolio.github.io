const cars = [
    {
        id: 1,
        model: 'TIx',
        year: 2021,
        color: 'negro',
        trademark:'acura',
        price:299000,
    },
    {
        id: 2,
        model: 'mobi',
        year: 2020,
        color: 'negro',
        trademark:'fiat',
        price:175400,
    },
    {
        id: 3,
        model: 'x2',
        year: 2021,
        color: 'azul',
        trademark:'bmw',
        price:695000,
    },
    {
        id: 4,
        model: 'xc3',
        year: 2021,
        color: 'balnco',
        trademark:'mazda',
        price:380000,
    },
    {
        id: 5,
        model: 'mx-5',
        year: 2021,
        color: 'negro',
        trademark:'mazda',
        price:406000,
    },
];


let editingcar =false;
function printcars() {
    const titles= document.getElementById("title")
    const head = `<th>modelo</th>
    <th>marca</th>
    <th>año</th>
    <th>color</th>
    <th>precio</th>
    <th>opciones</th>`;
    titles.innerHTML=head;
	const tableBody = document.getElementById(
		"car-table-bodyy"
	);
	tableBody.innerHTML = ''
	cars.forEach((car) => {
		const td = `<tr>
                        <td>
                        ${car.model}
						</td>
						<td>
						${car.trademark}
                        </td>
                        <td>
						${car.year}
						</td>
                        <td>
                        ${car.color}
                        </td>
                        <td>
						${'$'}${car.price}
                        </td>
                        
                        <td>
                        
							<button class="btn btn-danger" onclick="removecar(${car.id})"> 
								Eliminar 
							</button>
						</td>
						<td>
							<button class="btn btn-danger" onclick="editcarButon(${car.id})"> 
								Editar
							</button>
						</td>
					</tr>`;
					//car.id es para encontrar el identificador unico del elemento 
								   //'${car.model}' es para buscaarlo por nombre
		tableBody.innerHTML += td;
    });

}

function submitcar(){
	if(editingcar){
        editcar();
	}
	else{
		addcar();
	}
}
function editcar(){ //esta es la parte que lo edita
    
	const model= document.getElementById('model').value;
    const year= document.getElementById('year').value;
    const color= document.getElementById('color').value;
    const trademark =document.getElementById('trademark').value;
    const price=document.getElementById('price').value;
    editingcar.year =year
    editingcar.model = model
    editingcar.color=color
    editingcar.trademark=trademark
    editingcar.price=price
    printcars();
	editingcar=false;
    model =''
    year =''
    color = ''
    trademark=''
    price=''

}
function editcarButon(id){
	const car = cars.find((car) => car.id === id );
    document.getElementById('model').value = car.model;
    document.getElementById('color').value = car.color;
    document.getElementById('year').value =car.year;
    document.getElementById('trademark').value=car.trademark;
    document.getElementById('price').value=car.price
    editingcar = car;
}
//esta parte e para agregar usuarios
function addcar() {
	const model= document.getElementById('model').value;
    const year= document.getElementById('year').value;
    const color= document.getElementById('color').value;
    const trademark =document.getElementById('trademark').value;
    const price=document.getElementById('price').value;
	//event.preventDefault(); //esta parte previene el refres de la pagina desde el js 

    const newcar ={id: cars.length+1,model: model,year:year,color:color,trademark:trademark,price:price,}
	cars.push(newcar) //estas tres lineas lo que hacen es crear un nuevo objeto
	printcars(); //esta linea imprime usuarios
}
//function removecar(model){
	//esto es para buscar y eleminar por nombre
	//const position=cars.findIndex((car)=>car.model === model);//listo los elementos y de vuelvo la pocion del elemneto deseado
	//cars.splice(position,1)//indicual elemento deseo eliminar
	//printcars();//pinto los usuarios del array completo

//}
function removecar(id){
	//esto es para eleminar mediante el id 
	const position =cars.findIndex((car)=> car.id ===id);
	cars.splice(position,1);
	printcars();
}
printcars();

