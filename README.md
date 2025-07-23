# Research Visualization Website

A modern web application for visualizing research repository data with Qualtrics survey integration.

## Features

- 📊 Interactive data visualizations with Chart.js
- 🔗 Qualtrics API integration for survey data
- 📱 Responsive design with Tailwind CSS
- 🎨 Modern UI with charts and graphs
- 🔒 Secure API handling
- 📈 Real-time data updates

## Tech Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express
- **Charts**: Chart.js + React Chart.js 2
- **HTTP Client**: Axios
- **Development**: Concurrently for running both servers

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for cloning) - [Download here](https://git-scm.com/)
- A **Qualtrics account** with API access

### Checking Your Prerequisites

```bash
# Check Node.js version (should be 16+)
node --version

# Check npm version
npm --version

# Check if Git is installed (optional)
git --version
```

## Installation & Setup

### Step 1: Clone or Download the Project

**Option A: Clone with Git**
```bash
git clone <repository-url>
cd research-visualization-website
```

**Option B: Download ZIP**
1. Download the project ZIP file
2. Extract it to your desired directory
3. Open terminal/command prompt in the project directory

### Step 2: Install All Dependencies

Run this command from the project root directory:

```bash
npm run install-deps
```

This will install dependencies for:
- Root project (concurrently)
- Client (React app)
- Server (Node.js API)

**Alternative: Manual Installation**
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install

# Return to root
cd ..
```

### Step 3: Environment Configuration

1. **Copy the environment template:**
   ```bash
   cp server/.env.example server/.env
   ```

2. **Edit the `.env` file:**
   ```bash
   # On Windows
   notepad server/.env
   
   # On Mac
   open server/.env
   
   # On Linux
   nano server/.env
   ```

3. **Configure your settings:**
   ```env
   # Qualtrics API Configuration
   QUALTRICS_API_TOKEN=your_actual_api_token_here
   QUALTRICS_BASE_URL=https://yourdatacenter.qualtrics.com
   
   # Server Configuration
   PORT=5000
   ```

## Running the Application

### Method 1: Run Both Servers Together (Recommended)

```bash
npm run dev
```

This starts both the frontend and backend simultaneously using concurrently.

**Expected Output:**
```
[0] Server running on port 5000
[0] Health check: http://localhost:5000/api/health
[1] Starting the development server...
[1] Local:            http://localhost:3000
[1] On Your Network:  http://192.168.x.x:3000
```

### Method 2: Run Servers Separately

**Terminal 1 - Backend:**
```bash
npm run server
# or
cd server && npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run client
# or
cd client && npm start
```

### Method 3: Production Build

```bash
# Build the frontend
npm run build

# Start production server
cd server && npm start
```

## Accessing the Application

Once running, open your browser and navigate to:

- **Frontend Application**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

### First Time Setup Verification

1. **Check Backend Health:**
   ```bash
   curl http://localhost:5000/api/health
   ```
   Expected: `{"status":"OK","message":"Research Visualization API is running"}`

2. **Test Repository Stats:**
   ```bash
   curl http://localhost:5000/api/repository/stats
   ```
   Expected: JSON with mock statistics

3. **Frontend Access:**
   - Open http://localhost:3000
   - You should see the Research Visualization Hub
   - Dashboard should display with mock data charts

## Qualtrics Integration Setup

### Getting Your API Token

1. Log into your Qualtrics account
2. Go to Account Settings → Qualtrics IDs
3. Generate an API token
4. Copy the token to your `.env` file

### Finding Your Datacenter

Your Qualtrics URL shows your datacenter:
- `https://co1.qualtrics.com` → Use `https://co1.qualtrics.com`
- `https://ca1.qualtrics.com` → Use `https://ca1.qualtrics.com`
- `https://eu.qualtrics.com` → Use `https://eu.qualtrics.com`

Common datacenters:
- **US**: `co1` (Colorado), `ca1` (California)
- **EU**: `eu` (Dublin)
- **Canada**: `ca1`
- **Australia**: `au1`

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── services/       # API service functions
│   │   └── types/          # TypeScript type definitions
│   ├── package.json
│   └── tailwind.config.js
├── server/                 # Node.js backend
│   ├── index.js           # Express server
│   ├── .env.example       # Environment variables template
│   └── package.json
├── package.json           # Root dependencies
└── README.md             # This file
```

## Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run client` - Start only the React frontend
- `npm run server` - Start only the Node.js backend
- `npm run build` - Build the frontend for production
- `npm run install-deps` - Install all dependencies

## API Endpoints

### Health Check
- `GET /api/health` - Check if the API is running

### Surveys
- `GET /api/surveys` - Get all surveys from Qualtrics
- `GET /api/surveys/:id` - Get specific survey details
- `GET /api/surveys/:id/responses` - Get survey responses
- `POST /api/surveys/:id/export` - Export survey data

### Repository Stats
- `GET /api/repository/stats` - Get mock repository statistics

## Dashboard Features

### Overview Cards
- Total Projects count
- Active Projects count
- Total Participants count
- Completed Surveys count

### Charts
- **Monthly Activity**: Bar chart showing projects and participants over time
- **Project Categories**: Doughnut chart showing distribution of project types

### Survey Management
- List all surveys from your Qualtrics account
- Export survey data
- View survey details and status

## Troubleshooting

### Installation Issues

**Problem: npm install fails**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Try with legacy peer deps flag
npm install --legacy-peer-deps
```

**Problem: Permission errors (Mac/Linux)**
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
```

### Runtime Issues

1. **"Port already in use" Error**
   ```bash
   # Find process using port 3000 or 5000
   netstat -tulpn | grep :3000
   netstat -tulpn | grep :5000
   
   # Kill process (replace PID)
   kill -9 <PID>
   
   # On Windows
   tasklist | findstr :3000
   taskkill /PID <PID> /F
   ```

2. **"Module not found" Errors**
   ```bash
   # Reinstall dependencies
   rm -rf node_modules
   npm run install-deps
   ```

3. **Qualtrics API Errors**
   - Verify your API token is correct
   - Check your datacenter URL
   - Ensure your Qualtrics account has API access

### Common Issues

1. **Charts Not Displaying**
   - Check browser console for Chart.js errors
   - Verify Chart.js dependencies are installed
   - Ensure data format matches chart expectations

2. **API Connection Errors**
   - Check if backend is running on port 5000
   - Verify CORS configuration
   - Check browser network tab for failed requests

3. **Blank Page on localhost:3000**
   - Check browser console for errors
   - Verify React development server is running
   - Try hard refresh (Ctrl+F5 or Cmd+Shift+R)

## Customization

### Adding New Chart Types
1. Install additional Chart.js components
2. Import them in `Dashboard.tsx`
3. Register with ChartJS
4. Create new chart components

### Integrating Real Repository Data
Replace the mock data in `/api/repository/stats` endpoint with:
- Git repository statistics
- Database queries
- File system analysis
- External APIs

### Styling
- Modify `tailwind.config.js` for custom colors/themes
- Update component classes for different layouts
- Add custom CSS in `src/index.css`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

If you encounter issues:

1. Check the Troubleshooting section above
2. Verify your prerequisites are met
3. Ensure environment configuration is correct
4. Check browser console and terminal logs
5. Test API endpoints manually with curl

For additional help, please create an issue with:
- Your operating system
- Node.js version
- Error messages
- Steps to reproduce the issue