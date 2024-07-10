---
title: "My Home Server and Network Setup"
date: "Jun 28, 2024"
excerpt: "Join me as I share insights and experiences from building a network that supports continuous learning and experimentation in the tech world."
cover_image: "/blogs/server/server.jpg"
id: 2
---

### Introduction

Hello, tech enthusiasts! I'm Oswin Jerome, a passionate developer and technology aficionado. Today, I'd like to share the intricacies of my home server and network setup—a journey that has significantly enhanced my understanding of networking, server management, and home automation. This setup not only supports my day-to-day activities but also fuels my continuous learning and experimentation in the tech world.

## The Backbone of My Network

### TP-Link C6 Router

At the heart of my network lies the TP-Link C6 router, a reliable and robust device that ensures seamless connectivity across my home. This router provides a stable foundation for both wired and wireless connections, facilitating smooth communication between all the devices in my network.

### Inspiron 3252: The Gateway to the Internet

The Inspiron 3252 serves as the gateway to the public internet. This machine is more than just a server; it's the linchpin of my network. It runs an NGINX reverse proxy, which helps manage incoming and outgoing traffic, ensuring that my internal network remains secure while still allowing access to certain services from the outside world.

Additionally, the Inspiron 3252 hosts a virtual machine running Home Assistant OS, the brain behind my home automation. From controlling lights and fans to managing dynamic lighting for my computer table, Home Assistant OS integrates and automates various aspects of my home environment, making daily life more convenient and efficient.

### Dell T30 Server: The Workhorse

The Dell T30 server is a mid-end powerhouse running Ubuntu. This server leverages Docker to deploy multiple applications, streamlining the process of managing and updating software. Most of these apps are accessible only within my local network, providing essential services without exposing them to the internet. However, some apps are made accessible to the public via the Inspiron 3252's gateway and reverse proxy setup.

## Network Architecture Explained

### Overall Architecture

The architecture of my home network is designed to balance security, accessibility, and functionality. Here’s a high-level overview:

TP-Link C6 Router: Acts as the primary router, providing internet access to all devices and connecting them to the local network.
Inspiron 3252 Server: Serves as the gateway to the internet, managing traffic through NGINX reverse proxy, and running a virtual machine with Home Assistant OS for home automation.
Dell T30 Server: Hosts various applications using Docker, with most being accessible locally and some exposed to the internet via the Inspiron 3252.

### Detailed Breakdown

1. TP-Link C6 Router
   The TP-Link C6 router is the entry point for internet connectivity, distributing it to all devices on the network. It provides both wired and wireless connections, ensuring that every device in the house can communicate efficiently.

2. Inspiron 3252 Server
   The Inspiron 3252 plays a crucial role in maintaining the network’s integrity and functionality:

NGINX Reverse Proxy: This setup manages incoming requests, directing them to the appropriate services while keeping the internal network secure.
Virtual Machine with Home Assistant OS: Home Assistant OS handles all home automation tasks. It communicates with various smart devices, providing centralized control and automation for lights, fans, and more. 3. Dell T30 Server
The Dell T30 server, running Ubuntu, is the main workhorse for hosting applications:

Docker: Docker containers simplify application deployment and management. By isolating applications in containers, I can easily update, scale, and manage them without affecting the overall system.
Local and Public Apps: Most applications (like the DNS server, File server, AppWrite, qBittorrent, MySQL, MongoDB, and Plex Media Server) are accessible only within the local network. Some applications are accessible to the public via the reverse proxy on the Inspiron 3252, providing controlled access from the internet.
Overcoming Dynamic IP Challenges
One of the challenges I faced was dealing with a dynamic IP provided by my ISP. To overcome this, I wrote a Python script that updates my latest IP address to Cloudflare DNS using their API. This ensures that my services remain accessible from the internet, despite the frequent IP changes. This dynamic DNS solution has been a game-changer, allowing me to maintain consistent access to my networked applications.

### The Local Apps Ecosystem

Here's a peek into some of the key applications I host locally:

#### DNS Server

A local DNS server streamlines domain name resolution within my network, improving speed and reliability. It also provides an additional layer of privacy and control over the network traffic.

#### File Server

Centralized storage is crucial for managing and accessing files efficiently. My file server provides a secure and organized repository for all my documents, media, and backups.

#### AppWrite

AppWrite is a comprehensive backend server for web, mobile, and flutter developers. It simplifies and accelerates app development by providing essential backend services such as databases, authentication, and storage.

#### qBittorrent

For managing downloads, qBittorrent is my go-to application. It offers a user-friendly interface and robust features for handling torrents efficiently.

#### Databases: MySQL and MongoDB

Databases are the backbone of any data-driven application. I run both MySQL and MongoDB servers to support various projects, from simple websites to complex applications.

#### Plex Media Server

Plex Media Server is the cornerstone of my entertainment setup. It organizes and streams my media collection to various devices, providing a seamless and enjoyable viewing experience.

### Conclusion

Setting up and managing my home server and network has been an incredibly rewarding experience. It has not only enhanced my technical skills but also provided a practical, hands-on approach to learning and problem-solving. Whether it's automating my home, managing applications, or ensuring continuous access to my services, this setup has proven to be both functional and educational.

I hope this glimpse into my network inspires you to explore and build your own home server setup. The possibilities are endless, and the journey is filled with learning opportunities. Happy networking!
