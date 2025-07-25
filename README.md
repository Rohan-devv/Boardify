# 🚀 Boardify – The Ultimate Image Sharing Platform 📸  
_Where Creativity Meets Simplicity!_ 🖌️💡

Boardify is a modern, full-stack image-sharing platform built using Node.js, Express, MongoDB, and EJS. Whether you're an artist, designer, or casual creator, Boardify gives you the tools to showcase your visuals in a clean and fast interface.

---


### 📰 Feed Page:-- posts of every account 
![Feed Page](public/screenshots/Feed%20page.png)

### 🧑‍💼 Profile Page
![Profile Page](public/screenshots/profile%20page.png)


### 👤 Personal Feed of your profile
![Personal Feed](public/screenshots/Personal%20Feed.png)

### 📝 Register Page
![Register Page](public/screenshots/Register%20page.png)

### 🔐 Login Page
![Login Page](public/screenshots/Login%20page.png)


## 🌟 Features

- 🔐 **User Authentication** – Secure sign-up and login using Passport.js.
- 🖼️ **Image Uploads** – Add captions and upload images via Multer.
- 📰 **Live Feed** – Browse and discover posts from users around the world.
- 👤 **User Profiles** – Manage your posts, update info, and control visibility.
- 💻 **Responsive UI** – Mobile-first, powered by TailwindCSS.
- 🧱 **Protected Routes** – Users can only access what they’re permitted to.
- ⚡ **Performance** – Lightweight frontend with fast server-side rendering.

---

## 🛠️ Tech Stack

### 🌐 Frontend
- `HTML5` – Semantic structure
- `TailwindCSS` – Fast and responsive styling
- `Vanilla JavaScript (ES6+)` – Dynamic frontend interactivity
- `EJS` – Server-side templating engine

### ⚙️ Backend
- `Node.js` – Runtime environment
- `Express.js` – Robust backend framework
- `MongoDB` & `Mongoose` – NoSQL database + schema modeling
- `Passport.js` – Authentication middleware
- `Multer` – File uploads middleware for handling image uploads
- `dotenv` – Environment configuration

---

## 🌐 Live Demo

🚀 **[Visit Live App Here](https://boardify-1.onrender.com)**  
## 🧪 Test Credentials

📛 **Username:** `xyz`  
🔒 **Password:** `12345`

> Use these credentials to log in and explore the app without signing up!



---

## 🚀 Getting Started (For Local Development)

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/boardify.git
cd boardify

# 2. Install dependencies
npm install

# 3. Create a .env file in the root directory and add:
PORT=3000
MONGO_URI=your-mongodb-uri
SESSION_SECRET=your-secret-key

# 4. Start the server
npm run dev
