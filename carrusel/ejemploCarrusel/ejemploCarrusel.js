const container = document.getElementById('CarruselContainer');

let articulos = [];

for (let i = 0; i < 4; i++) {
    articulos[i] = document.createElement('img');
    articulos[i].src = `assets/carrusel${i}.webp`;
}


const miCarrusel = new Carrusel(container, articulos);