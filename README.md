🤖 Full-Stack Chatbot Application
A modern, real-time chatbot application built as a full-stack internship assessment. This project demonstrates proficiency in building secure, scalable, and dynamic web applications.

🚀 Key Features
-> Real-time Communication: Utilizes GraphQL subscriptions to provide instant, real-time message updates without needing to refresh the page.

-> Secure Authentication: Implements email-based authentication with a secure user system powered by Nhost Auth.

-> AI-Powered Responses: Integrates with the OpenRouter API to generate intelligent chatbot responses, with all business logic handled securely on the backend.

-> Role-Based Security: Employs Hasura's Row-Level Security (RLS) to restrict data access, ensuring users can only read and write their own chat data.

-> Full-Stack Integration: Demonstrates a complete backend-to-frontend pipeline, using n8n to orchestrate communication between the frontend, database, and third-party APIs.

💻 Tech Stack
-> Frontend: React, Vite

-> Backend: Nhost, Hasura, n8n, OpenRouter

-> Languages: JavaScript, GraphQL

-> Deployment: Netlify

⚙️ Getting Started
Follow these steps to set up and run the application in a local development environment.

**Prerequisites**
-> Node.js (v18 or higher)
-> npm
-> A Nhost project with the correct database and Action configurations (as outlined in the original assignment).

**Installation**
1. Clone the repository:
                     git clone [https://github.com/Aditya0254-singh/Subspace-chatbot](https://github.com/Aditya0254-singh/Subspace-chatbot)
                     cd Subspace-chatbot

2. Install dependencies:
                     npm install

3. Configure environment variables:
                     Create a .env file in the project root.
   
4. Add your Nhost subdomain and region to the .env file:
                     VITE_NHOST_SUBDOMAIN=noodbonidjwqpyyhkkas
                     VITE_NHOST_REGION=ap-south-1

5. Run the application:
                     npm run dev

**The application will be available at http://localhost:5173.**
