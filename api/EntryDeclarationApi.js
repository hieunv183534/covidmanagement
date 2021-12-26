class EntryDeclarationApi extends BaseApi {
    constructor() {
        this.apiController = "entrydeclaration/";
    }

    /**
     * 
     * @param {
     * object: Đối tượng(nước ngoài hay Vn, ...) /String
     * gate: Cửa khẩu /String
     * vehicle: Phương tiện /String
     * vehicleNumber: Số hiệu phương tiện /String 
     * chairNumber: Số ghế /Number
     * departureDay: Ngày khởi hành /Date
     * entryDate: Ngày nhập cảnh /Date
     * departureCountry: Quốc gia khởi hành /String
     * departureCity: Thành phố khởi hành /String
     * destinationCountry: Quốc gia cần đến /String
     * passingCountry: Đã đi qua quốc gia nào /String
     * addressAfterQuarantine: Địa chỉ lưu trú sau cách ly tập trung /String
     * fever: Ho /Boolean
     * cough: Sốt /Boolean
     * stuffy: Khó thở /Boolean
     * soreThroat: Đau họng /Boolean
     * nausea: nôn /Boolean
     * diarrhea: Tiêu chảy /Boolean
     * hemorrhage: Xuất huyết /Boolean
     * rash: Nổi ban /Boolean
     * vaccinesUsed: Loại Vacxin đã sử dụng /String
     * animalContact: Có tiếp xúc với động vật hay cơ sở giết mổ /Boolean
     * nCoVPContact: Có tiếp xúc với người mắc nCoV /Boolean
     * isolationFacility: Cơ sở cách ly /String
     * negativeConfirmation: xác nhận âm tính
     * } body 
     * @returns
     * +,Thành công
     * status:201 
     * {
     *        message: "Update a domestic entry declaration successfully",
     *        link: process.env.SERVER_URL + "/entrydeclaration/getmovedeclaration"
     *    }
     * status:201
     * {
     *        message: "Add a domestic entry declaration successfully",
     *        link: process.env.SERVER_URL + "/entrydeclaration/getmovedeclaration"
     *    }
     * 
     * +,Thất bại
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
                object: body.object,
                gate: body.gate,
                vehicle: body.vehicle,
                vehicleNumber: body.vehicleNumber,
                chairNumber: body.chairNumber,
                departureDay: body.departureDay,
                entryDate: body.entryDate,
                departureCountry: body.departureCountry,
                departureCity: body.departureCity,
                destinationCountry: body.destinationCountry,
                passingCountry: body.passingCountry,
                addressAfterQuarantine: body.addressAfterQuarantine,
                fever: body.fever,
                cough: body.cough,
                stuffy: body.stuffy,
                soreThroat: body.soreThroat,
                nausea: body.nausea,
                diarrhea: body.diarrhea,
                hemorrhage: body.hemorrhage,
                rash: body.rash,
                vaccinesUsed: body.vaccinesUsed,
                animalContact: body.animalContact,
                nCoVPContact: body.nCoVPContact,
                isolationFacility: body.isolationFacility,
                negativeConfirmation: body.negativeConfirmation,
            },
        };

        return fetch(this.baseUrl + `${this.apiController}` + "addentrydeclaration", options).then(res => {
            return res.json()
        });
    };

    /**
     * 
     * @returns 
     * +, Thành công
     * status: 200
     * {
     *	    message: "Get infomation entry declaration successful",
	 *		data: {
     *           userId, 
	 *           object,
     *           gate,
     *           vehicle,
     *           vehicleNumber,
     *           chairNumber,
     *           departureDay,
     *           entryDate,
     *           departureCountry,
     *           departureCity,
     *           destinationCountry,
     *           passingCountry,
     *           addressAfterQuarantine,
     *           fever,
     *           cough,
     *           stuffy,
     *           soreThroat,
     *           nausea,
     *           diarrhea,
     *           hemorrhage,
     *           rash,
     *           vaccinesUsed,
     *           animalContact,
     *           nCoVPContact,
     *           isolationFacility,
     *           negativeConfirmation,
     *           declarationDate: user.declarationDate,
	 *		},
	 * }
     * 
     * +,Thất bại
     * status: 404
     * {
     *       message: "The account has not yet entry declaration",
     * }
     * 
     * status 500
     */
    get(){
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
        };

        return fetch(this.baseUrl + `${this.apiController}` + "getentrydeclaration", options).then(res => {
            return res.json()
        });
    };

    /**
     * 
     * @returns 
     * +, Thành công
     * status: 200
     * {
     *	    message: "Delete infomation entry declaration successful",
	 * }
     * 
     * +,Thất bại
     * status: 404
     * {
     *       message: "The account has not yet entry declaration",
     * }
     * 
     * status 500
     */
    delete(){
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
        };

        return fetch(this.baseUrl + `${this.apiController}` + "deleteentrydeclaration", options).then(res => {
            return res.json()
        });
    };
}