# Chat with GPT

A simple AI chatbot built with **React**, **Next.js**, and the **OpenAI API**, designed to help understand how APIs work by connecting a frontend form to a backend route.

Live Demo: https://chat-with-c1ugwxrkz-patnaikt4s-projects.vercel.app

🎯 This project was built primarily as a learning exercise in:
- API integration
- Serverless backend routes in Next.js
- React state management
- Markdown rendering in React
- Tailwind CSS layout and styling

---

## 🌐 Demo

👉 [Chat with GPT – Live on Vercel](https://chat-with-c1ugwxrkz-patnaikt4s-projects.vercel.app/)

---

## ✨ Features

- Accepts user input through a clean form interface
- Sends input to a custom API route using `fetch()`
- Uses OpenAI’s GPT model to generate a response
- Renders GPT output with full markdown formatting (using `react-markdown`)
- Built with Tailwind CSS for layout and responsiveness

---

## 🛠️ Tech Stack

- **React** (via Next.js App Router)
- **Next.js** API routes (`/api/chat`)
- **Tailwind CSS** for styling
- **OpenAI API** for natural language generation
- **Vercel** for deployment

---

## 📦 Getting Started

1. **Clone the repo**
```bash
git clone https://github.com/your-username/chat-with-gpt.git
cd chat-with-gpt
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up your API Key**
Create an .env.local file to the root directory and add:
```bash
OPENAI_API_KEY=your-openai-key-here
```

4. **Run the dev server**
```bash
npm run dev
```

📝 License

This project is for educational/demo use only.

👤 Author

Built by Tejas Patnaik
Live demo: https://chat-with-c1ugwxrkz-patnaikt4s-projects.vercel.app
