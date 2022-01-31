import { useRouter } from "next/router";

const Mission = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div className="container">
      <h1>Mission #{id}</h1>
    </div>
  );
};

export default Mission;
