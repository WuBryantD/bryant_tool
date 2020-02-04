export const handleInput_CT_title = (event) => {
    return {
        type: 'HANDLE_INPUT_CT_TITLE',
        title: event.target.value
    }
}

export const handleInput_CT_startDate = (event) => {
    return {
        type: 'HANDLE_INPUT_CT_STARTDATE',
        date: event.target.value
    }
}

export const handleInput_CT_endDate = (event) => {
    return {
        type: 'HANDLE_INPUT_CT_ENDDATE',
        date: event.target.value
    }
}

export const handleBtn_CT_createAttraction = () => {
    return {
        type: 'HANDLE_BTN_CT_CREATEATTRACTION'
    }
}

export const handleBtn_CT_createTravel = () => {
    return {
        type: 'HANDLE_BTN_CT_CREATETRAVEL'
    }
}

export const handleBtn_CT_createTravel_create = () => {
    return {
        type: 'HANDLE_BTN_CT_CREATETRAVEL_CREATE'
    }
}

export const handleBtn_CT_createTravel_cancel = () => {
    return {
        type: 'HANDLE_BTN_CT_CREATETRAVEL_CANCEL'
    }
}

export const handelSelect_CT_createTravel_Days = (event) => {
    return {
        type: 'HANDLE_SELECT_CT_CREATE_DAYS',
        selectDay: event.target.value
    }
}
