const initState = {
    CT_createTravelBtn: false,
    CT_createAttractionBtn: false,
    CT_titleInput: "",
    CT_startDateInput: "",
    CT_endDateInput: "",
    CT_daySelect: '',                //規劃日
    CT_attractionNameInput: '',      //景點名稱
    CT_addressInput: '',             //地址
    CT_stayTimeHourInput: 0,         //停留時間(時)
    CT_stayTimeMinInput: 0,          //停留時間(分)
    CT_attractionInfoCheckbox: [],   //景點資訊
    CT_consumeRadio: true,           //有無消費
    CT_costDetailPNameInput: '',     //交易明細(商品名稱)
    CT_costDetailTypeSelect: '',     //交易明細(類別)   
    CT_costDetailMoneyInput: '',     //交易明細(金額)
    CT_discriptionInput: '',         //紀錄




    CT_startTimeBtnHidden: false,    
    CT_createTravelBtnStatus: false,
    CT_createAttractionBtnStatus: true,
    CT_createTravelError_endDateSmall: '',
    CT_createTravelError_titleNull: '',
    CT_createTravelError_startDateNull: '',
    CT_createTravelError_endDateNull: '',
    CT_currentTravelId: 1, //travelId,
    CT_currentAttractionId: 1,
    CT_data: [{
        id: 1,
        title: '',
        startDate: '',
        endDate: '',
        totalCost: 0,
        attractionData: []
    }]
    // CT_data:[
    //     {
    //         id:1,
    //         title: "",
    //         startDate: '2019-12-21',
    //         endDate: '2019-12-22',
    //         totalCost: 3000,
    //         attractionData: [{
    //             id: 'T1-01',// 1代表Day1  01代表景點1
    //             placeName: '台北101',
    //             country: 'taipei',
    //             address: '新北市蘆洲區',
    //             arrivalTime: '2019-12-27 11:16',
    //             stayTime: 72,
    //             info: ['ticket', 'pet'],

    //             cost: [{
    //                 choose: 'yes',
    //                 name: '餅乾',
    //                 type: 'eat',
    //                 cost: 250
    //             }],
    //             recored: '我是紀錄喔!',
    //             pathData: {
    //                 id: 'P1-01',
    //                 traffic: 'bus',
    //                 pathTime: 62,
    //                 cost: 2500
    //             }
    //         }, {
    //             id: 'T1-02',// 1代表Day1  01代表景點1
    //             placeName: '巷山',
    //             country: 'taipei',
    //             address: '新北市蘆洲區',
    //             arrivalTime: '2019-12-27 11:16',
    //             stayTime: 72,
    //             info: ['ticket', 'pet'],

    //             cost: [{
    //                 choose: 'yes',
    //                 name: '餅乾',
    //                 type: 'eat',
    //                 cost: 250
    //             }],
    //             recored: '我是紀錄喔!',
    //             pathData: {
    //                 id: 'P1-01',
    //                 traffic: 'subway',
    //                 pathTime: 32,
    //                 cost: 2500
    //             }
    //         }],
    //     }
    // ]
}

const travelReducer = (state = initState, action) => {
    switch (action.type) {
        case 'HANDLE_INPUT_CT_TITLE':
            return Object.assign({}, state, {
                CT_titleInput: action.title
            })

        case 'HANDLE_INPUT_CT_STARTDATE':
            return Object.assign({}, state, {
                CT_startDateInput: action.date
            })

        case 'HANDLE_INPUT_CT_ENDDATE':
            return Object.assign({}, state, {
                CT_endDateInput: action.date
            })

        case 'HANDLE_BTN_CT_CREATEATTRACTION':

            if (state.CT_currentAttractionId === 1) {
                return Object.assign({}, state, {
                    CT_startTimeBtnHidden: false,
                    CT_createAttractionBtn: state.CT_createAttractionBtn ? false : true
                })
            } else {
                return Object.assign({}, state, {
                    CT_startTimeBtnHidden: true,
                    CT_createAttractionBtn: state.CT_createAttractionBtn ? false : true
                })
            }

        case 'HANDLE_BTN_CT_CREATETRAVEL':
            return Object.assign({}, state, {
                CT_createTravelBtn: state.CT_createTravelBtn ? false : true
            })

        case 'HANDLE_BTN_CT_CREATETRAVEL_CREATE':
            let dataLength = state.CT_data.length;
            if (isNaN(Date.parse(state.CT_startDateInput)) || isNaN(Date.parse(state.CT_endDateInput))) {
                if (isNaN(Date.parse(state.CT_startDateInput)) && isNaN(Date.parse(state.CT_endDateInput))) {
                    if (state.CT_titleInput === '') {
                        return Object.assign({}, state, {
                            CT_createTravelError_titleNull: '標題不可為空值',
                            CT_createTravelError_startDateNull: '請選擇開始日期',
                            CT_createTravelError_endDateNull: '請選擇結束日期',
                        })
                    } else {
                        return Object.assign({}, state, {
                            CT_createTravelError_startDateNull: '請選擇開始日期',
                            CT_createTravelError_endDateNull: '請選擇結束日期',
                            CT_createTravelError_titleNull: '',
                        })
                    }
                } else {
                    if (isNaN(Date.parse(state.CT_startDateInput))) {
                        if (state.CT_titleInput === '') {
                            return Object.assign({}, state, {
                                CT_createTravelError_startDateNull: '請選擇開始日期',
                                CT_createTravelError_endDateNull: '',
                                CT_createTravelError_titleNull: '標題不可為空值',
                            })
                        } else {
                            return Object.assign({}, state, {
                                CT_createTravelError_startDateNull: '請選擇開始日期',
                                CT_createTravelError_endDateNull: '',
                                CT_createTravelError_titleNull: '',
                            })
                        }
                    } else {
                        if (state.CT_titleInput === '') {
                            return Object.assign({}, state, {
                                CT_createTravelError_endDateNull: '請選擇結束日期',
                                CT_createTravelError_startDateNull: '',
                                CT_createTravelError_titleNull: '標題不可為空值',
                            })
                        } else {
                            return Object.assign({}, state, {
                                CT_createTravelError_endDateNull: '請選擇結束日期',
                                CT_createTravelError_startDateNull: '',
                                CT_createTravelError_titleNull: '',
                            })
                        }
                    }
                }
            } else {
                if (Date.parse(state.CT_startDateInput) > Date.parse(state.CT_endDateInput)) {
                    if (state.CT_titleInput === '') {
                        return Object.assign({}, state, {
                            CT_createTravelError_endDateSmall: '出發日期要在結束日期之前',
                            CT_createTravelError_startDateNull: '',
                            CT_createTravelError_endDateNull: '',
                            CT_createTravelError_titleNull: '標題不可為空值',
                        })
                    } else {
                        return Object.assign({}, state, {
                            CT_createTravelError_endDateSmall: '出發日期要在結束日期之前',
                            CT_createTravelError_startDateNull: '',
                            CT_createTravelError_endDateNull: '',
                            CT_createTravelError_titleNull: '',
                        })
                    }
                } else {
                    if (state.CT_titleInput === '') {
                        return Object.assign({}, state, {
                            CT_createTravelError_endDateSmall: '',
                            CT_createTravelError_startDateNull: '',
                            CT_createTravelError_endDateNull: '',
                            CT_createTravelError_titleNull: '標題不可為空值',
                        })
                    } else {
                        if (dataLength === 1) {
                            return Object.assign({}, state, {
                                CT_createTravelError_endDateSmall: '',
                                CT_createTravelError_startDateNull: '',
                                CT_createTravelError_endDateNull: '',
                                CT_createTravelError_titleNull: '',
                                CT_createTravelBtnStatus: true,
                                CT_createAttractionBtnStatus: false,
                                CT_createTravelBtn: state.CT_createTravelBtn ? false : true,
                                CT_data: [{
                                    title: state.CT_titleInput,
                                    startDate: state.CT_startDateInput,
                                    endDate: state.CT_endDateInput,
                                    attractionData: []
                                }]
                            })
                        } else {
                            return Object.assign({}, state, {
                                CT_createTravelError_endDateSmall: '',
                                CT_createTravelError_startDateNull: '',
                                CT_createTravelError_endDateNull: '',
                                CT_createTravelError_titleNull: '',
                                CT_createTravelBtnStatus: true,
                                CT_createAttractionBtnStatus: false,
                                CT_createTravelBtn: state.CT_createTravelBtn ? false : true,
                                CT_data: [...state.CT_data, {
                                    id: state.CT_data[dataLength - 1].id++,
                                    title: state.CT_titleInput,
                                    startDate: state.CT_startDateInput,
                                    endDate: state.CT_endDateInput,
                                    attractionData: []
                                }]
                            })
                        }
                    }
                }
            }

        case 'HANDLE_BTN_CT_CREATETRAVEL_CANCEL':
            return Object.assign({}, state, {
                CT_createTravelBtn: state.CT_createTravelBtn ? false : true,
                CT_titleInput: "",
                CT_startDateInput: "",
                CT_endDateInput: "",
            })

        case 'HANDLE_SELECT_CT_CREATE_DAYS':
            let day = action.selectDay;
            let attractionId = 1;

            state.CT_data.map((data) => {
                if (state.CT_currentTravelId === data.id) {
                    if (data.attractionData.length === 0) {//還沒建立過任何資料
                        attractionId = 1;
                    } else {
                        data.attractionData.map((data, index) => {
                            let attractionId = data.id;
                            let idArr = attractionId.split("-");
                            if (idArr[0] === 'T' + day) {
                                attractionId = day + 1;
                            } else {
                                attractionId = 1;
                            }
                        })
                    }
                }
            })
            return Object.assign({}, state, {
                CT_daySelect: action.selectDay,
                CT_currentAttractionId: attractionId
            })



        default:
            return state
    }
}

export default travelReducer