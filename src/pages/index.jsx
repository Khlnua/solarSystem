import { Planets } from "@/components/Planets";

export const solarSystem = [
  {
    name: "Mercury",
    orbit: "150px",
    planetSize: "15px",
    orbitPeriod: "8.8s",
    rotationPeriod: "5.86s",
    imageUrl: "/images/mercury.png",
  },
  {
    name: "Venus",
    orbit: "200px",
    orbitPeriod: "22.5s",
    planetSize: "20px",
    imageUrl: "/images/venus.png",
    rotationPeriod: "24.3s",
  },
  {
    name: "Earth",
    orbit: "300px",
    orbitPeriod: "36.5s",
    planetSize: "23px",
    imageUrl: "/images/earth.png",
    rotationPeriod: "1s",
  },
  {
    name: "Mars",
    orbit: "400px",
    orbitPeriod: "68.7s",
    planetSize: "17px",
    imageUrl: "/images/mars.png",
    rotationPeriod: "1.025s",
  },
  {
    name: "Jupiter",
    orbit: "550px",
    orbitPeriod: "118.6s",
    planetSize: "45px",
    imageUrl: "/images/jupiter.png",
    rotationPeriod: "0.41s",
  },
  {
    name: "Saturn",
    orbit: "650px",
    orbitPeriod: "294.6s",
    planetSize: "40px",
    imageUrl: "/images/saturn.png",
    rotationPeriod: "0.445s",
  },
  {
    name: "Uranus",
    orbit: "750px",
    orbitPeriod: "840s",
    planetSize: "35px",
    imageUrl: "/images/uranus.png",
    rotationPeriod: "0.717s",
  },
  {
    name: "Neptune",
    orbit: "850px",
    orbitPeriod: "1648s",
    planetSize: "33px",
    imageUrl: "/images/neptune.png",
    rotationPeriod: "0.671s",
  },
];

const Galaxy = () => {
  return (
    <div className="body">
      <img src="/images/galaxy.webp" alt="" className="mainPicture" />
      <img src="/images/sun.png" alt="" className="sun" />

      {solarSystem.map((solar) => {
        return <Planets solar={solar} />;
      })}
    </div>
  );
};
export default Galaxy;
