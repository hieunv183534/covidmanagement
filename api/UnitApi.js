class UnitApi extends BaseApi{
    constructor(){
        this.apiController = "Unit"
    }

    /**
     * 
     * @param {*} body object unit
     * @returns 
     */
    getById(body){
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
            body: JSON.stringify(body)
        };

        return fetch(this.baseUrl + `${this.apiController}/${id}`, options).then(res => {
            return res.json()
        });
    }
}