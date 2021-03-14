import React, { useState } from "react"
const UserForm = () => {
    const [userInfos, setUserInfos] = useState({ firstName: "", lastName: "" });
    const handleChange = e => {
        const { name, value } = e.target;
        setUserInfos(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <h2>{userInfos ? userInfos.firstName : ''} {userInfos ? userInfos.lastName : ''}</h2>
            <form>
                <label>Prénom : </label>
                <input value={userInfos.firstName} type="text" onChange={handleChange} name="firstName" />
                <label>Nom : </label>
                <input value={userInfos.lastName} type="text" onChange={handleChange} name="lastName" />
            </form>
        </>
    )
}
export default UserForm