# URL Shortener Library

A lightweight and customizable URL shortener library for Node.js and browser applications. Shorten URLs effortlessly using your API endpoint with built-in validation and error handling.

---

## Features

- 📏 Validates URLs before sending requests.
- 🔒 Secure and reliable with axios for API communication.
- 🌍 Works seamlessly in Node.js, Reactjs, Nextjs and browser environments.

---

## Installation

Install the package using npm & yarn:

```bash
npm install react-urlshortner
```

## Example

```bash
import { URLShortener } from "react-urlshortner";

const shortener = new URLShortener();

shortener.shorten("https://longurl.com/some/path")
    .then(shortUrl => console.log("Shortened URL:", shortUrl))
    .catch(error => console.error("Failed to shorten URL:", error));

```

# Support Us ☕

Maintaining and improving this project incurs server costs. If you find this library helpful, consider supporting us!

[**Donate for Server Cost and Support**](https://res.cloudinary.com/drsx9xy6o/image/upload/v1735908635/sadapay_uoovwk.jpg)

---

### Note:

When donating, please mention whether your contribution is intended for **server costs** or to **support the developer**. This helps us allocate resources effectively and prioritize improvements!
