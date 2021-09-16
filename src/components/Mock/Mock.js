

const ObtenerTarjetas = new Promise ((res,rej)=>{
    let respuesta = "obtener";
    if (respuesta === "obtener"){
        setTimeout(()=>{
            res(ProductsArray)
        }, 3000)
    }else {
        rej("No se encuentran los productos")
    }
})


//Array Productos
const ProductsArray = [
    { id:"a0" , categoria: "Remeras", name: "Remera Gato Malo Rosa" , price:"350" , stock:"15", picture:"https://i.ibb.co/PtdDW20/gatob.jpg"},
    { id: "a1" , categoria: "Remeras", name: "Remera Gato Malo Blanca" , price:"350" , stock:"15", picture:"https://i.ibb.co/0s2b2ff/gatod.jpg"},
    { id: "a2" , categoria: "Remeras", name: "Remera Gato Malo Negra" , price:"350" , stock:"15", picture:"https://i.ibb.co/6BQ770w/gatoa.jpg"},
    { id: "a3" , categoria: "Remeras", name: "Remera Gato Malo Celeste" , price:"350" , stock:"15", picture:"https://i.ibb.co/Ld598BW/gatoc.jpg"},
    { id: "a4" , categoria: "Remeras", name: "Remera Gato Malo Roja" , price:"350" , stock:"15", picture:"https://i.ibb.co/vP5HSss/gatof.jpg"},
    { id: "a5" , categoria: "Remeras", name: "Remera Gato Malo Verde" , price:"350" , stock:"15", picture:"https://i.ibb.co/jVZLx5r/gatoe.jpg"},
    { id: "b0" , categoria: "Remeras", name: "Remera Mujer Anonima Verde" , price:"400" , stock:"20", picture:"https://i.ibb.co/gwjbSYL/mujerb.jpg"},
    { id: "b1" , categoria: "Remeras", name: "Remera Mujer Anonima Blanca" , price:"400" , stock:"20", picture:"https://i.ibb.co/QHhbgXh/mujera.jpg"},
    { id: "b2" , categoria: "Remeras", name: "Remera Mujer Anonima Azul" , price:"400" , stock:"20", picture:"https://i.ibb.co/Xt7tG3k/mujerc.jpg"},
    { id: "c0" , categoria: "Remeras", name: "Remera Mujer Anonima Azul" , price:"400" , stock:"20", picture:"https://i.ibb.co/Xt7tG3k/mujerc.jpg"},
    { id: "d0" , categoria: "Pantalones", name: "Pantalon Recto Crema " , price:"1500" , stock:"12", picture:"https://i.ibb.co/wc3Sjhz/rectoa.jpg"},
    { id: "d1" , categoria: "Pantalones", name: "Pantalon Recto Negro " , price:"1500" , stock:"12", picture:"https://i.ibb.co/b5QMwL2/rectob.jpg"},
    { id: "e0" , categoria: "Pantalones", name: "Pantalon Chupin Bordeau " , price:"1450" , stock:"16", picture:"https://i.ibb.co/hfySdYv/chupina.jpg"},
    { id: "e1" , categoria: "Pantalones", name: "Pantalon Chupin Verde Militar " , price:"1450" , stock:"16", picture:"https://i.ibb.co/RNbPWFk/chupinb.jpg"},
    { id: "f0" , categoria: "Pantalones", name: "Pantalon Joggin Negro" , price:"1050" , stock:"22", picture:"https://i.ibb.co/hy5ChB9/jogga.jpg"},
    { id: "f1" , categoria: "Pantalones", name: "Pantalon Joggin Azul " , price:"1050" , stock:"22", picture:"https://i.ibb.co/d0Jvt67/joggb.jpg"},
    { id: "g0" , categoria: "Pantalones", name: "Calza Metalisada Azul" , price:"1300" , stock:"10", picture:"https://i.ibb.co/JpQXH6p/calzaa.jpg"},
    { id: "g1" , categoria: "Pantalones", name: "Calza Metalisada Rosa" , price:"1300" , stock:"10", picture:"https://i.ibb.co/bWvJKVx/calzab.jpg"},
    { id: "h0" , categoria: "Polleras", name: "Pollera Tubo Negra" , price:"1000" , stock:"13", picture:"https://i.ibb.co/DG9ZmvG/tuboa.jpg"},
    { id: "h1" , categoria: "Polleras", name: "Pollera Tubo Celeste" , price:"1000" , stock:"13", picture:"https://i.ibb.co/F0wfZJY/tubob.jpg"},
    { id: "i0" , categoria: "Polleras", name: "Pollera Plato Corta Rayada Negra" , price:"1200" , stock:"7", picture:"https://i.ibb.co/GnKrmnc/skirtrayasb.jpg"},
    { id: "i1" , categoria: "Polleras", name: "Pollera Plato Corta Rayada Azul" , price:"1200" , stock:"7", picture:"https://i.ibb.co/S5N987w/skirtrayasa.jpg"},
    { id: "j0" , categoria: "Polleras", name: "Pollera Plato Larga Rosa" , price:"1150" , stock:"23", picture:"https://i.ibb.co/9YGJq0Z/platob.jpg"},
    { id: "j1" , categoria: "Polleras", name: "Pollera Plato Larga Blanca" , price:"1150" , stock:"23", picture:"https://i.ibb.co/qg01f4m/platoa.jpg"},
    { id: "k0" , categoria: "Polleras", name: "Pollera Larga Tul Lunares Rosa" , price:"1000" , stock:"12", picture:"https://i.ibb.co/XxWLx7m/tula.jpg"},
    { id: "k1" , categoria: "Polleras", name: "Pollera Larga Tul Lunares Negra" , price:"1000" , stock:"12", picture:"https://i.ibb.co/41fqgXd/tulb.jpg"},
    { id: "l0" , categoria: "Buzos", name: "Pulover Corazones Verde" , price:"980" , stock:"23", picture:"https://i.ibb.co/rFQs9Xc/corazonb.jpg"},
    { id: "l1" , categoria: "Buzos", name: "Pulover Corazones Celeste" , price:"980" , stock:"23", picture:"https://i.ibb.co/g7nrd87/corazona.jpg"},
    { id: "m0" , categoria: "Buzos", name: "Buzo Clasico Crema" , price:"657" , stock:"21", picture:"https://i.ibb.co/R212t4N/buzoa.jpg"},
    { id: "m1" , categoria: "Buzos", name: "Buzo Clasico Violeta" , price:"657" , stock:"21", picture:"https://i.ibb.co/Yp4SQvw/buzob.jpg"},
    { id: "n0" , categoria: "Buzos", name: "Pulover Cuello en V Celeste" , price:"680" , stock:"11", picture:"https://i.ibb.co/Cv1209y/puloverb.jpg"},
    { id: "n1" , categoria: "Buzos", name: "Pulover Cuello en V Rosa" , price:"680" , stock:"11", picture:"https://i.ibb.co/zV1GWxr/pulovera.jpg"},
    { id: "o0" , categoria: "Blusas", name: "Blusa con Nudo Rosa" , price:"800" , stock:"14", picture:"https://i.ibb.co/nwbqFL8/nudoa.jpg"},
    { id: "o1" , categoria: "Blusas", name: "Blusa con Nudo Amarillo pastel" , price:"800" , stock:"14", picture:"https://i.ibb.co/Rhnj9Gz/nudob.jpg"},
    { id: "p0" , categoria: "Blusas", name: "Camisa Manga 3/4 Mostaza" , price:"905" , stock:"20", picture:"https://i.ibb.co/sbDnKvt/mediamangaa.jpg"},
    { id: "p1" , categoria: "Blusas", name: "Camisa Manga 3/4 Verde" , price:"905" , stock:"20", picture:"https://i.ibb.co/7gN7Dqk/mediamangab.jpg"},
    { id: "q0" , categoria: "Blusas", name: "Blusa Raso Gris" , price:"785" , stock:"18", picture:"https://i.ibb.co/3CCbKZ8/camisaa.jpg"},
    { id: "q1" , categoria: "Blusas", name: "Blusa Raso Negra" , price:"785" , stock:"18", picture:"https://i.ibb.co/pQcFQ2S/camisab.jpg"},

];

export default ObtenerTarjetas;