import profileImage from "../assets/hero-img-1.jpg";
import './Home.css';

export default function Home() {
  return (
    <div className="hero d-flex align-items-center">
      <div className="container text-center">
        <h1 className="display-4">Hey, I'm Amanuel</h1>
        <p className="lead">A Full Stack Web Developer</p>
        <p className="hero-description">
          I build responsive, high-performance web application with modern
          technologies.
        </p>
        <a href="" className="btn btn-primary btn-sm">
          View My Work
        </a>
      </div>

      <div>
        <img
          className="img-fluid mb-3 mb-lg-0 profile-photo"
          src={profileImage}
          alt="self-photo"
        />
      </div>
    </div>
  );
}
