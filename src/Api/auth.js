// save user
export const saveUser = user => {
    const currentUser = {
        email: user?.email
    }
    fetch(`http://localhost:5000/users/${user?.email}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        });
};