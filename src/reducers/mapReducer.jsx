const mapReducer = (state, action) => {
    switch (action.type) {
        case 'addMarker':
            let newMarker = {id: action.marker.id, coords: action.marker.coords};
            return {...state, markers: [...state.markers, newMarker]};
        default: return {...state}
    }
}

export default mapReducer