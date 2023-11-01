import Single from "../../components/single/Single";
import "./user.scss";
import { useParams } from "react-router-dom";
import { userRows } from "../../data";
function User() {
  const { id } = useParams<{ id: string }>();
  const user = userRows.find((user) => user.id === parseInt(id));
  if (!user) {
    return <h1>User not found</h1>;
  }
  return (
    <div>
      <Single targetData={user} slug="user" />
    </div>
  );
}

export default User;
