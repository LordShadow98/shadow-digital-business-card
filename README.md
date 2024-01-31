#Shadow-digital-business-card

This project is a web application to display a digital business card. The application is built with React and uses reusable components for the main structure. A brief instructional on how to set up and use the application is provided below.

## Installation

Clone Repository :

```bash
git clone https://github.com/LordShadow98/shadow-digital-business-card.git

cd shadow-digital-business-card
```

Install Dependencies:

```bash
npm install
```

## Usage

```
npm start
```
The application will run at http://localhost:3000

## Project structure:

Project structure:
```
shadow-digital-business-card/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   └── Main.js
│   │
│   ├── images/
│   │   └── fondo.jpg
│   │
│   ├── App.css
│   ├── App.js
│   └── ...
│
├── .gitignore
├── package.json
├── README.md
└── ...

```

src/: Contains the source code of the application.

components/: Folder that stores the application components.
Header.js: Component for the header.
Main.js: Main component that shows the information and contact buttons.
Footer.js: Footer component that includes links to social networks.
public/: Contains static files and the main HTML file.

index.html: Main HTML file that includes the entry point for the React application.
Customization:
Application Background:

You can change the background image by setting the background-image property in src/App.css:

Main Content:

Customize the main information, such as name, title and links, by modifying the Main component in src/components/Main.js.
Social Networks:

Add or modify social network links in the Footer component in src/components/Footer.js. You can use FontAwesome icons for this.