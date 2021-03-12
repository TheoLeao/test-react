const mapReducer = (state, action) => {
    switch (action.type) {
        case 'addMarker':
            let newMarker = {id: action.data.id, coords: action.data.marker};
            return {...state, markers: [...state.markers, newMarker]};
        default: return {...state}
    }
}

export default mapReducer