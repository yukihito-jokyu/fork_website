import { useGetUserInfoQuery } from "@/redux/services/userApi";

const ReduxApi = () => {
  const { data: user, error, isLoading } = useGetUserInfoQuery();

  if (isLoading) return <p>読み込み中...</p>;
  if (error) return <p>エラーが発生しました</p>;

  return (
    <div>
      {user && <div>
        <h3>{user.id}</h3>
        <p>Email: {user.name}</p>
        </div>}
    </div>
  );
};

export default ReduxApi;