const BaseRepository = require("../BaseRepository");

class CompanyRepository extends BaseRepository{

    constructor(axios){
        super(axios, "/companies")
    }


}

module.exports = CompanyRepository