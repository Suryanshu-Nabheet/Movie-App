# React Native Movie App

## Features
- **Splash Screen** with a themed picture.
- **Home Screen** displaying movies fetched from the TVMaze API.
- **Search Screen** with functionality to search and display movies.
- **Details Screen** providing detailed information about selected movies.
- **Netflix-inspired UI** for an engaging user experience.

---

# Technologies Used

- ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) **React.js**  
- ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) **HTML5**  
- ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) **CSS3**  
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) **JavaScript**


- **React Native Components**: For building UI (View, Text, Image, FlatList).
- **API Integration**: Fetch API for connecting with TVMaze endpoints.
- **State Management**: `useState` and `useEffect` for handling app state.
- **Navigation**: React Navigation for stack and bottom tab navigation.
- **Styling**: Styled components and StyleSheet for designing layouts.

---

## API Endpoints
- **All Movies**:  
  `https://api.tvmaze.com/search/shows?q=all`
- **Search Movies**:  
  `https://api.tvmaze.com/search/shows?q=${search_term}`

---

## Setup Instructions
1. Clone the repository:  
   ```bash
   git clone <repository_url>

Navigate to the project directory:
bash
Copy
Edit
cd project-directory
Install dependencies:
bash
Copy
Edit
npm install
Run the app:
bash
Copy
Edit
npx react-native run-android
OR
bash
Copy
Edit
npx react-native run-ios

