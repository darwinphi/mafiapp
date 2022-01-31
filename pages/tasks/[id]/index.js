import { useRouter } from "next/router";

const TaskGoals = () => {
  const router = useRouter();
  const { id } = router.query;

  const loadGoalHandler = () => {
    router.push('/missions/apollo/goals')
  };

  return (
    <div className="container">
      <h1>Goals of a Given Task</h1>
      <button onClick={loadGoalHandler}>Load Goals A</button>
    </div>
  );
};

export default TaskGoals;
