
# 3D Text Generator with Three.js, GSAP

<img src="/public/3d-text-ss.png" />

This project is a 3D text generator built using Three.js, GSAP, React, and Vite. It allows users to input custom text through a browser prompt, which is then rendered in 3D. Additionally, it includes a 3D heart animation with a blinking effect using GSAP.


## Features

- 3D Text Rendering: Input your custom text, and see it rendered in a 3D environment.
- Customizable Text: Enter text through a browser prompt and see the results instantly.
- 3D Heart Animation: A 3D heart with a blinking effect is included as part of the scene.
- Built with Modern Tools: Uses Three.js for 3D rendering, GSAP for animations, and React with Vite for a fast development experience.


## Installation

To run the application locally, follow these steps:

#### 1. Clone the repository:

```bash
  git clone https://github.com/iakash22/3d-Text-Generator.git
```

#### 2. Install dependencies:

```bash
  npm install
```

#### 3. Start the development server:

```bash
  npm run dev
```
#### 4. Open your browser and navigate to http://localhost:3000 to see the 3D text generator in action.
## Usage

**1.** When you open the application, you'll be prompted to enter your custom text.

**2.** The text will be rendered in 3D within the environment.

**3.** A 3D heart with a blinking animation will be present in the scene as well.


## Demo
**Link -**  https://3d-text-generator.netlify.app


## Technologies Used
 
- **Three.js:** A powerful 3D library for rendering 3D graphics in the browser.
- **GSAP:** A robust animation library used for creating the blinking effect and other animations.
- **React:** A popular JavaScript library for building user interfaces.
- **Vite:** A fast and modern build tool for front-end development.


## Project Structure

```

├── public
│   └── index.html          # HTML entry point
├── src
│   ├── components
│   │   └── ThreeDText.js   # Component for rendering 3D text
│   ├── App.js              # Main App component
│   ├── main.js             # React entry point
│   ├── styles.css          # Global styles
│   └── assets              # Static assets like images and models
├── package.json            # Project dependencies
└── vite.config.js          # Vite configuration

```

## Customization

You can customize the text appearance, camera angles, lighting, and animation effects by modifying the Three.js and GSAP settings in the **ThreeDText.js** component.
## Contributing

Contributions are welcome! 

Please feel free to submit a Pull Request or open an Issue if you have any suggestions or improvements.
