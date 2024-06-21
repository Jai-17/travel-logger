import UsersList from "../components/UsersList";

export default function UsersPage() {
  const USERS = [
    {
      id: "u1",
      name: "Max Schward",
      image:
        "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718841600&semt=ais_user",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
}
