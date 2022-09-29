import plant from '../../../assets/404Img.gif';

function NotFound() {
    return (
        <>
        <img
        className="homie"
        src={plant}
        alt="BirdImage"
        style={{ position: "fixed", height: "400px", marginTop: "18rem" }}
      />
      <h1>Ups! <br /> Page not found!</h1>
      </>
    )
}

export default NotFound;