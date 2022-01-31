import { useRouter } from "next/router";

// Example route
// http://localhost:3000/tasks/2021/12
const Missions = () => {
  const router = useRouter();
  const { slug: date } = router.query;

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div className="container">
      <h1>Mission Goals</h1>
      {/* <h2>
        Year: {date[0]}, Month: {date[1]}
      </h2> */}
    </div>
  );
};

export default Missions;
