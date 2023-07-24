const BaseRepository = require("../BaseRepository");

class OrderRepository extends BaseRepository{

    constructor(axios){
        super(axios, "/orders")
    }


}

module.exports = OrderRepository