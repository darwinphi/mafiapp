import Link from "next/link";

const Missions = () => {
  const missions = [
    { id: "exodus", name: "Exodus" },
    { id: "apollo", name: "Apollo" },
    { id: "trident", name: "Exodus" },
  ];
  return (
    <div className="container">
      <h1>Missions</h1>
      <ul>
        {missions.map((mission) => (
          <li key={mission.id}>
            <Link
              href={{
                pathname: "/missions/[id]",
                query: {id: mission.id}
              }}
            >
              {mission.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Missions;
