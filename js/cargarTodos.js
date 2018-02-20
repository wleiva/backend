function cargar(){

    $.ajax({
        url:   'data-1.json', 
        type:  'post', 
        dataType: "json",
        success:  function (data) {
            console.log(data)
            var obj = data
            var employee = '';
            var x = "x";
            var selectCiudadp = document.getElementById("selectCiudad");
            var ciudadp = selectCiudadp.value;
            var selectTipop = document.getElementById("selectTipo");
            var tipop = selectTipop.value;
            var rango = document.getElementById("rangoPrecio");//////
            var rangop = rango.value;
            var separador = ";";
            var arregloRango = rangop.split(separador); 
            
            $(".itemMostrado").remove(); 
            $.each(obj, function(key, value) {
             
          
            var separador = ("$")
            var coma = (",")
            var precio2 = value.Precio.split(separador);
            var valor = precio2[1];
            var precio3 = valor.split(coma);
            var res = precio3[0] + precio3[1];
          
            if (tipop != value.Tipo || ciudadp != value.Ciudad ) {
            
               if (ciudadp == value.Ciudad && tipop == x   ) { 
                
            
              if (res >= arregloRango[0] && res <= arregloRango[1]) {
                employee += "<div class='itemMostrado card'>";
                employee += "<img src='img/home.jpg' alt='Demo'>";
                employee += "<div class='card-stacked'>";
                employee += "<strong>Dirección: </strong>" + value.Direccion +"</br>";
                employee += "<strong>Ciudad: </strong>" + value.Ciudad +"</br>";
                employee += "<strong>Telefono: </strong>" + value.Telefono +"</br>";
                employee += "<strong>Codigo: </strong>" + value.Codigo_Postal +"</br>";
                employee += "<strong>Tipo: </strong>" + value.Tipo +"</br>";
                employee += "<strong>Precio: </strong><span class='precioTexto'>" + value.Precio +"</span></br>";
                employee += "<div class='card-action'>VENTAS</div>";
                employee += "</div>";
                employee += "</div>";
                console.log(value.Id);
                console.log("entra a 1") ;
                }
                
               }
               
               else if(tipop == value.Tipo && ciudadp == x){
           
                if (res >= arregloRango[0] && res <= arregloRango[1]) {
                    employee += "<div class='itemMostrado card'>";
                    employee += "<img src='img/home.jpg' alt='Demo'>";
                    employee += "<div class='card-stacked'>";
                    employee += "<strong>Dirección: </strong>" + value.Direccion +"</br>";
                    employee += "<strong>Ciudad: </strong>" + value.Ciudad +"</br>";
                    employee += "<strong>Telefono: </strong>" + value.Telefono +"</br>";
                    employee += "<strong>Codigo: </strong>" + value.Codigo_Postal +"</br>";
                    employee += "<strong>Tipo: </strong>" + value.Tipo +"</br>";
                    employee += "<strong>Precio: </strong><span class='precioTexto'>" + value.Precio +"</span></br>";
                    employee += "<div class='card-action'>VENTAS</div>";
                    employee += "</div>";
                    employee += "</div>";
                    console.log("entra a 2") ;  
               }
             }
         }    
           
           if (tipop == value.Tipo && ciudadp == value.Ciudad) {
        
        if (res >= arregloRango[0] && res <= arregloRango[1]) {
            employee += "<div class='itemMostrado card'>";
            employee += "<img src='img/home.jpg' alt='Demo'>";
            employee += "<div class='card-stacked'>";
            employee += "<strong>Dirección: </strong>" + value.Direccion +"</br>";
            employee += "<strong>Ciudad: </strong>" + value.Ciudad +"</br>";
            employee += "<strong>Telefono: </strong>" + value.Telefono +"</br>";
            employee += "<strong>Codigo: </strong>" + value.Codigo_Postal +"</br>";
            employee += "<strong>Tipo: </strong>" + value.Tipo +"</br>";
            employee += "<strong>Precio: </strong><span class='precioTexto'>" + value.Precio +"</span></br>";
            employee += "<div class='card-action'>VENTAS</div>";
            employee += "</div>";
            employee += "</div>";
            console.log("entra a 3") ; 
                 } 
               } 

               if (tipop == x && ciudadp == x) {
         
            if (res >= arregloRango[0] && res <= arregloRango[1]) {
                employee += "<div class='itemMostrado card'>";
                employee += "<img src='img/home.jpg' alt='Demo'>";
                employee += "<div class='card-stacked'>";
                employee += "<strong>Dirección: </strong>" + value.Direccion +"</br>";
                employee += "<strong>Ciudad: </strong>" + value.Ciudad +"</br>";
                employee += "<strong>Telefono: </strong>" + value.Telefono +"</br>";
                employee += "<strong>Codigo: </strong>" + value.Codigo_Postal +"</br>";
                employee += "<strong>Tipo: </strong>" + value.Tipo +"</br>";
                employee += "<strong>Precio: </strong><span class='precioTexto'>" + value.Precio +"</span></br>";
                employee += "<div class='card-action'>VENTAS</div>";
                employee += "</div>";
                employee += "</div>"; 
                console.log("entra a 4") ; 
               }  
            }            
        });
                   $("#ok").append(employee);
                   
               }
           });
}



function parametros(){

    $.ajax({
        url:   'data-1.json', 
        type:  'post', 
        dataType: "json",
        success:  function (data) {
            console.log(data)
            var obj = data
            var employee = '';
            $(".itemMostrado").remove();
            $.each(obj, function(key, value) {             
                employee += "<div class='itemMostrado card'>";
                employee += "<img src='img/home.jpg' alt='Demo'>";
                employee += "<div class='card-stacked'>";
                employee += "<strong>Dirección: </strong>" + value.Direccion +"</br>";
                employee += "<strong>Ciudad: </strong>" + value.Ciudad +"</br>";
                employee += "<strong>Telefono: </strong>" + value.Telefono +"</br>";
                employee += "<strong>Codigo: </strong>" + value.Codigo_Postal +"</br>";
                employee += "<strong>Tipo: </strong>" + value.Tipo +"</br>";
                employee += "<strong>Precio: </strong><span class='precioTexto'>" + value.Precio +"</span></br>";
                employee += "<div class='card-action'>VENTAS</div>";
                employee += "</div>";
                employee += "</div>";
                console.log(value.Id)
                console.log("entra a todos") ;
            });
                   $("#ok").append(employee);
               }
           });
}