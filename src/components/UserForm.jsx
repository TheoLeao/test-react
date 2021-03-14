import React, { useState, useContext } from "react"
import UserContext from './../contexts/UserContext'

const UserForm = () => {

    const [userInfos, setUserInfos] = useState({ firstName: "", lastName: "" });
    const { stateUser, dispatchUser } = useContext(UserContext)

    const handleChange = e => {
        const { name, value } = e.target;
        console.log(e.target)
        dispatchUser({ type: "updateUser", user: { firstName: userInfos.firstName, lastName: userInfos.lastName  }});
        setUserInfos(prevState => ({
            ...prevState,
            [name]: value
        }));
        //console.log(e.target.name)
        
        e.preventDefault()
    };

    return (
        <>
            <h2>Bonjour  {userInfos ? userInfos.firstName : ''} {userInfos ? userInfos.lastName : ''}</h2>
            <form onSubmit={handleChange}>
                <label>Prénom : </label>
                <input type="text" placeholder={stateUser ? stateUser.user.firstName : ''} onChange={e => handleChange(e)} name="firstName" />
                <label>Nom : </label>
                <input type="text" placeholder={stateUser ? stateUser.user.lastName : ''} onChange={e => handleChange(e)} name="lastName" />
                <button>Sauvegarder</button>
            </form>
        </>
    )
}
export default UserForm