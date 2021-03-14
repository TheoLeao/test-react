import React from "react"
const UserForm = () => {
    const [name, setName] = React.useState("");
    const [firstName, setFirstName] = React.useState("");

    const handleSubmit = (e) => {
        console.log(` Formulaire submit:
        name: ${name}
        firstname: ${firstName}`);
        e.preventDefault();
    }
    return (
        <>
        <h2>Bonjour {firstName ? firstName : ''} {name ? name: ''}</h2>
            <form onSubmit={handleSubmit}>
                <label> Nom : </label>
                <input name="name" type="text" value={name} onChange={e => setName(e.target.value)} required />
                <label> Prénom : </label>
                <input name="firstName" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required />
            </form>
        </>
    )
}
export default UserForm