* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: #0f0f1a;
    color: white;
}

header {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    background: #111;
    position: sticky;
    top: 0;
}

.logo {
    font-weight: bold;
    font-size: 1.2rem;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

nav a {
    text-decoration: none;
    color: white;
}

.hero {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #1f1c2c, #928dab);
    text-align: center;
}

.hero h1 {
    font-size: 3rem;
}

.hero button {
    margin-top: 20px;
    padding: 12px 24px;
    background: #ff4b91;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 4px;
}

.section {
    padding: 80px 40px;
    text-align: center;
}

.dark {
    background: #1a1a2e;
}

.cards {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
    flex-wrap: wrap;
}

.card {
    background: #222;
    padding: 20px;
    border-radius: 8px;
    width: 250px;
}

form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
}

input, select, button {
    padding: 10px;
    border-radius: 4px;
    border: none;
}

button {
    background: #ff4b91;
    color: white;
    cursor: pointer;
}

footer {
    text-align: center;
    padding: 20px;
    background: #111;
}
.hero {
  position: relative;
  text-align: center;
  color: white;
}

.hero img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.hero h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3em;
  text-shadow: 2px 2px 5px black;
}

.hero p {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5em;
  text-shadow: 2px 2px 5px black;
}
body {
  font-family: 'Arial', sans-serif;
  background-color: #111; /* dark background */
  color: #fff; /* text color */
}

a {
  color: #ff4081; /* neon pink links */
  text-decoration: none;
}

button {
  background-color: #ff4081;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
}
.artist-grid {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.artist-card {
  background-color: #222;
  padding: 20px;
  border-radius: 10px;
  width: 150px;
  text-align: center;
}
