class NotificationApi extends BaseApi {
    constructor() {
        this.apiController = "notification/";
    }

    /**
     * Tạo 1 thông báo/khai báo khó khăn
     * @param {
     * notificationId: Nội dung thông báo hoặc khai báo khó khăn
     * title: Tiêu đề
     * } body 
     * @returns
     * +, Thành công
     * status:200
     * {
	 *	    message: "Successful post notification",
	 *	}
     * +, Thất bại
     * status: 400
     * {
     *       message: "Notification Content not null!",
     * }
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

        return fetch(this.baseUrl + `${this.apiController}` + "addnotification", options).then(res => {
            return res.json()
        });
    };

    /**
     * Cập nhật 1 thông báo/khai báo khó khăn
     * @param {
     * notificationId,
     * title, 
     * notificationContent,
     * } body 
     * @returns
     * +, Thành công
     * status:200
     * {
	 *	    message: "Successful edit notification",
	 *	}
     * +, Thất bại
     * status: 400
     * {
     *       message: "Notification Content not null!",
     * }
     * 
     * status: 404
     * {
     *       message: "Fail",
     * }
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

        return fetch(this.baseUrl + `${this.apiController}` + "editnotification", options).then(res => {
            return res.json()
        });
    };

    /**
     * Lấy danh sách các thông báo/khai báo khó khăn đã tạo của bản thân
     * @param {
     * index,
     * count, 
     * } body 
     * @returns
     * +,Thành công
     * status: 200
     *{
            message: "Successful get notification",
            data: [
                {
                    notificationId,
                    title,
                    notificationContent,
                    status,
                    timePost,
                }
            ]
        } 
     * +,Thất bại
     * status: 404
     * {
     *       message: "Have not notification"
     * }
     * 
     * status: 500       
     */
    get(body){
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
            body: JSON.stringify(body),
        };

        return fetch(this.baseUrl + `${this.apiController}` + "getnotification", options).then(res => {
            return res.json()
        });
    };

        /**
         * Xoá một thông báo/khai báo khó khăn đã tạo của bản thân mà chưa được duyệt
         * @param {
         * notificationId,
         * } body 
         * @returns
         * +,Thành công
         * status: 200
         *{
         *       message: "Successful delete notification",
         *} 
         * +,Thất bại
         * status: 404
         * {
         *       message: "Fail"
         * }
         * 
         * status: 500       
         */
    delete(body){
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
            body: JSON.stringify(body),
        };

        return fetch(this.baseUrl + `${this.apiController}` + "deletenotification", options).then(res => {
            return res.json()
        });
    };

    /**
     * Lấy danh sách các thông báo/khai báo khó khăn cần duyệt(thuộc quyền quản lý)
     * @param {
     * index,
     * count, 
     * } body 
     * @returns 
     * +, Thành công
     * status:200
     * {
			message: "Successfully",
			data: [
			    {
                    notificationId,
				    title,
                    notificationContent,
                    timePost,
                },...
            ],
		}
     * +, Thất bại
     * status: 404
     * {
            message: "Have not notification",
       }
     * 
     * status: 500    
     */
    getListNotification(body){
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
            body: JSON.stringify(body),
        };

        return fetch(this.baseUrl + `${this.apiController}` + "getlistnotification", options).then(res => {
            return res.json()
        });
    };

    /**
     * Duyệt thông báo/khai báo khó khăn của người khác thuộc quyền hạn
     * @param {
     * notificationId
     * } body 
     * @returns
     * +,Thành công
     * status: 200
     * {
            message: "Successfully",
        }
     * 
     * +,Thất bại
     * status: 403
     * {
                        message: "Fail",
        }
     * status: 400
     * {
                        message: "notificationId error",
        }
     *  status: 500
     */
    browsingNotification(body){
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
            body: JSON.stringify(body),
        };

        return fetch(this.baseUrl + `${this.apiController}` + "browsingNotification", options).then(res => {
            return res.json()
        });
    };

    /**
     * Lấy danh sách các thông báo của nhân viên y tế cấp cao hơn hoặc bằng(cùng cấp phường, quận xã)
     * @param {
     * index,
     * count, 
     * } body 
     * @returns 
     * +, Thành công
     * status:200
     * {
			message: "Successfully",
			data: [
			    {
				    title,
                    notificationContent,
                    timePost,
<<<<<<< HEAD
                    posterName,
                    unitName
=======
                    type,
                    postName,
                    unitName,
>>>>>>> c127b85b6e4bd83347db73a3db33f68d5eb69341
                },...
            ],
		}
     * +, Thất bại
     * status: 404
     * {
            message: "Have not notification",
       }
     * 
     * status: 500    
     */
    viewMedicalNotification(body){
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
            body: JSON.stringify(body),
        };

        return fetch(this.baseUrl + `${this.apiController}` + "viewmedicalnotification", options).then(res => {
            return res.json()
        });
    };

    /**
     * Lấy danh sách các thông báo của quản lý cấp cao hơn hoặc bằng(cùng cấp phường, quận xã)
     * @param {
     * index,
     * count, 
     * } body 
     * @returns 
     * +, Thành công
     * status:200
     * {
			message: "Successfully",
			data: [
			    {
				    title,
                    notificationContent,
                    timePost,
                    type,
                    postName,
                    unitName,
                },...
            ],
		}
     * +, Thất bại
     * status: 404
     * {
            message: "Have not notification",
       }
     * 
     * status: 500    
     */
    viewAdminNotification(body){
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
            body: JSON.stringify(body),
        };

        return fetch(this.baseUrl + `${this.apiController}` + "viewadminnotification", options).then(res => {
            return res.json()
        });
    };

    /**
     * Lấy danh sách các khai báo khó khăn của người dân
     * @param {
     * index,
     * count, 
     * } body 
     * @returns 
     * +, Thành công
     * status:200
     * {
			message: "Successfully",
			data: [
			    {
                    notificationId,
				    title,
                    notificationContent,
                    timePost,
                },...
            ],
		}
     * +, Thất bại
     * status: 404
     * {
            message: "Have not notification",
       }
     * 
     * status: 500    
     */
    viewDifficultNotification(body){
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
            body: JSON.stringify(body),
        };

        return fetch(this.baseUrl + `${this.apiController}` + "viewdifficultnotification", options).then(res => {
            return res.json()
        });
    };

}