async function descargarCarrusel() {
    const zip = new JSZip();

    // Agregar archivos al ZIP (puedes modificar las rutas y los nombres de archivo según tu estructura)
    zip.file("index.html", await fetchFile("carrusel/ejemploCarrusel/index.html"));
    zip.file("style.css", await fetchFile("carrusel/ejemploCarrusel/style.css"));
    zip.file("ejemploCarrusel.js", await fetchFile("carrusel/ejemploCarrusel/ejemploCarrusel.js"));

    // Crear una carpeta para las imágenes
    const imgFolder = zip.folder("assets");
    imgFolder.file("carrusel0.webp", await fetchFileAsBlob("carrusel/ejemploCarrusel/assets/carrusel0.webp"));
    imgFolder.file("carrusel1.webp", await fetchFileAsBlob("carrusel/ejemploCarrusel/assets/carrusel1.webp"));
    imgFolder.file("carrusel2.webp", await fetchFileAsBlob("carrusel/ejemploCarrusel/assets/carrusel2.webp"));
    imgFolder.file("carrusel3.webp", await fetchFileAsBlob("carrusel/ejemploCarrusel/assets/carrusel3.webp"));

    // Generar el archivo ZIP y forzar la descarga
    zip.generateAsync({
            type: "blob"
        })
        .then(function(content) {
            saveAs(content, "carrusel.zip");
        });
}

async function fetchFile(url) {
    const response = await fetch(url);
    return await response.text();
}

async function fetchFileAsBlob(url) {
    const response = await fetch(url);
    return await response.blob();
}