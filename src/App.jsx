import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import AddUser from "./components/list/ChatList/AddUsers/AddUser";
import List from "./components/list/List";
import Login from "./components/Login/Login";
import Notifications from "./components/notifications/Notifications";
const App = () => {
  const user = false;
  return (
    <div className="container">
      {user ? (
        <>
          {" "}
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notifications />
    </div>
  );
};

export default App;
