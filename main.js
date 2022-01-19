// FINALIZA LA COMPRA SE RECARGA LA PAGINA
function finalizarCompra() {
    alert("¡En hasta 6 cuotas sin interés en todo el sitio!") 
    
}
function tarjetaCredito() {
    alert("¡Visa, Mastecard, Maestro y Cabal!") 
    
}

function efectivo() {
    const producto = prompt('¿quiere pagar en efectivo')
 


function compra() {

    let compraProducto = producto;

    switch (producto.toLowerCase()) {
        case 'si':
                
            alert('genial');
                
                let detalleCuenta = prompt ('¿tiene una cuenta en mercado pirata? ');

                detalleCompra = detalleCuenta.toLowerCase();

                if ( detalleCuenta == 'si') {

                    function detalleValor() {

                        console.log('Puedes ir a realizar el pago');
                        alert('Puedes ir a realizar el pago');
                        
                    }
                    
                    detalleValor();

                } 
                else if (detalleCuenta == 'no'){
                    function detalleValor(){
                        console.log('usuario no identificado')
                        alert('Necesitamos que se regristre para seguir con su operacion')
                    }
                    detalleValor()
                }
                
                else {

                    console.log('Ponga la opcion de si o no ');
                    alert('Ponga la opcion de si o no');

                }
                
            break;
        case 'no':
            alert('Tenemos otros medios de pago');
                 break;
    
        default:
            alert('Ponga la opcion de si o no ');

            break;
        }

    return compraProducto
    
}

compra();
}


//arrays
class Articulo {
    constructor(articulo) { 
        this.articulo = articulo;
        this.contrasenia = contrasenia
         
    }
    
}

const articulos = [];

function ingresar() {

    do{
    
        articulo = prompt('Ingrese su nombre de usuario')
    
        contrasenia = prompt('Ingrese su contraseña')

        alert('Bienvenido')

        articulos.push(articulo)
    
    }while ( articulo == '' || articulo == null || !isNaN(articulo))
}

ingresar();

console.log(articulos);

console.log(articulos[0]);

