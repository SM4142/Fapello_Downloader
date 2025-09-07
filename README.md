# 🎯 Fapello Image Downloader

A **Node.js CLI tool** to download images from [Fapello](https://fapello.com/) directly to your local machine via terminal.

---

## 🚀 Features

- Download images from Fapello by profile URL
- Specify start and end image numbers
- Automatically creates folders and saves images
- Lightweight and easy to use from CLI

---

## 💾 Installation

1. **Clone the repository**


git clone https://github.com/your-username/fapello-downloader.git
cd Fapello_Downloader



2. **Install dependencies**


npm install


---

## 🖥 Usage

Run the application:


npm start


### Step-by-Step Example

1️⃣ Enter the Fapello URL:


Write the url(https://fapello.com/...): https://fapello.com/abc/


2️⃣ Specify the starting image number:


Where should we start to install? 1


3️⃣ Specify the ending image number:


Where should we end to install? 30


---

## 📂 Terminal Output Example


./gallery/abc-1-30/abc1.jpeg
./gallery/abc-1-30/abc2.jpeg
./gallery/abc-1-30/abc3.jpeg
...
./gallery/abc-1-30/abc30.jpeg


---

## 🗂 Folder Structure


fapello-downloader/
├─ gallery/
│  └─ abc-1-30/
│     ├─ abc1.jpeg
│     ├─ abc2.jpeg
│     └─ ...
├─ dist/
├─ src/
└─ package.json


---

## ⚠️ Notes

- Make sure **Node.js** is installed
- CLI only; no GUI
- Folder and file names are automatically generated based on the profile URL and image numbers
````
