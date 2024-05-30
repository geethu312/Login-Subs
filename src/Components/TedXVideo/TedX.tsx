import "bootstrap/dist/css/bootstrap.min.css";
import "./TedX.css";

function TedX() {
  return (
    <div className="container-tedX">
      <img src="TedX.jpg" alt="image1" className="img-fluid top-img" />
      <div className="row-tedX">
        <div className="col-sm-4">
          <img src="TedX.jpg" alt="image1" className="img-fluid" />
        </div>
        <div className="col-sm-4">
          <img src="TedX.jpg" alt="image2" className="img-fluid" />
        </div>
        <div className="col-sm-4">
          <img src="TedX.jpg" alt="image3" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default TedX;
