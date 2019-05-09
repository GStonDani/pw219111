const app = new Vue({


el: "#app", 
data: {

titulo: 'Hola mundo con VUE',
fruta: ['Manzana','Peras', 'Platano' , 'Mango' ]
frutas2: [

{nombre: 'Manzana', cantidad: 11},
{nombre: 'Peras', cantidad: 0},
{nombre: 'Platano', cantidad: 80},
{nombre: 'Mango', cantidad: 110},
],
nuevaFruta ''
},
methods: {

	agregarFruta(){



		this.frutas.push(this.nuevaFruta);
		this.frutas2.push({
nombre: this.nuevaFruta,
cantidad: 0


		})
		this.nuevaFruta + '';
	}
},
computed: {
sumarFrutas(){
this.total = 0;
for(fruta of frutas2){


this.total = this.total+fruta.cantidad;

}

return this.total;


}
}

});


