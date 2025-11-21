# **Login & Signup Authentication UI**

This project is a simple and clean **Login + Signup + Forgot Password** interface built using:

* **HTML**
* **CSS**
* **JavaScript**
* Fully client-side
* Works on **Windows**, **Linux**, and **macOS**

You can open and run it easily using **Live Server** in Visual Studio Code.

---

## **📁 Project Structure**

```
loginProject/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

---

## **🚀 How to Run (Windows Users – VS Code + Live Server)**

### **1. Install VS Code**

Download and install Visual Studio Code from:
[https://code.visualstudio.com/]

---

### **2. Install the Live Server Extension**

1. Open VS Code
2. Go to **Extensions** (left sidebar)
3. Search for: **Live Server**
4. Install the one by **Ritwick Dey**

---

### **3. Open the Project Folder**

1. Extract `loginProject.zip`
2. Open VS Code
3. Click **File → Open Folder**
4. Select the extracted project folder

---

### **4. Start Live Server**

1. Open **index.html**
2. Right-click anywhere in the editor
3. Click **Open with Live Server**

Your default browser will open the UI at:

```
http://127.0.0.1:5500/
```

(or similar port)

---

## **🔐 Password Requirements (Signup)**

User passwords must:

* Contain **at least 1 number**
* Contain **at least 1 special character**
  Allowed: `! @ # $ % ^ & * ( )`
* Be **8 to 32 characters long**

Regex used:

```
/^(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,32}$/
```

---

## **📧 Email Validation**

Both Login and Signup check for valid email formatting using:

```
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

---

## **👁 Show / Hide Password Feature**

Every password field has a toggle button:

* “Show” → reveals password
* “Hide” → masks it again

---

## **🧩 Features**

✔ Login form
✔ Signup form with password rules
✔ Confirm password matching
✔ Show/Hide password buttons
✔ Forgot-password modal
✔ Email & password validation
✔ Fully responsive design
✔ Works directly with Live Server
✔ Can be connected to any backend easily

---

## **🛠 Future Enhancements (Optional)**

* Backend integration (Node.js / Firebase / Supabase)
* LocalStorage-based authentication
* Dark mode
* Animations
* Toast notifications

---

## **📄 License**

This project is free to use, modify, and integrate into your applications.

---