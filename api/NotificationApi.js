class NotificationApi extends BaseApi {
    constructor() {
        this.apiController = "notification/";
    }

    /**
     * 
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
            body: {
                notificationContent: body.notificationContent,
                title: body.title,
            },
        };

        return fetch(this.baseUrl + `${this.apiController}` + "addnotification", options).then(res => {
            return res.json()
        });
    };

    /**
     * 
     * @param {
     * notificationId,
     * title, 
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
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
            body: {
                notificationId: body.notificationId,
                notificationContent: body.notificationContent,
                title: body.title,
            },
        };

        return fetch(this.baseUrl + `${this.apiController}` + "editnotification", options).then(res => {
            return res.json()
        });
    };

    /**
     * 
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
            body: {
                index: body.index,
                count: body.count,
            },
        };

        return fetch(this.baseUrl + `${this.apiController}` + "getnotification", options).then(res => {
            return res.json()
        });
    };

        /**
         * 
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
        };

        return fetch(this.baseUrl + `${this.apiController}` + "deletenotification", options).then(res => {
            return res.json()
        });
    };

    /**
     * 
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
            body: {
                index: body.index,
                count: body.count,
            },
        };

        return fetch(this.baseUrl + `${this.apiController}` + "getlistnotification", options).then(res => {
            return res.json()
        });
    };

    /**
     * 
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
            body:{
                notificationId: body.notificationId,
            },
        };

        return fetch(this.baseUrl + `${this.apiController}` + "browsingNotification", options).then(res => {
            return res.json()
        });
    };

    /**
     * 
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
    viewNotification(body){
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
            body: {
                index: body.index,
                count: body.count,
            },
        };

        return fetch(this.baseUrl + `${this.apiController}` + "viewnotification", options).then(res => {
            return res.json()
        });
    };

    /**
     * 
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
            body: {
                index: body.index,
                count: body.count,
            },
        };

        return fetch(this.baseUrl + `${this.apiController}` + "viewdifficultnotification", options).then(res => {
            return res.json()
        });
    };

}