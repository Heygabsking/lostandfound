import "./about.css";
function About() {
  return (
    <div className="aboutPage">

      <div className="aboutOverlay">

        <h1>About Lost & Found</h1>

        <p className="aboutIntro">
          The Lost and Found application is a platform designed to help
          people easily report lost items and reconnect with their
          belongings. Our system allows users to report missing items,
          browse items that have been found, and claim ownership in a
          simple and secure way.
        </p>

        <div className="aboutSections">

          <div className="aboutBox">
            <h2> Our Mission</h2>
            <p>
              Our mission is to simplify the process of recovering lost
              items by connecting people through a digital platform.
              We aim to reduce the frustration of losing important
              belongings and improve the chances of successful recovery.
            </p>
          </div>

          <div className="aboutBox">
            <h2>What We Offer</h2>
            <p>
              Users can report lost items, upload details about
              found items, and verify ownership through a simple
              claim process. The platform ensures that information
              is organized and accessible for everyone.
            </p>
          </div>

          <div className="aboutBox">
            <h2>Why Use Our Platform</h2>
            <p>
              Losing items can be stressful. Our platform provides
              a reliable system that improves communication between
              individuals who have lost items and those who have
              found them.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;