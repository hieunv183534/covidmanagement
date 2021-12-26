class PersonApi extends BaseApi {
    constructor() {
        this.baseUrl = 'http://bkzalohieunv.somee.com/';
        this.apiController = "medicalinfo/";
    }

    /**
     * 
     * @param {
     * fullName: Họ và tên
     * dateOfBirth: Ngày sinh
     * Sex: Giới tính
     * addressCode: Mã địa chỉ cư trú
     * address: Địa chỉ mức nhỏ hơn phường
     * nationality: Quốc tịch
     * diseaseStatus: Trạng thái (F0, F1, F2) không bị gì thì không cần cập nhật
     * } body 
     * @returns 
     * +, Thành công
     * status:200
     * {
	 *	    message: "Successful registration information",
	 *	    link: process.env.SERVER_URL + "/medicalinfo/getmedical",
	 *	}
     * +, Thất bại
     * status: 403
     * {
     *      message: "Cannot add new infomation",
     *  }
     * status: 500
     */
    add(body) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
            body: {
                fullName: body.fullName,
                dateOfBirth: body.dateOfBirth,
                Sex: body.Sex,
                addressCode: body.addressCode,
                address: body.address,
                nationality: body.nationality,
                diseaseStatus: body.diseaseStatus,
            },
        };

        return fetch(this.baseUrl + `${this.apiController}` + "addMedical", options).then(res => {
            return res.json()
        });
    };

    /**
     * 
     * @param {
     * fullName: Họ và tên
     * dateOfBirth: Ngày sinh
     * Sex: Giới tính
     * addressCode: Mã địa chỉ cư trú
     * address: Địa chỉ mức nhỏ hơn phường
     * nationality: Quốc tịch
     * diseaseStatus: Trạng thái (F0, F1, F2) không bị gì thì không cần cập nhật
     * } body 
     * @returns 
     * +, Thành công
     * status:200
     * {
	 *	    message: "Update infomation successful",
	 *	    link: process.env.SERVER_URL + "/medicalinfo/getmedical",
	 *	}
     * +, Thất bại
     * status: 404
     * {
     *      message: "The account has not yet registered information",
     *  }
     * status: 500
     */
    update(body) {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
            body: {
                fullName: body.fullName,
                dateOfBirth: body.dateOfBirth,
                Sex: body.Sex,
                addressCode: body.addressCode,
                address: body.address,
                nationality: body.nationality,
                diseaseStatus: body.diseaseStatus,
            },
        };

        return fetch(this.baseUrl + `${this.apiController}` + "editMedical", options).then(res => {
            return res.json()
        });
    };

    /**
     * 
     * @returns 
     * +, Thành công
     * status:200
     * {
			message: "fetching user info successfully",
			data: {
			    userId,
				phoneNumber,
				fullName,
				dateOfBirth,
				Sex,
				addressCode,
				address,
				nationality,
				diseaseStatus,
			},
		}
     * +, Thất bại
     * status: 404
     * {
     *      message: "The account has not yet registered information",
     *  }
     * status: 500     
     */
    get(){
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
        };

        return fetch(this.baseUrl + `${this.apiController}` + "getMedical", options).then(res => {
            return res.json()
        });
    };

    /**
     * @returns
     * +, Thành công
     * status: 200
     * {
            message: "Delete infomation successful"
       }
     * +, Thất bại
     * status: 404
     * {
     *      message: "The account has not yet registered information",
     *  }
     * status: 500  
     */
    delete(){
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
        };

        return fetch(this.baseUrl + `${this.apiController}` + "deleteMedical", options).then(res => {
            return res.json()
        });
    };
}