import { useRouter } from "next/router";

const MissionID = (params) => {
  const router = useRouter();
  const { id, missionid } = router.query;

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div className="container">
      <h1>
        ID: {id}, Mission ID: {missionid}
      </h1>
    </div>
  );
};

export default MissionID;
