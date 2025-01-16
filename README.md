# React Native Movie App

## Features
- **Splash Screen** with a themed picture.
- **Home Screen** displaying movies fetched from the TVMaze API.
- **Search Screen** with functionality to search and display movies.
- **Details Screen** providing detailed information about selected movies.
- **Netflix-inspired UI** for an engaging user experience.

---

## Skills Utilized
<div>
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" height="50" style="margin-right: 10px;">

  
  <img src="https://reactnative.dev/img/header_logo.svg" alt="React Native Logo" height="50">
</div>

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

