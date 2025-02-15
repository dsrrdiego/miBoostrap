const container = document.getElementById('CarruselContainer');

let articulos = [];

for (let i = 0; i <9; i++) {
    articulos[i] = document.createElement('img');
    articulos[i].src = `assets/carrusel${i%8}.webp`;
    articulos[i].style.width='300px'
}


const miCarrusel = new Carrusel(container, articulos);