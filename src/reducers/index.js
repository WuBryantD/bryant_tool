const initState = {
    CT_createTravelBtn: false,
    CT_createAttractionBtn: false,
    CT_titleInput: "",
    CT_daysInput: "one",
    CT_startDateInput: "",
    CT_endDateInput: "",
    CT_createTravelBtnStatus: false,
    CT_createAttractionBtnStatus: true,
    CT_createTravelError_endDateSmall: '',
    CT_createTravelError_titleNull: '',
    CT_createTravelError_startDateNull: '',
    CT_createTravelError_endDateNull: '',
    CT_data: [{
        id: 1,
        title: '',
        startDate: '',
        endDate: '',
        totalCost: 0,
        travelData: [{
            id: 'T1-01',// 1代表Day1  01代表景點1
            placeName: '',
            country: '',
            address: '',
            arrivalTime: '',
            stayTime: 0,
            info: ['ticket', 'pet'],
            consume: true,
            cost: [{
                name: '',
                type: '',
                cost: 0
            }],
            recored: '我是紀錄喔!',
            pathData: {
                id: 'P1-01',
                traffic: 'bus',
                pathTime: 62,
                cost: 2500
            }
        }]
    }]
    // CT_data:[
    //     {
    //         id:1,
    //         title: "",
    //         startDate: '2019-12-21',
    //         endDate: '2019-12-22',
    //         totalCost: 3000,
    //         travelData: [{
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

        case 'HANDLE_INPUT_CT_DAYS':
            return Object.assign({}, state, {
                CT_daysInput: action.days
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
            return Object.assign({}, state, {
                CT_createAttractionBtn: state.CT_createAttractionBtn ? false : true
            })

        case 'HANDLE_BTN_CT_CREATETRAVEL':
            return Object.assign({}, state, {
                CT_createTravelBtn: state.CT_createTravelBtn ? false : true
            })

        case 'HANDLE_BTN_CT_CREATETRAVEL_CREATE':

            let dataLength = state.CT_data.length



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
                                    travelData: []
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
                                    travelData: []
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

        default:
            return state
    }
}

export default travelReducer