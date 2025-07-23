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

## Development Workflow

### Making Changes

1. **Frontend Changes:**
   - Edit files in `client/src/`
   - Changes auto-reload via React hot reloading
   - Check console for any TypeScript errors

2. **Backend Changes:**
   - Edit files in `server/`
   - Server auto-restarts via nodemon
   - Check terminal for any Node.js errors

3. **Adding New Dependencies:**
   ```bash
   # For frontend
   cd client && npm install package-name
   
   # For backend
   cd server && npm install package-name
   
   # Return to root
   cd ..
   ```

### Testing the Application

```bash
# Test backend endpoints
curl http://localhost:5000/api/health
curl http://localhost:5000/api/repository/stats

# Test with Qualtrics API (requires valid token)
curl http://localhost:5000/api/surveys
```

## Port Configuration

Default ports used:
- **Frontend**: 3000
- **Backend**: 5000

### Changing Ports

**Backend Port:**
```env
# In server/.env
PORT=8080
```

**Frontend Port:**
```bash
# Set environment variable before starting
PORT=3001 npm run client
```

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

**Problem: Windows path issues**
```bash
# Use PowerShell as administrator or Git Bash
# Ensure Node.js is added to PATH
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

3. **TypeScript Compilation Errors**
   ```bash
   # Check for syntax errors in .tsx files
   # Ensure all imports are correct
   # Restart the development server
   ```

### Qualtrics Integration Issues

1. **API Authentication Errors**
   ```bash
   # Verify token in .env file
   cat server/.env
   
   # Test token manually
   curl -H "X-API-TOKEN: your_token" https://co1.qualtrics.com/API/v3/surveys
   ```

2. **Datacenter URL Issues**
   - Check your Qualtrics login URL
   - Common URLs:
     - US: `https://co1.qualtrics.com` or `https://ca1.qualtrics.com`
     - EU: `https://eu.qualtrics.com`
     - Australia: `https://au1.qualtrics.com`

3. **No Surveys Returned**
   - Ensure you have surveys in your Qualtrics account
   - Check API token permissions
   - Verify datacenter URL is correct

### Browser Issues

1. **Blank Page on localhost:3000**
   ```bash
   # Check browser console for errors
   # Verify React development server is running
   # Try hard refresh (Ctrl+F5 or Cmd+Shift+R)
   ```

2. **API Connection Errors**
   ```bash
   # Check if backend is running on port 5000
   curl http://localhost:5000/api/health
   
   # Verify CORS configuration
   # Check browser network tab for failed requests
   ```

3. **Charts Not Displaying**
   ```bash
   # Check browser console for Chart.js errors
   # Verify Chart.js dependencies are installed
   cd client && npm list chart.js react-chartjs-2
   ```

### Performance Issues

1. **Slow Loading**
   - Check network tab in browser developer tools
   - Verify API responses are reasonable size
   - Consider implementing pagination for large datasets

2. **Memory Issues**
   ```bash
   # Increase Node.js memory limit
   NODE_OPTIONS="--max-old-space-size=4096" npm run dev
   ```

### Environment Variables Debug

```bash
# Check if .env file exists
ls -la server/.env

# Verify environment variables are loaded
# Add this to server/index.js temporarily:
console.log('QUALTRICS_API_TOKEN:', process.env.QUALTRICS_API_TOKEN ? 'Set' : 'Not set');
console.log('QUALTRICS_BASE_URL:', process.env.QUALTRICS_BASE_URL);
```

### Getting Help

1. **Check Console Logs:**
   - Browser console (F12)
   - Terminal/command prompt output
   - Server logs

2. **Enable Debug Mode:**
   ```bash
   # Backend debugging
   DEBUG=* npm run server
   
   # Frontend debugging
   REACT_APP_DEBUG=true npm run client
   ```

3. **Common Commands for Debugging:**
   ```bash
   # Check what's running on ports
   lsof -i :3000
   lsof -i :5000
   
   # Check Node.js processes
   ps aux | grep node
   
   # Check npm version compatibility
   npm doctor
   ```

## Deployment

### Production Build

1. **Build the frontend:**
   ```bash
   npm run build
   ```

2. **Prepare environment:**
   ```bash
   # Ensure production .env is configured
   cp server/.env.example server/.env.production
   # Edit with production values
   ```

3. **Start production server:**
   ```bash
   cd server
   NODE_ENV=production npm start
   ```

### Deployment Options

**Option 1: Traditional Hosting**
- Build frontend with `npm run build`
- Deploy `client/build/` to static hosting (Netlify, Vercel, S3)
- Deploy `server/` to Node.js hosting (Heroku, DigitalOcean, AWS)

**Option 2: Docker**
```dockerfile
# Example Dockerfile for backend
FROM node:16-alpine
WORKDIR /app
COPY server/package*.json ./
RUN npm install
COPY server/ .
EXPOSE 5000
CMD ["npm", "start"]
```

**Option 3: Full-Stack Platforms**
- Vercel (frontend + serverless functions)
- Netlify (frontend + serverless functions)
- Railway (full-stack)
- Render (full-stack)

### Environment Variables for Production

```env
# Production .env
QUALTRICS_API_TOKEN=your_production_token
QUALTRICS_BASE_URL=https://yourdatacenter.qualtrics.com
PORT=5000
NODE_ENV=production

# Optional security enhancements
CORS_ORIGIN=https://yourdomain.com
API_RATE_LIMIT=100
```

## Detailed Project Structure

```
research-visualization-website/
├── client/                          # React Frontend
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── components/              # React components
│   │   │   ├── Dashboard.tsx        # Main dashboard with charts
│   │   │   ├── Navigation.tsx       # Navigation header
│   │   │   └── SurveyList.tsx      # Qualtrics survey list
│   │   ├── services/
│   │   │   └── api.ts              # API service functions
│   │   ├── types/
│   │   │   └── index.ts            # TypeScript type definitions
│   │   ├── App.tsx                 # Main app component
│   │   ├── index.tsx               # React entry point
│   │   └── index.css               # Global styles with Tailwind
│   ├── package.json                # Frontend dependencies
│   ├── tailwind.config.js          # Tailwind CSS configuration
│   ├── postcss.config.js           # PostCSS configuration
│   └── tsconfig.json               # TypeScript configuration
├── server/                          # Node.js Backend
│   ├── index.js                    # Express server and routes
│   ├── package.json                # Backend dependencies
│   ├── .env.example               # Environment template
│   └── .env                       # Environment variables (create this)
├── node_modules/                   # Root dependencies
├── package.json                    # Root package.json with scripts
├── package-lock.json              # Dependency lock file
└── README.md                      # This documentation
```

### Key Files Explained

**Frontend Key Files:**
- `client/src/App.tsx` - Main application component with routing
- `client/src/components/Dashboard.tsx` - Charts and data visualization
- `client/src/components/SurveyList.tsx` - Qualtrics survey management
- `client/src/services/api.ts` - API communication layer
- `client/src/types/index.ts` - TypeScript interfaces and types

**Backend Key Files:**
- `server/index.js` - Express server with API routes
- `server/.env` - Environment configuration (API keys, URLs)

**Configuration Files:**
- `package.json` (root) - Scripts for running both servers
- `client/tailwind.config.js` - UI styling configuration
- `client/tsconfig.json` - TypeScript compiler settings

## Advanced Configuration

### Custom Styling

**Modify Tailwind Colors:**
```javascript
// client/tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        custom: {
          blue: '#1e40af',
          green: '#059669',
        }
      }
    },
  },
}
```

**Add Custom CSS:**
```css
/* client/src/index.css */
.custom-chart {
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

### API Configuration

**Add Rate Limiting:**
```javascript
// server/index.js
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

**Add Request Logging:**
```javascript
// server/index.js
const morgan = require('morgan');
app.use(morgan('combined'));
```

### Adding New Chart Types

```typescript
// client/src/components/Dashboard.tsx
import { Line, Pie, Radar } from 'react-chartjs-2';
import {
  LineElement,
  PointElement,
  RadialLinearScale,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  RadialLinearScale
);

// Add new chart component
const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Trend Analysis',
    data: [12, 19, 3, 5, 2, 3],
    borderColor: 'rgb(59, 130, 246)',
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
  }]
};
```

## Customization Examples

### Adding New API Endpoints

```javascript
// server/index.js
app.get('/api/custom/analytics', async (req, res) => {
  try {
    // Your custom logic here
    const analytics = await getCustomAnalytics();
    res.json(analytics);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});
```

### Creating New Components

```typescript
// client/src/components/CustomChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';

interface CustomChartProps {
  data: any[];
  title: string;
}

const CustomChart: React.FC<CustomChartProps> = ({ data, title }) => {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [{
      label: title,
      data: data.map(item => item.value),
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    }]
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default CustomChart;
```

## Contributing

### Development Setup

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly:**
   ```bash
   npm run dev
   # Test both frontend and backend
   ```
5. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Add your feature description"
   ```
6. **Push and create a pull request:**
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Style Guidelines

- Use TypeScript for all new frontend code
- Follow React functional component patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure responsive design with Tailwind CSS
- Handle errors gracefully with user-friendly messages

### Testing

```bash
# Frontend testing (if tests are added)
cd client && npm test

# Backend testing (if tests are added)
cd server && npm test

# Manual testing checklist:
# ✓ Dashboard loads with charts
# ✓ Navigation works between views
# ✓ API endpoints respond correctly
# ✓ Qualtrics integration works (with valid credentials)
# ✓ Responsive design on mobile/tablet
```

## License

MIT License - see LICENSE file for details

## Support

If you encounter issues:

1. Check the [Troubleshooting](#troubleshooting) section
2. Verify your [Prerequisites](#prerequisites)
3. Ensure [Environment Configuration](#step-3-environment-configuration) is correct
4. Check browser console and terminal logs
5. Test API endpoints manually with curl

For additional help, please create an issue with:
- Your operating system
- Node.js version
- Error messages
- Steps to reproduce the issue