const Home = () => {
  return (
    <div className="main-content">
      <div className="home-image">
        <img
          className="background"
          src={window.location.origin + "/images/background.jpg"}
          alt="flower"
        />
        <div className="announcement">Spring arrivals are here</div>
      </div>
    </div>
  );
};

export default Home;
