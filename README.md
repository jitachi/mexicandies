# Mexicandies Website

A simple, beautiful website for Mexicandies built with Express.js and Tailwind CSS, designed for easy deployment on Railway.

## Features

- 🎨 Modern design with Tailwind CSS
- 🇲🇽 Mexican-themed color scheme (red, green, gold)
- 📱 Fully responsive design
- 🚀 Easy Railway deployment
- ⚡ Fast Express.js server
- 🍬 Candy-themed content and branding

## Local Development

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Visit your site:**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## Railway Deployment

### Option 1: Deploy via Railway CLI

1. **Install Railway CLI:**

   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway:**

   ```bash
   railway login
   ```

3. **Deploy:**
   ```bash
   railway up
   ```

### Option 2: Deploy via GitHub

1. **Push your code to GitHub**
2. **Connect your GitHub repo to Railway:**
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your mexicandies repository
   - Railway will automatically detect the Node.js app and deploy it

### Option 3: Deploy via Railway Dashboard

1. **Create a new project on Railway**
2. **Connect your GitHub repository or upload your code**
3. **Railway will automatically:**
   - Detect it's a Node.js application
   - Install dependencies from `package.json`
   - Start the server using `npm start`
   - Assign a public URL

## Project Structure

```
mexicandies/
├── public/
│   └── index.html          # Main HTML file with Tailwind CSS
├── package.json            # Dependencies and scripts
├── server.js              # Express.js server
├── railway.json           # Railway deployment configuration
└── README.md              # This file
```

## Customization

- **Colors:** Edit the Tailwind config in `public/index.html` to change the color scheme
- **Content:** Modify the HTML content in `public/index.html`
- **Styling:** Use Tailwind CSS classes for styling
- **Features:** Add new routes in `server.js`

## Health Check

The application includes a health check endpoint at `/health` that Railway can use to monitor the application status.

## Support

For deployment issues:

- Check Railway logs in the dashboard
- Ensure all dependencies are listed in `package.json`
- Verify the `PORT` environment variable is being used correctly

Enjoy your Mexicandies website! 🍬
