interface Person<T>{
    name: string,
    age: number,
    role: T
}

interface User{
    accsess: boolean
}

interface SuperUser{
    create: boolean,
    delete: boolean
}

type Default = Person<User>
type Admin = Person<SuperUser>