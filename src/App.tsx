import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
      }
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data, error } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  if (!!error) return <h1>Error!</h1>;

  return (
    <ul>
      {data?.lessons.map((lesson) => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  );
}

export default App;
