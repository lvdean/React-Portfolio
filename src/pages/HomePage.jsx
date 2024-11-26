import "../pages/HomePage.css";

export default function Home() {
  return (
    <div className="home-page">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&family=Poetsen+One&display=swap" rel="stylesheet" />
      <div className="welcome">
        <h1>Home Page</h1>
        <p>
          Welcome to the home page. This project was created using Vite and React.
        </p>
      </div>
      <i className="animation"></i>
    </div>
  );
}
