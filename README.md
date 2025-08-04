# 🛍️ Shoply – Full Stack E-commerce Application

Shoply is a full-featured modern e-commerce web application built with Next.js (frontend) and ASP.NET Core Web API (backend). It features dynamic product listings, product search, cart functionality, and more, with clean design powered by Material UI.

---

# 📌 Tech Stack
Frontend: Next.js (App Router), Material UI

Backend: ASP.NET Core Web API, C#, Entity Framework Core

Database: SQL Server

HTTP Client: Fetch API

---

# 🎯 Key Features
🔹 Frontend (Next.js)
Dynamic product rendering via REST API

Product search (/api/Product/search?id=)

Product details page (/product/[id])

Responsive UI using MUI

Top-rated products on home page

Context-based loading and cart state

Cross-origin enabled for frontend requests

---

# 🛠️ Getting Started

📁 Folder Structure (Frontend)
```
src/app/
├── about/
│   └── page.jsx
├── cart/
│   ├── CartContext.js
│   ├── CartPage.jsx
│   └── page.jsx
├── components/
│   ├── Card.jsx
│   ├── DetailsCard.jsx
│   ├── Footer.jsx
│   └── Header.jsx
├── contactus/
│   └── page.jsx
├── context/
│   ├── LoadingContext.js
│   └── LoadingContext.jsx
├── pages/
│   └── Product.jsx
├── product/
│   └── [id]/
│       └── page.jsx
```
---
🔧 Backend Setup
Requirements
.NET SDK 7.0 or later

---

# 💻 Running Frontend Locally
Clone frontend repo and install dependencies:
```
git clone https://github.com/SachinthaNimesh370/Shoply-Nextjs.git
cd Shoply-Nextjs
npm install
```

Start development server:
```
npm run dev
```
Open the browser:
``
http://localhost:3000
``
# 🧪 API Testing (Optional)

/api/Product/all

/api/Product/search?id=1

/api/Product/{id}

