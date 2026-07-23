import { useState } from 'react';

const userData = {
  name: "Anthony Daniel Bautista",
  avatarUrl: "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-1/508823807_1413913849746634_7255994139203695737_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1025&ctp=s200x200&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHvyA-PLPv7n2XwkyeUpIiHD9gVMa6_4vAP2BUxrr_i8CIC3c98vsmxyvm9Nzqy5Q6_xzVGy9UtudJ3GzNEE9X7&_nc_ohc=GIyVnSUcIEUQ7kNvwHSlWvi&_nc_oc=AdoTV2Fd5XSPxzuc1iVWuYSPmTRlTZeKaFazzvStp0tKjNrC_fF7RkqvgK4_unAyXx0&_nc_zt=24&_nc_ht=scontent.fmnl30-2.fna&_nc_gid=Oxr9kOvuH3LcdL9sb77_bQ&_nc_ss=7b2a8&oh=00_AQBYpwefCwfU2PFFig1q3fk8d7XHoZAzibiAWkJVeULHGA&oe=6A682E79", // sample avatar
  bio: "Allo, coding isn't really my strongest skill, but I'm trying to make it work..",
  skills: ["React", "JavaScript", "HTML", "CSS", "Python", "PHP"],
  isOnline: true,
  lastUpdated: "1 minute ago",
};

// <UserProfileCard user={userData} />

function UserProfileCard({ user }) {
  const [messageCount, setMessageCount] = useState(0);
  const [isFavorited, humanFavorited] = useState(false);

  function handleSendMessage() {
    setMessageCount(messageCount + 1);
  }

  function handleReset() {
    setMessageCount(0);
  }

  function nothumanfavorited() {
    humanFavorited(!isFavorited);
  }

  return (
    <div className="profile-card">
      <img src={user.avatarUrl}/>

      <h2>{user.name}</h2>

      <label htmlFor="bio">Bio</label>
      <p id="bio">{user.bio}</p>

      <h3>Skills</h3>
      <ul>
        {user.skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <div style={{color: 'blue', fontWeight: 'bold'}}>
        Messages sent: {messageCount}
      </div>

      {user.isOnline ? <span>🟢 Online</span> : <span>⚪ Offline</span>}

      <button onClick={handleSendMessage}>Send Message</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={nothumanfavorited}>
      {user.isOnline && (isFavorited ? <span>★ Favorited</span> : <span>☆ Favorite</span>)}
      </button>
      <p className="footer">Card last updated: {user.lastUpdated}</p>
    </div>
    
  );
}

export default function App() {
  return (
    <div>
      <UserProfileCard user={userData} />
    </div>
  );
}