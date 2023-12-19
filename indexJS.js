// Author: CabaCrD

/*******************************************************   CLASES   *******************************************************/

/**************************** CLASE PARA ALMACENAR TRABAJADORES ****************************/

class Trabajador{
	
	constructor(dni, nombre, apellidos, fechaInco, puesto, salarioAnual, poblacion){
		
		this.dni = dni;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.fechaInco = fechaInco;
		this.puesto = puesto;
		this.salarioAnual = salarioAnual;
		this.poblacion = poblacion;
		
	}
}
	
/**************************** CLASE PARA ALMACENAR EMPRESAS ****************************/

class Empresas{
	
	constructor(nomComercial, cif, direccion, telefono, administrador){
		
		this.nomComercial = nomComercial;
		this.cif = cif;
		this.direccion = direccion;
		this.telefono = telefono;
		this.administrador = administrador;
		this.empleados = [];
		
	}
	
/************************************ ESTA FUNCION AGREGARA TRABAJADORES ************************************/

	AgregarTrabajador(dni, nombre, apellidos, fechaInco, puesto, salarioAnual, poblacion){
		
		var trabajador = new Trabajador (dni, nombre, apellidos, fechaInco, puesto, salarioAnual, poblacion);
		
		this.empleados.push(trabajador);	
	}
	
/*********************************************** ACTUALIZACION ***********************************************/	
       /******************************** ESTA FUNCION AGREGARA EMPRESAS ********************************/
       
	
	
/********* ESTA FUNCION COMPROBARA QUE EXISTAN TRABAJADORES EN ESA EMPRESA *********/

   listadoDeTrabajadores(pide_empresa) {
     var encontrado = false;
     var arrayEmpleados = [];
  
     for (var i = 0; i < this.empleados.length; i++) {//BUCLE PARA RECORRER EL ARRAY
       if (this.empleados[i].nomComercial === pide_empresa) {//SI LA EMPRESA COINCIDE
         arrayEmpleados.push(this.empleados[i]);//MANDA EL ARRAY CON LOS EMPLEADOS DE LA EMPRESA
         encontrado = true;
       }
      }
  
      if (encontrado) {//SI SE ENCONTRO..
		  
        return arrayEmpleados;//NOS DEVUELCE EL ARRAY
        
      }else{
		      
    return null;//NOS DEVUELCE NULO
    
    }
    }
    
/********* ESTA FUNCION DESPEDIRA A UN EMPLEADO *********/
		
    ceseTrabajador(pide_dni){
		
	 var encontrado = false;
     var arrayEmpleados = this.empleados;
  
     for (var i = 0; i < this.empleados.length; i++) {//BUCLE PARA RECORRER EL ARRAY
       if (this.empleados[i].dni === pide_dni) {
         arrayEmpleados.splice([i], 1);
         
         encontrado = true;
       }
      }
  
      if (encontrado) {	//SI SE ENCONTRO..
		  	  
        return true; //NOS DEVUELVE UN TRUE 
           
      }else{	
		  	
		 alert("No se pudo despedir al empleado ");   
		           
          return null;//NOS DEVUELCE NULO
    }
    
    }
    
/********* ESTA FUNCION CAMBIARA DE PUESTO A UN EMPLEADO *********/  
	
	CambioPuesto(pide_dni, nuevoPuesto){
		
     var encontrado = false;
  
     for (var i = 0; i < this.empleados.length; i++) {//BUCLE PARA RECORRER EL ARRAY
       if (this.empleados[i].dni === pide_dni) {//SI COINCIDE EL DNI
         this.empleados[i].puesto = nuevoPuesto;//SOBREESCRIBIMOS EL PUESTO
         encontrado = true;
       }
      }
  
      if (encontrado) {	//SI SE ENCONTRO..
		  	  
        return true;  //NOS DEVUELVE UN TRUE
           
      }else{		
		  
		  alert("No se cambió el puesto");   
		          
          return null;//NOS DEVUELCE NULO
    }
    
    }
	
    } //LLAVE FINAL
