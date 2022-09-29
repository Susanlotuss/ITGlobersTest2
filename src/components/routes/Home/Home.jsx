import birdie from "../../../assets/homeImg.webp";

function Home() {
  return (
    <>
      <img
        className="homie"
        src={birdie}
        alt="BirdImage"
        style={{ position: "fixed", height: "400px", marginTop: "20rem" }}
      />
      <div>
        <h1>
          WELCOME TO <br /> THE BIRDIE SANCTUARY
        </h1>
      </div>
    </>
  );
}

export default Home;
