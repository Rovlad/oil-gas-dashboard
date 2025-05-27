# Oil & Gas Plant Dashboard

A modern, responsive web dashboard for monitoring oil and gas plant systems in real-time. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Real-time System Monitoring**: Track the status of all plant systems including pipelines, risers, separation units, and more
- **Status Indicators**: Visual status badges for Fitness for Service Status, Corrosion Barrier Health Status, and Life of Field Status
- **Comprehensive Metrics**: Monitor anomalies, LOPCs, FMOs, ROs, and wraps across all systems
- **Interactive Dashboard**: Clean, modern interface with responsive design
- **Data Export**: Export system data for reporting and analysis
- **Filtering Options**: Filter systems by status and operational state

## System Coverage

The dashboard monitors the following oil and gas plant systems:

- Pipelines & Risers
- Separation & Crude Handling
- Gas Compression & Treatment
- HP Flare / LP Flare
- Produced Water Treatment
- Water Injection/SCSSV
- Sea Water Lift & Distribution
- Heating & Cooling Medium
- Cargo Tank Cleaning (COW)
- Import/Transfer/Export Headers & Pipework
- Crude Header & Pipework
- Slop Headers & Pipework
- Water Ballast
- Bilge

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: Hot reload with Vite dev server

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd oil-gas-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## Dashboard Components

### Stats Cards
- **Total Systems**: Overview of all monitored systems
- **Online Systems**: Count of currently operational systems
- **Anomalies**: Total number of detected anomalies
- **LOPCs**: Loss of Primary Containment events
- **FMOs**: Facility Maintenance Operations
- **ROs**: Routine Operations
- **Wraps**: Protective wrapping installations

### Systems Table
Comprehensive table showing:
- System name and description
- Fitness for Service Status
- Corrosion Barrier Health Status
- Life of Field Status
- Current actions and operational status
- Numerical counts for various metrics

### Status Indicators
Color-coded status badges:
- **Green**: Fit for Service/Healthy/Fit until COP
- **Amber**: Partially/Compromised/Will Partially
- **Red**: Not Fit/Not functional/Will Not Remain Fit
- **Grey**: Not Defined

## Data Structure

The dashboard uses TypeScript interfaces for type safety:

```typescript
interface SystemData {
  system: string;
  ffsStatus: 'Fit for Service' | 'Partially' | 'Not Fit' | 'Not Defined';
  icBarrierStatus: 'Healthy' | 'Compromised' | 'Not functional';
  lofStatus: 'Fit until COP' | 'Will Partially' | 'Will Not Remain Fit' | 'Not Defined';
  actionsAndStatus: string;
  numberOfAnomalies: number;
  numberOfLOPCs: number;
  numberOfFMOs: number;
  numberOfROs: number;
  numberOfWraps: number;
}
```

## Customization

### Adding New Systems
1. Update the `mockSystemsData` array in `src/data/mockData.ts`
2. Add new system entries following the `SystemData` interface

### Modifying Status Types
1. Update the status type definitions in `src/types/index.ts`
2. Adjust the status badge styling in `src/components/StatusBadge.tsx`

### Styling Changes
- Modify Tailwind configuration in `tailwind.config.js`
- Update component styles using Tailwind utility classes
- Customize color schemes in the Tailwind config

## Production Deployment

1. Build the application:
```bash
npm run build
```

2. The built files will be in the `dist` directory
3. Deploy the contents of `dist` to your web server

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team or create an issue in the repository. 