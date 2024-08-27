import { getData } from "@/actions/todoActions";
import { getAllUsers, getUser } from "@/actions/userActions";
import Todos from "@/components/todos";

export default async function Home() {
  const users = await getAllUsers()
  const data = await getData(users[0].id)
  const user = await getUser(users[0].id)

  return (
    <main>
      <Todos todos={data} user={users[0]} />
    </main>
  );
}
