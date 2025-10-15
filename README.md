<h1 align="center">🤖 SubSpace Chatbot – Full-Stack Real-Time AI Chat Application</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React-%2361DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Backend-Nhost%20%7C%20Hasura-orange?style=for-the-badge&logo=hasura&logoColor=white" />
  <img src="https://img.shields.io/badge/Orchestration-n8n-blue?style=for-the-badge&logo=n8n&logoColor=white" />
  <img src="https://img.shields.io/badge/AI-OpenRouter-4B0082?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Deployment-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" />
</p>

---

## 📖 Project Overview

**SubSpace Chatbot** is a **modern full-stack real-time chatbot application**, built as part of a full-stack internship assessment.  

It demonstrates proficiency in building **secure, scalable, and dynamic web applications** by combining powerful backend services, real-time communication, and AI-driven responses.

This project integrates **Nhost, Hasura, n8n**, and **OpenRouter** APIs with a React frontend, enabling real-time messaging and role-based security in a production-ready architecture.

---

## ✨ Key Features

- ⚡ **Real-Time Communication**  
  Uses **GraphQL subscriptions** to deliver instant chat updates without refreshing the page.

- 🔐 **Secure Authentication**  
  Implements **email-based login** using Nhost Auth for a fully managed and secure user system.

- 🧠 **AI-Powered Responses**  
  Integrates with **OpenRouter API** to generate intelligent chatbot replies, with business logic handled securely on the backend.

- 🧑‍💻 **Role-Based Security**  
  Uses **Hasura Row-Level Security (RLS)** to ensure users can only read/write their own chat data.

- 🌐 **Full-Stack Integration**  
  Uses **n8n** as an orchestrator between the frontend, database, and third-party APIs for a robust data flow.

---

## 🧠 Tech Stack

- 🧭 **Frontend:** React, Vite  
- 🛠 **Backend:** Nhost, Hasura, n8n, OpenRouter  
- 💻 **Languages:** JavaScript, GraphQL  
- ☁️ **Deployment:** Netlify

---

## 🧰 Project Setup

### 1️⃣ Clone the Repository

`bash
git clone https://github.com/Aditya0254-singh/Subspace-chatbot.git
cd Subspace-chatbot`

### 2️⃣ Install Dependencies
`bash
npm install`

### 3️⃣ Configure Environment Variables

Create a .env file in the root directory and add:

`ini
VITE_NHOST_SUBDOMAIN=noodbonidjwqpyyhkkas
VITE_NHOST_REGION=ap-south-1`


Make sure these match your Nhost project settings.

### 4️⃣ Run the Application

`bash
npm run dev`


The app will be available at:
👉 http://localhost:5173

---

## 🚀 Future Enhancements

- ✅ Integration with multiple AI models for richer responses

- 💬 Group chat functionality with presence indicators

- 🌐 Serverless functions for custom backend logic

- 🧠 Enhanced role-based permissions for admin/moderator features

---

## 📝 Notes

- Requires Node.js v18+ and npm.

- Ensure your Nhost project, database, and Hasura actions are configured properly.

- OpenRouter API key must be valid and securely stored on the backend.

---

## 👨‍💻 Author
Aditya Singh
- [📧Email](adityasinghgzp609@gmail.com)

- [💼 LinkedIn](https://www.linkedin.com/in/aditya-singh-baa980257/)

- [🌐 GitHub](https://github.com/Aditya0254-singh)

--- 

<p align="center">⭐ If you found this project useful, please consider giving it a star!</p>

---
