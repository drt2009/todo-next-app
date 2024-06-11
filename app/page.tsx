import Header from "./components/Header";
import TodoList from "./components/TodoList";


export default function Home() {
  return (
    <>
      <Header />
      <div className="z-10 w-full items-center font-mono lg:flex flex min-h-screen flex-col p-24">
        <TodoList />
      </div>
    </>
  );
}
