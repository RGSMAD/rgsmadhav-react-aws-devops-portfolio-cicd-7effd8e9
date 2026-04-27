# 🚀 AWS DevOps Portfolio – React Application

A production-ready **React portfolio website** deployed on AWS using modern **DevOps practices**, including CI/CD automation, cloud hosting, and global content delivery.

🌐 **Live Website:** https://rajoligirisaimadhav.online

---

## 📌 Project Overview

This project showcases a real-world **AWS + DevOps implementation** where a React application is automatically built and deployed to AWS infrastructure using a CI/CD pipeline.

It demonstrates:
- Automated deployments using GitHub Actions  
- Scalable static website hosting on AWS  
- Global content delivery via CDN  
- Custom domain configuration  

---

## 🛠️ Tech Stack

### ☁️ AWS Services
- Amazon S3 (Static Website Hosting)  
- Amazon CloudFront (Content Delivery Network)  
- Amazon Route 53 (DNS Management)  
- AWS IAM (Access Control)  

### ⚙️ DevOps Tools
- Git  
- GitHub  
- GitHub Actions (CI/CD Pipeline)  

### 💻 Frontend
- React.js  
- HTML5  
- CSS3  
- JavaScript

---

## 🏗️ Architecture

```
User → Route 53 → CloudFront → S3 Bucket
                         ↓
                GitHub Actions (CI/CD)
                         ↓
                  Auto Deployment
```

---

## ⚡ Features

- ✅ Fully automated CI/CD pipeline using GitHub Actions  
- ✅ Static website hosting on AWS S3  
- ✅ Fast global delivery using CloudFront CDN  
- ✅ Custom domain integration with HTTPS  
- ✅ Secure access with IAM roles and policies  
- ✅ Version-controlled deployments via GitHub  

---

## 🚀 CI/CD Workflow

1. Code is pushed to the GitHub repository  
2. GitHub Actions workflow is triggered  
3. React application is built  
4. Build files are deployed to S3 bucket  
5. CloudFront cache is invalidated  
6. Updated website is served globally  

---

## 📂 Project Structure

```
├── public/
├── src/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
└── README.md
```

---

## 🔐 Security Best Practices

- IAM roles follow least privilege principle  
- No hardcoded credentials in code  
- Sensitive data managed via GitHub Secrets  
- HTTPS enabled via CloudFront  

---

## 🧠 Learning Outcomes

- Implemented CI/CD pipeline using GitHub Actions  
- Deployed and managed applications on AWS  
- Configured CloudFront for performance optimization  
- Integrated custom domain using Route 53  
- Gained hands-on experience in DevOps workflows  

---

## 📸 Screenshots

> Add screenshots of your portfolio UI, AWS architecture, and CI/CD pipeline here

---

## 📬 Contact

**Rajoli Girisai Madhav**

- 🔗 LinkedIn: https://linkedin.com/in/rajoli-girisai-madhav  
- 💻 GitHub: https://github.com/rajoli-girisai-madhav  

---

## ⭐ Acknowledgements

This project is part of my journey transitioning into **AWS DevOps / Cloud Engineer roles**, focusing on real-world cloud deployment and automation.

---

## 📢 License

This project is open-source and available under the MIT License.
