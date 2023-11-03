import Single from "../../components/single/Single";
import "./user.scss";
import { useParams } from "react-router-dom";
import { userRows } from "../../data";

type TargetDataUser = {
  id: number;
  img: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  createdAt: string;
  verified?: boolean | string;
};

function User() {
  const { id } = useParams<{ id: string }>();
  const user = userRows.find((user) => user.id === Number(id));
  const dummy = {
    id: 1,
    img: "https://images.pexels.com/photos/3773577/pexels-photo-3773577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    lastName: "Doe",
    firstName: "John",
    email: "info@examble.com",
    phone: "123456789",
    createdAt: "2021-06-30T22:54:52.000Z",
    verified: true,
  };
  if (!user) {
    return <h1>User not found</h1>;
  }
  return (
    <div>
      <Single
        targetData={(user as TargetDataUser) || (dummy as TargetDataUser)}
        slug="user"
      />
    </div>
  );
}

export default User;
