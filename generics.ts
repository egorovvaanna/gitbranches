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


function getRandom<T>(items: T[]): T {
    const randomIndex = ~~(Math.random()*items.length)
    return items[randomIndex]
}

const el1 = getRandom([1,2,3,4])

function getValue<T extends {id: number}>(item: T){
    return item.id
}

getValue({id: 4})