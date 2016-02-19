Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}


angular.module('myApp', ['ngAnimate'])
    .controller('ctrlAnimate', function($scope) {
       /* $http.get('productos.json')
            .then(function(res) {
                $scope.listaProductos = res.data;
                 localStorage.setObj('listaProductos',$scope.listaProductos);
            });*/


        if(localStorage.getObj('listaProductos'))
            $scope.listaProductos=localStorage.getObj('listaProductos');
        else
            $scope.listaProductos=[];

        $scope.agregarProducto = function() {
            $scope.listaProductos.push({
                nombre: $scope.nuevo_producto
            });

            localStorage.setObj('listaProductos',$scope.listaProductos);

            $scope.nuevo_producto = '';
        }

        $scope.eliminarProducto = function() {
            $scope.listaProductos.pop();
             localStorage.setObj('listaProductos',$scope.listaProductos);
        }
});
