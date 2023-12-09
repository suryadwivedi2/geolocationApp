const Store = require('../models/store')

exports.getStores = async (req, res, next) => {
    try {
        const stores = await Store.find();
        return res.status(200).json({
            sucess: true,
            count: stores.length,
            data: stores
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

exports.addStores = async (req, res, next) => {
    try {
        //console.log(req.body)
       const store=await Store.create(req.body)
       
        return res.status(200).json({
            sucess: true,
            data: store
        });
    } catch (err) {
        console.log(err);
        if(err.code==11000){
            return res.status(400).json({error:'This Store is already exists'})
        }
        res.status(500).json(err)
    }
}