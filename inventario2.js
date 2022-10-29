export default class InventarioListaEnlazadaDoble{
    constructor(){
        this.inicio = null;
        this.tamaño = 0;
    }

    //Agregar producto con listas enlazadas dobles
    agregar(nuevo){
        if(this.inicio === null){
            this.inicio = nuevo;
        }else{
            let aux = this.inicio;
            while(aux.siguiente != null){
                aux = aux.siguiente;
            }
            aux.siguiente = nuevo;
            nuevo.anterior = aux;
        }
        this.tamaño++;
    }

    //¿como eliminar un producto con listas enlazadas dobles?
    eliminarPorCodigo(codigo) {
        let aux = this.inicio;
        let siguiente = null;
        let anterior = null;
        while (aux != null) {
          if (aux.codigo === codigo) {
            if (aux.anterior === null) {
              this.inicio = aux.siguiente;
              aux.siguiente.anterior = null;
            } else {
              aux.anterior.siguiente = aux.siguiente;
              aux.siguiente.anterior = aux.anterior;
            }
            this.tamaño--;
            return true;
          }
          aux = aux.siguiente;
        }
        return false;
    }
    //busqueda por codigoo en lista enlazada doble
    buscarPorCodigo(codigo) {
        let aux = this.inicio;
        let cadena = '';
        while (aux) {
            if (aux.codigo === codigo) {
                cadena = `<div class="card text-center  Tb.4">
                <div class="card.body">
                    <strong>Producto</strong>: ${aux.nombre}
                    <strong>Codigo</strong>: ${aux.codigo}
                    <strong>Cantidad</strong>: ${aux.cantidad}
                    <strong>Costo</strong>: ${aux.costo}
                </div>
            </div>
            ` + cadena;
                return cadena;
            }
            aux = aux.siguiente;
        }
        return cadena;
    }
    //lista de inventario lista enlazda doble 
    
    listarInventario(){
        let aux = this.inicio;
        let cadena = '';
        while(aux){
            cadena += `<div class="card text-center  Tb.4">
                <div class="card.body">
                    <strong>Producto</strong>: ${aux.nombre}
                    <strong>Codigo</strong>: ${aux.codigo}
                    <strong>Cantidad</strong>: ${aux.cantidad}
                    <strong>Costo</strong>: ${aux.costo}
                </div>
            </div>
            `;
            aux = aux.siguiente;
        }
        return cadena;
    }

    listarInverso() {
        let aux = this.inicio;
        let cadena = '';
        while (aux) {
            cadena = `<div class="card text-center  Tb.4">
                <div class="card.body">
                    <strong>Producto</strong>: ${aux.nombre}
                    <strong>Codigo</strong>: ${aux.codigo}
                    <strong>Cantidad</strong>: ${aux.cantidad}
                    <strong>Costo</strong>: ${aux.costo}
                </div>
            </div>
            ` + cadena;
            aux = aux.siguiente;
        }
        return cadena;
    }

}