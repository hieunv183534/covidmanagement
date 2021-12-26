class AdminApi extends BaseApi {
    constructor() {
        this.apiController = "admininfo/";
    }

    /**
     * Thêm thông tin cá nhân cho 1 admin
     * @param {
     * fullName: Họ và tên /String
     * dateOfBirth: Ngày sinh /Date
     * Sex: Giới tính /String
     * addressCode: Mã địa chỉ cư trú /String
     * address: Địa chỉ mức nhỏ hơn phường /String
     * nationality: Quốc tịch /String
     * diseaseStatus: Trạng thái (F0, F1, F2) không bị gì thì không cần cập nhật /String
     * } body 
     * @returns 
     * +, Thành công
     * status:201
     * {
	 *	    message: "Successful registration information",
	 *	    link: process.env.SERVER_URL + "/admininfo/getadmin",
	 *	}
     * +, Thất bại
     * status: 403
     * {
     *      message: "Cannot add new infomation",
     *  }
     * 
     * status: 500
     */
    add(body) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
            body: JSON.stringify(body),
        };

        return fetch(this.baseUrl + `${this.apiController}` + "addAdmin", options).then(res => {
            return res.json()
        });
    };

    /**
     * Cập nhật thông tin cá nhân cho 1 admin
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
     * status:201
     * {
	 *	    message: "Update infomation successful",
	 *	    link: process.env.SERVER_URL + "/admininfo/getadmin",
	 *	}
     * +, Thất bại
     * status: 404
     * {
     *      message: "The account has not yet registered information",
     *  }
     * 
     * status: 500
     */
    update(body) {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
            body: JSON.stringify(body),
        };

        return fetch(this.baseUrl + `${this.apiController}` + "editAdmin", options).then(res => {
            return res.json()
        });
    };

    /**
     * Lấy thông tin cá nhân cho 1 admin
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
     * 
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

        return fetch(this.baseUrl + `${this.apiController}` + "getPerson", options).then(res => {
            return res.json()
        });
    };

    /**
     * Xoá thông tin cá nhân cho 1 admin
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

        return fetch(this.baseUrl + `${this.apiController}` + "deletePerson", options).then(res => {
            return res.json()
        });
    };
}