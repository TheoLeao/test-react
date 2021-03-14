import React, {useContext} from 'react'
import UserContext from '../contexts/UserContext'

const HelloName = () => {
    const { stateUser } = useContext(UserContext);
    return (
        <h2 className="title-hello">Bonjour {stateUser ? stateUser.user.firstName : ''} {stateUser ? stateUser.user.lastName : ''}</h2>
    )

}
export default HelloName