# Backend Development Basics

A beginner-friendly repository covering Node.js and Express fundamentals including routes, middleware, HTTP handling, and file system operations.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- npm

### Installation
```bash
git clone https://github.com/ShrutiPatel263/Backend_Developement_Basics.git
cd Backend_Developement_Basics
npm install
npm start
```

Server runs on `http://localhost:3000`

## 📚 What's Covered

- **Basic Express Server Setup**
- **Routing & Route Parameters**
- **Middleware Functions**
- **HTTP Methods** (GET, POST, PUT, DELETE)
- **File System Operations**
- **Request/Response Handling**
- **Error Handling**

## 🛠 Example Usage

```javascript
const express = require('express');
const app = express();

// Basic route
app.get('/api/users', (req, res) => {
  res.json({ message: 'Hello Backend!' });
});

// Route with parameter
app.get('/api/users/:id', (req, res) => {
  res.json({ userId: req.params.id });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

## 🧪 Testing
Use Postman, curl, or browser to test endpoints:
```bash
curl http://localhost:3000/api/users
```


## 👨‍💻 Author
**Shruti Patel** - [@ShrutiPatel263](https://github.com/ShrutiPatel263)

---
⭐ Star this repo if it helps you learn backend development!
