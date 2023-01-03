import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <h1>THE ART GALLERY</h1>
      <div className="text-container">
        <p className="top-text">
          As an academic art institution, research and education are key to the
          Museums. Through art, the museums create powerful opportunities for
          the production, presentation, and interpretation of original
          scholarship. By offering unparalleled access to our collections and
          resources, the museums foster new approaches to the study and
          appreciation of art.
        </p>
        <h1>Academic and Public Programs</h1>
        <p className="bottom-text">
          The Museums are dedicated to creating transformative teaching and
          learning experiences for students, faculty, and the public. The
          museums’ comprehensive collections are put to work as vital teaching
          instruments that enhance critical thinking. All of the museums’ spaces
          have been designed to facilitate teaching and learning through art.
          With innovative programs tailored to diverse audiences, the museums
          are a site for all to convene and discover the power of object-based
          learning.
        </p>
      </div>
    </div>
  );
};

export default Home;
