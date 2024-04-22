import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncRequest } from "../../redux/actions";
import Card from "../card/Card";
import classes from "./UserPage.module.css";

const UserPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

  const getUsers = () => {
    dispatch(fetchAsyncRequest(users));
  };
  return (
    <div className={classes.wrapper}>
      <button onClick={getUsers} disabled="true">
        GET
      </button>
      <div className={classes.cardItems}>
        {users.map((user, idx) => (
          <Card cardInfo={user} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default UserPage;
