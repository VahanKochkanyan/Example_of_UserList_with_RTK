import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getAllUsers, users } from "./user.slice"
import { UserItem } from "./user-item"

export const UserList = () => {

    const list = useAppSelector(users)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <>
            <h1>User List: {list.length}</h1>
            <div className="list">
                {
                    list.map( user => <UserItem key={user.id} id={user.id} name={user.name}/> )
                }
            </div>
        </>
    )
}