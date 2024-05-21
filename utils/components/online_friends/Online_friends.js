// "use client";
import "./online_friends.css";
import "./friends/Friends.js";

export default function Navbar() {
  return (
    <div className="homepage">
      <div className="login_friends">
        <h1>online friends</h1>
      </div>
      <div className="posts">
        <h1>post</h1>
        <Fruends />
      </div>
    </div>
  );
}
