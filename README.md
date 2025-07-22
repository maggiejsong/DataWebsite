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

## Quick Start

1. **Install dependencies**:
   ```bash
   npm run install-deps
   ```

2. **Set up environment variables**:
   ```bash
   cp server/.env.example server/.env
   ```
   
   Edit `server/.env` and add your Qualtrics API credentials:
   ```env
   QUALTRICS_API_TOKEN=your_api_token_here
   QUALTRICS_BASE_URL=https://yourdatacenter.qualtrics.com
   ```

3. **Start development servers**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

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

## Troubleshooting

### Common Issues

1. **Qualtrics API Errors**
   - Verify your API token is correct
   - Check your datacenter URL
   - Ensure your Qualtrics account has API access

2. **CORS Issues**
   - The server includes CORS middleware
   - Make sure both servers are running on correct ports

3. **Chart Not Displaying**
   - Verify Chart.js components are imported
   - Check browser console for errors
   - Ensure data format matches chart expectations

### Environment Variables
Copy `server/.env.example` to `server/.env` and configure:
```env
QUALTRICS_API_TOKEN=your_token_here
QUALTRICS_BASE_URL=https://yourdatacenter.qualtrics.com
PORT=5000
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details