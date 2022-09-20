const peliculas = require("./movies");

const valor = process.argv[2]

let moviesDH = {
    listMovies(){
        let resultado = peliculas.map()

        return resultado
        /* Testeo de resultado
        peliculas.forEach(peli => {
            console.log(peli.title , "-" , peli.genre + " - $" +peli.price)
        });
        */    
    },
    searchMovie(dato){
        let resultado = peliculas.filter(peli => peli.id == dato || peli.title == dato)
        if(resultado!==null){
            /*resultado.forEach(peli =>{
                console.log(peli)
            })*/
            return resultado
        }
        else return null
    },
    searchMoviesByGenre(dato){
        let resultado = peliculas.filter(peli => peli.genre == dato)
        if(resultado.length>0){
            /*resultado.forEach(peli =>{
                console.log(peli)
            })*/
            return resultado
        }
        else return null
    },
    totalPrice(){
        let resultado = peliculas.reduce((total,peli) => total + peli.price,0);
        //console.log(resultado)
        return resultado

    },
    changeMovieGenre(id, newG){
        let resultado = this.searchMovie(id)
        //console.log(resultado)
        if(resultado!==null){
            resultado[0].genre = newG
            return resultado
        }
        else console.log("No Existe la Pelicula")
        
    }
}

//moviesDH.changeMovieGenre(1,"Animación")
//moviesDH.totalPrice()
//moviesDH.searchMoviesByGenre(valor)
//moviesDH.searchMovie(valor)