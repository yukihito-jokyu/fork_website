import { useSelector, useDispatch  } from "react-redux";
import { selectUserId, selectUserName } from "@/redux/users/selectors";
import { changeUserId, changeUserName } from "@/redux/users/slice";

const Redux = () => {
  const dispatch = useDispatch();

  const userId = useSelector(selectUserId);
  const userName = useSelector(selectUserName);

  const handleChangeUserId = () => {
    dispatch(changeUserId("new-article-id-123"));
  };

  const handleChangeUserName = () => {
    dispatch(changeUserName("takasi"));
  };

  return (
    <div>
      <h2>{userName}</h2>
      <p>ID: {userId}</p>

      <button onClick={handleChangeUserId}>User IDを変更</button>
      <button onClick={handleChangeUserName}>User Nameを変更</button>
    </div>
  );
};

export default Redux;