import React from 'react'

const Users = () => {
    const [users, setUsers] = React.useState([])

    React.useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response =>
             response.json()    
        )
        .then(melumat => 
            setUsers(melumat)    
        )
        .catch(err => console.log(err))
    }, [])


    const add = (data) => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data)
        })
        .then( res => res.json)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }



    add({
        userIswqdqw: "123o2jn342",
        id: "912hen2u",
        title: "Mezahir",
        body: "Qedimovs"
    })


  return (
    <div>

        <ul>
            {users.map((item, key) => (
                <li key={key}>
                      {item.address.street}  
                </li>
            ))}
        </ul>


    </div>
  )
}

export default Users