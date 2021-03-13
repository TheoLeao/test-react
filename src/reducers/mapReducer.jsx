const mapReducer = (state, action) => {
    switch (action.type) {
        case 'addMarker':
            let newMarker = { id: action.marker.id, coords: action.marker.coords };
            return { ...state, markers: [...state.markers, newMarker], nextID: state.nextID+1 };
        case 'removeMarker':
            let prevState = state.markers;
            for (var i = 0; i < prevState.length; i++) if(prevState[i].id == action.marker.id) prevState.splice(i, 1)                     
            return {markers: prevState};
        default: return { ...state }
    }
}

export default mapReducer


