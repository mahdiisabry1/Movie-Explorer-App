🎬 Movie Explorer App
A sleek and responsive React application that uses the TMDB API to explore trending and upcoming movies. Users can search, view detailed information, and manage a personalized favorites list — all wrapped in a modern UI with light/dark mode support.

🚀 Features

🔥 Display trending movies
🔍 Search functionality with instant results
📽️ Upcoming movie slideshow with smooth animations
📄 Popup modal for full movie details
🌗 Light and dark theme toggle
❤️ Add/remove favorites (saved in localStorage)
⚡ Fast, responsive, and animated UI

🛠 Tech Stack

React – Frontend framework
TMDB API – Movie database
Material UI (MUI) – Styling and components
Framer Motion – UI animations
React Context API – State management
LocalStorage – Persistent data storage

🧪 Under Development

🎨 Clean UI improvements for better responsiveness and aesthetics
✨ Advanced filtering (by genre, rating, release year)
📦 Integration of pagination for search and trending results
🔐 Authentication for syncing favorites with cloud storage
📊 Movie stats, trailers, and user reviews display

✨ Future Enhancements
Add movie trailer playback
User profile and history tracking
Create movie playlists
Integrate user reviews and community ratings

Client = docker run -p 5173:5173 \  -v $(pwd):/react-app \ -v /react-app/node_modules \ movie-explorer-app:dev
