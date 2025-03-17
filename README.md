## SOCIAL NETWORK API ##
Social Network API
Overview
This project implements a robust API framework for social networking applications using MongoDB, a NoSQL database solution particularly well-suited for handling large volumes of unstructured data. The implementation leverages Mongoose ODM to facilitate seamless data modeling and validation within the MongoDB environment.
Technological Foundation
The API is constructed using the following technologies:

Express.js: Provides the routing infrastructure
MongoDB: Serves as the underlying database system
Mongoose ODM: Facilitates structured data modeling and database interactions
JavaScript Date Library: Implements proper formatting for timestamps

Core Functionality
This API supports comprehensive social networking capabilities through the following features:
User Management

Creation, retrieval, modification, and deletion of user profiles
User authentication via unique usernames and validated email addresses
Customizable profile information

Social Connectivity

Friend relationship management
Bidirectional friend connections between users
Friend count metrics

Content Sharing

Creation, retrieval, modification, and deletion of thought posts
Character-limited thought content (280 characters)
Timestamp tracking and formatting

Interactive Engagement

Reaction capabilities on thought content
Username attribution for reactions
Reaction count metrics

Data Architecture
The API employs a sophisticated data structure with three principal components:
User Model

username: String (unique, required, trimmed)
email: String (required, unique, validated)
thoughts: Array of references to Thought documents
friends: Self-referential array of User references
Virtual: friendCount - dynamic calculation of friend connections

Thought Model

thoughtText: String (required, 1-280 characters)
createdAt: Date (timestamped, formatted)
username: String (required)
reactions: Array of nested Reaction documents
Virtual: reactionCount - dynamic calculation of reactions

Reaction Schema

reactionId: MongoDB ObjectId
reactionBody: String (required, 280 character maximum)
username: String (required)
createdAt: Date (timestamped, formatted)

API Routes Documentation
User Routes
GET /api/users - Retrieve all users
GET /api/users/:userId - Retrieve specific user with populated thought and friend data
POST /api/users - Create new user
PUT /api/users/:userId - Update user information
DELETE /api/users/:userId - Remove user and associated thoughts
Friend Management Routes
POST /api/users/:userId/friends/:friendId - Add friend to user's network
DELETE /api/users/:userId/friends/:friendId - Remove friend from user's network
Thought Routes
GET /api/thoughts - Retrieve all thoughts
GET /api/thoughts/:thoughtId - Retrieve specific thought
POST /api/thoughts - Create thought and associate with user
PUT /api/thoughts/:thoughtId - Update thought content
DELETE /api/thoughts/:thoughtId - Remove thought
Reaction Routes
POST /api/thoughts/:thoughtId/reactions - Add reaction to thought
DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove reaction from thought
Implementation Process
This project was developed through a systematic approach:

Database configuration and connection establishment
Schema design and model implementation
Controller logic development for data operations
Route configuration for API endpoints
Comprehensive testing and validation

Usage Instructions
To implement this API:

Clone the repository
Execute npm install to install dependencies
Ensure MongoDB is operational on your system
Launch the server with npm start
Use Insomnia or similar tools to test API endpoints

Development Insights
The architectural decisions in this project prioritize scalability and performance, key considerations for social networking applications that may need to handle substantial user growth and data volume. The NoSQL approach provides flexibility for evolving data requirements while maintaining structural integrity through Mongoose validation.

Video Demonstration
A comprehensive walkthrough video demonstrating the API's functionality is available at: [https://drive.google.com/file/d/1B04dh6RtPMW5eQpnZu-yux5_TbDFch69/view]
Repository
GitHub Repository: [https://github.com/Myrmecology/SOCIAL-NETWORK-API]

Happy coding everyone 