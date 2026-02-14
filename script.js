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
