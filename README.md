# Personal Portfolio – React + Vite (Apple-Inspired UI)

A modern, minimal, Apple-styled personal portfolio built with **React**, **Vite**, and custom CSS inspired by **macOS Sonoma & Apple.com**.  
Includes a fully functional **contact form integrated with Google Sheets** using Apps Script (no backend server required).

---

## 🚀 Tech Stack

### **Frontend**
- React 18  
- Vite  
- PrimeIcons (icons only)  
- Vanilla CSS (custom Apple design system)  
- IntersectionObserver scroll animations  
- Custom Apple-style UI components

### **Contact Form Backend**
- Google Apps Script Web App  
- Google Sheets as database  
- JSON POST handler (no external server)

---

## 📦 Features

### **🍏 Apple-Inspired Design**
- macOS login-style centered avatar  
- Soft, floating cards with depth shadows  
- Glass-blur contact form panel  
- Smooth fade-in scroll animation  
- Rounded inputs styled like macOS Sonoma  
- Horizontal project slider inspired by Apple TV

### **📂 Sections**
- **About** – avatar, name, title, summary, social icons  
- **Skills** – responsive grid  
- **Experience** – timeline cards  
- **Projects** – horizontal scroll carousel  
  - drag scroll with inertia  
  - snap scrolling  
  - left/right buttons  
- **Contact** – Apple-glass input panel + Google Sheets integration

### **📱 Fully Responsive**
- Mobile-first layout  
- Auto-scaled cards  
- Projects carousel adapts nicely on touch screens  

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
