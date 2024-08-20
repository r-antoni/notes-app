import { getUser } from "@/actions/userActions";
import Todos from "@/components/todos";

export default async function Home() {
  const user = await getUser(1)
  return (
    <main>
      <Todos todos={user[0].todo} user={user} />
    </main>
  );
}
