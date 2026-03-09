# Full Stack Portfolio Website

A production-ready full stack portfolio website where visitors can explore my projects and send messages through a contact form.  
The form submissions are processed through a REST API and stored securely in a cloud database.

This project demonstrates full-stack development, backend API integration, database connectivity, and cloud deployment.

---

## Live Application

Frontend Website  
https://vineela-portfolio.netlify.app

Backend API  
https://portfolio-backend-cd14.onrender.com

---

## System Architecture

User Browser  
↓  
Frontend (HTML / CSS / JavaScript)  
↓  
Backend API (Node.js + Express.js)  
↓  
Database (MongoDB Atlas)

The frontend sends contact form data to the backend API.  
The backend validates the request and stores the message in MongoDB.

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js
- REST API

### Database
- MongoDB Atlas

### Deployment
- Netlify (Frontend Hosting)
- Render (Backend Hosting)
- MongoDB Atlas (Cloud Database)

### Version Control
- Git
- GitHub

---

## Features

- Responsive portfolio website
- Contact form connected to backend API
- Backend request validation
- Data stored in MongoDB cloud database
- Fully deployed full-stack application
- Real-time form submission storage

## API Documentation

### Send Contact Message

Endpoint

POST /api/contact/send

Example Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Interested in working together."
}
