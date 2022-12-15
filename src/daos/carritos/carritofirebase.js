const config = require("../../config/config")
const contenedor = require("../../container/firebase")

const carritos = new contenedor("carritos")

const crud = async () => {
    await config.initFirebase()
    await carritos.save({timestamp: 1670919375156,products: [{
        timestamp:1670919375156,
        title:"Violeta",
        description:"descripcion",
        code:"libro-1",
        image:"https://contentv2.tap-commerce.com/cover/large/9789500766647_1.jpg?id_com=1113",
        price: 4500,
        stock:4
    }]})
}

crud()