/* =========================
   GENERAL
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f5f6fa;
    color: #222;
}

a {
    text-decoration: none;
}


/* =========================
   HEADER
========================= */

header {
    background: #2874f0;
    color: white;
    padding: 15px 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
}

.logo a {
    color: white;
    font-size: 28px;
    font-weight: bold;
}

nav {
    display: flex;
    gap: 25px;
}

nav a,
.header-actions a {
    color: white;
    font-weight: bold;
}

.header-actions {
    display: flex;
    gap: 18px;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 50px 20px;
    background: linear-gradient(135deg, #2874f0, #6c5ce7);
    color: white;
}

.hero-content h1 {
    font-size: 48px;
    margin-bottom: 20px;
}

.hero-content p {
    font-size: 20px;
    margin-bottom: 30px;
}

.btn {
    display: inline-block;
    background: white;
    color: #2874f0;
    padding: 13px 30px;
    border-radius: 25px;
    font-weight: bold;
}

.btn:hover {
    transform: scale(1.05);
}


/* =========================
   SECTIONS
========================= */

.categories,
.featured-products,
.features {
    padding: 50px