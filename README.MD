# 💻 Criminal IP Website Data Extractor (Premium Feature Helper)

This tool allows you to extract structured text data from **Criminal IP's premium website scan results**, which are normally harder to export. It parses all relevant blocks on the page (IP, SSL, HTTP headers, etc.), formats the content in a clean and readable layout, and downloads it as a `.txt` file.

---

## 🚀 Features

- Parses all IP blocks on the page
- Organizes data into sections:
  - IP Information
  - SSL Certificate Details
  - HTTP Headers / Server Info
- Adds clean formatting with titles, bullet points, and separators
- Saves output as a downloadable `.txt` file

---

## 📌 Use Case

This script helps users extract **premium feature data** from [Criminal IP](https://www.criminalip.io) without needing to manually copy-paste or take screenshots. Perfect for:

- Threat intelligence research  
- SOC investigations  
- Bug bounty recon  
- CTF recon data logging  

---

## 🛠️ How to Use

1. **Open Criminal IP's website scan result page** with IP blocks shown.
2. **Open Developer Console** in your browser:
   - Chrome: `Ctrl + Shift + J` (Windows/Linux) or `Cmd + Option + J` (Mac)
3. **Paste the following script** into the console: `https://github.com/pwner-jw/download-criminalip-data/blob/main/download.js`
