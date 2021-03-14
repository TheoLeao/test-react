const mapReducer = (stateMap, action) => {
    switch (action.type) {
        case 'addMarker':
            let newMarker = { id: action.marker.id, coords: action.marker.coords };
            return { ...stateMap, markers: [...stateMap.markers, newMarker], nextID: stateMap.nextID+1 };
        case 'removeMarker':
            let prevState = stateMap.markers;
            for (var i = 0; i < prevState.length; i++) if(prevState[i].id == action.marker.id) prevState.splice(i, 1)                     
            return {markers: prevState};
        default: return { ...stateMap }
    }
}

export default mapReducer


