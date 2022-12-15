const config = require("../../routes/config.js")
const contenedor = require("../../contenedor/firebase.js")

const productos = new contenedor("products")

const crud = async () => {
    await config.initFirebase()
    await productos.save({title: "Violeta", price: 4500, thumbnail: "https://contentv2.tap-commerce.com/cover/large/9789500766647_1.jpg?id_com=1113"})
    await productos.getAll()
    await productos.getById("HtQlGkPgrCHQiyBJDC3m")
    await productos.deleteById("HtQlGkPgrCHQiyBJDC3m")
    await productos.deleteAll()
}

crud()