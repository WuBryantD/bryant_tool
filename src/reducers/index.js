const initState = {
    CT_createTravelBtn: false,
    CT_createAttrationBtn: false,
    CT_titleInput: "",
    CT_daysInput: "one",
    CT_startDateInput: "",
    CT_endDateInput: "",
    CT_data:[
        {
            id:1,
            title: "",
            startDate: '2019-12-21',
            endDate: '2019-12-22',
            totalCost: 3000,
            travelData: [{
                id: 'T1-01',// 1代表Day1  01代表景點1
                placeName: '台北101',
                country: 'taipei',
                address: '新北市蘆洲區',
                arrivalTime: '2019-12-27 11:16',
                stayTime: 72,
                info: ['ticket', 'pet'],

                cost: [{
                    choose: 'yes',
                    name: '餅乾',
                    type: 'eat',
                    cost: 250
                }],
                recored: '我是紀錄喔!',
                pathData: {
                    id: 'P1-01',
                    traffic: 'bus',
                    pathTime: 62,
                    cost: 2500
                }
            }, {
                id: 'T1-02',// 1代表Day1  01代表景點1
                placeName: '巷山',
                country: 'taipei',
                address: '新北市蘆洲區',
                arrivalTime: '2019-12-27 11:16',
                stayTime: 72,
                info: ['ticket', 'pet'],

                cost: [{
                    choose: 'yes',
                    name: '餅乾',
                    type: 'eat',
                    cost: 250
                }],
                recored: '我是紀錄喔!',
                pathData: {
                    id: 'P1-01',
                    traffic: 'subway',
                    pathTime: 32,
                    cost: 2500
                }
            }],

        }

    ]
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
                CT_createAttrationBtn: state.CT_createAttrationBtn ? false : true
            })

        case 'HANDLE_BTN_CT_CREATETRAVEL':
            return Object.assign({}, state, {
                CT_createTravelBtn: state.CT_createTravelBtn ? false : true
            })

        case 'HANDLE_BTN_CT_CREATETRAVEL_CREATE':
            return Object.assign({}, state, {
                CT_createTravelBtn: state.CT_createTravelBtn ? false : true,
                CT_data: [...state.CT_data, {
                    id:1,
                    title: state.CT_titleInput,
                    startDate: state.CT_startDateInput,
                    endDate: state.CT_endDateInput,
                    travelData: []
                }]
            })

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