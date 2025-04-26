const mongoose = require('mongoose')
const { Schema, Types } = mongoose;

const productSchema = new Schema({

    //nombre de producto
    nombre:
    {
        type:String,
        require: true
    },
    //precio (double)
    precio:
    {
        type: Number,
        require: true
    },
    //referencia a la collección categorias
    categoria_id:
    {
        type: Types.ObjectId,
        ref: 'categorias',
        require: true
    },
    //cantidad de productos
    stock:
    {
        type: Number,
        default: 0
    },
    //objeto de caracteristicas
    caracteristicas:
    {
        type: Schema.Types.Mixed,
        default:{}
    }

},{
    timestamps: {createAt: 'date_created', updateAt: false}
});
module.exports = mongoose.model('productos', productSchema);