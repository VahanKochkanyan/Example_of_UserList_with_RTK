import { useAppDispatch } from "../../app/hooks"
import { IUser } from "./types"
import { deleteUser, getAllUsers } from "./user.slice"

interface IProps extends IUser {}

export const UserItem: React.FC<IProps> = ({id, name}) => {

    const dispatch = useAppDispatch()

    // const handelDelete = () => {
    //     dispatch(deleteUser(id))
    //     // dispatch(getAllUsers())
    // }

    return <div>
        <h3>{name}</h3>
        <button onClick={() => dispatch(deleteUser(id))}>Delete</button>
    </div>
}