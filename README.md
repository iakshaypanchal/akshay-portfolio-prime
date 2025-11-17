# 🚀 Modern Portfolio - Akshay Panchal

A stunning, premium portfolio website with **Apple-inspired design** featuring advanced animations, glassmorphism, and interactive elements. Built with **React**, **Vite**, and cutting-edge CSS techniques.

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## ✨ Features

### 🎨 **Visual Excellence**
- **Animated Gradient Background** - Floating colorful orbs with smooth motion
- **Glassmorphism UI** - Frosted glass cards with backdrop blur
- **Custom Cursor** - Interactive cursor with sparkle particle trail
- **Loading Animation** - Stunning logo reveal on first visit
- **Theme Toggle** - Seamless dark/light mode with persistence

### 🎭 **Advanced Animations**
- **Typing Effect** - Typewriter animation for hero section
- **3D Skill Icons** - Floating icons that rotate and spin on hover
- **Count-Up Stats** - Animated achievement counters
- **Ripple Effects** - Material Design micro-interactions
- **Scroll Animations** - Smooth reveal effects throughout

### 🚀 **Interactive Elements**
- **Scroll Progress Bar** - Visual feedback on page position
- **Back to Top Button** - Quick navigation with bounce animation
- **Enhanced Section Dividers** - Gradient lines with shimmer effects
- **Magnetic Hover** - Cursor expands near interactive elements
- **Smooth Scrolling** - Buttery smooth navigation

### 📱 **Fully Responsive**
- Mobile-first design
- Adaptive layouts for all screen sizes
- Touch-optimized interactions
- Progressive enhancement

---

## 🎯 What Makes This Portfolio Special

✅ **12+ Premium Features** - Loading screen, stats counter, custom cursor, ripple effects, and more  
✅ **Apple-Inspired Design** - Clean, minimal, professional aesthetic  
✅ **Glassmorphism** - Modern frosted glass UI throughout  
✅ **Dark Mode** - Complete dark theme with smooth transitions  
✅ **Advanced Animations** - 3D transforms, particles, and smooth transitions  
✅ **Production Ready** - Optimized, performant, and SEO-friendly  

---

## ✉️ Contact Form – Google Sheet Integration

### **Apps Script (serverless backend)**

```js
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const ss = SpreadsheetApp.openByUrl("YOUR_SHEET_URL");
    const sheet = ss.getSheetByName("Personal-Portfolio");

    sheet.appendRow([
      new Date(),
      data.name,
      data.message
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: err })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
