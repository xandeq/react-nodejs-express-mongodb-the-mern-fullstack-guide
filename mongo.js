const MongoClient = require('mongodb').MongoClient();

const url = 'mongodb+srv://xandeq:alexandre10@cluster0.5jbns.mongodb.net/products_test?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price
    };

    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db();
        const result = db.collection('product')
    } catch (error) {
        res.json({ message: 'Could not store data'});
    }
}

const getProducts = async (req, res, next) => {

}

exports.createProduct = createProduct;
exports.getProducts = getProducts;