const mapReducer = (state, action) => {
    switch (action.type) {
        case 'addMarker':
            let newMarker = { id: action.marker.id, coords: action.marker.coords };
            return { ...state, markers: [...state.markers, newMarker], nextID: state.nextID+1 };
            break;
        case 'removeMarker':
            let prevState = state.markers;
            for (var i = 0; i < prevState.length; i++) {
                console.log(prevState[i]);
                if(prevState[i].id == action.marker.id){
                    prevState.splice(i, 1)
                    console.log('splice effectué')
                }
                else{
                    console.log('introuvable')
                }
            }
            return {markers: prevState};
            //console.log(`indice à supprimer: ${action.marker.id - 1}`)
            //state.markers.splice(action.marker.id - 1, 1)
            //return { ...state, markers: state.markers }

        default: return { ...state }
    }
}

export default mapReducer


