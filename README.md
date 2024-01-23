# Twitter Backend

This is a simple Twitter backend application built using JavaScript. It provides functionality for creating tweets, toggling likes on tweets, and commenting on tweets.

## Prerequisites
- Node.js installed on your machine
- MongoDB installed and running

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Harshitshukla0208/Twitter_Backend
   ```

2. Navigate to the project directory:

   ```bash
   cd twitter-backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and configure the following variables:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost/twitter
   ```

   Adjust the values based on your preferences and MongoDB setup.

## Running the Application

1. Start the server:

   ```bash
   npm start
   ```

   This will start the server on the specified port (default is 3000).

2. Access the API at `http://localhost:3000`.

## API Endpoints

### 1. Create a Tweet

- **Endpoint:** `POST /tweets`
- **Request Body:**
  ```json
  {
    "author": "Your Name",
    "content": "Your tweet content"
  }
  ```
- **Response:**
  ```json
  {
    "id": "unique_tweet_id",
    "author": "Your Name",
    "content": "Your tweet content",
    "likes": 0,
    "comments": []
  }
  ```

### 2. Toggle Like on a Tweet

- **Endpoint:** `PUT /tweets/:id/like`
- **Response:**
  ```json
  {
    "id": "unique_tweet_id",
    "author": "Your Name",
    "content": "Your tweet content",
    "likes": 1, // or updated like count
    "comments": []
  }
  ```

### 3. Comment on a Tweet

- **Endpoint:** `POST /tweets/:id/comment`
- **Request Body:**
  ```json
  {
    "commenter": "Your Name",
    "text": "Your comment"
  }
  ```
- **Response:**
  ```json
  {
    "id": "unique_tweet_id",
    "author": "Your Name",
    "content": "Your tweet content",
    "likes": 0,
    "comments": [
      {
        "id": "unique_comment_id",
        "commenter": "Your Name",
        "text": "Your comment"
      }
    ]
  }
  ```

Feel free to explore and enhance the functionality of this Twitter backend. Happy coding!