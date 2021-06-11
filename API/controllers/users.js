export const createUser = (req,res)=> {
    const user =req.body;
    users.push(user);

    res.send(`User with the name ${user.firstName} added to database`)
}

export const deleteUser = (req,res) => {
    const { id } = req.params;

    users = users.filter((user) =>  user.id != id );

    res.send(`User with the ${id} deleted from the database`);
}

export const getUser = (req,res)=> {
    const { id } = req.params;

    const userFound = users.find((user) => user.id == id);

    res.send(userFound);
}

export const editUser = (req,res) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;

    const user = users.find((user) =>  user.id == id );

    if(firstName){user.firstName = firstName;}
    if(lastName){user.lastName = lastName;}
    if(age){user.age = age;}

    res.send(`User with the ${id} has been updated`);
}