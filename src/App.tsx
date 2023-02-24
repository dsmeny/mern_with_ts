import { useQuery } from "react-query";
import { fetcher } from "./util/util";

const App = () => {
  const { isError, isLoading, data, error } = useQuery("messages", fetcher);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>An error has occured</p>;
  }

  return (
    <div>
      {!data.message.length ? (
        <h1>Welcome!</h1>
      ) : (
        <ul>
          {data.message.map(({ message, _id: id }) => (
            <li data-id={id} key={id}>
              <p>{message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
