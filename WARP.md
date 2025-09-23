# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Ranto is a comprehensive business networking and opportunity matching platform designed for Madagascar entrepreneurs. It connects local businesses with global opportunities through intelligent matching algorithms, multilingual support (French, English, Malagasy), and integrated communication features.

## Monorepo Structure

This is a TypeScript/Node.js monorepo with the following architecture:

```
ranto-development/
├── apps/
│   ├── api/           # Express.js backend API (TypeScript)
│   ├── ai-service/    # AI matching service (placeholder for future n8n integration)
│   └── web/           # React frontend application (Vite)
├── packages/
│   ├── database/      # Database schema, migrations, and SQL files
│   ├── gcp-configs/   # Google Cloud Platform configurations
│   └── shared/        # Shared utilities and types
├── infrastructure/
│   ├── docker/        # Docker configurations
│   ├── scripts/       # Deployment and utility scripts
│   └── terraform/     # Infrastructure as code
├── config/            # Project-wide configuration files
└── docs/              # Additional documentation
```

## Development Commands

### API Service (Primary Backend)
Navigate to `apps/api/` for all backend development:

```bash
# Development
cd apps/api
yarn dev                    # Start development server with hot reload
yarn build                  # Compile TypeScript to JavaScript
yarn start                  # Start production server

# Testing
yarn test                   # Run Jest test suite
yarn test:watch             # Run tests in watch mode
yarn test:coverage          # Generate test coverage report

# Code Quality
yarn lint                   # Run ESLint
yarn lint:fix               # Fix ESLint issues automatically
yarn format                 # Format code with Prettier

# Docker (if needed)
yarn docker:build           # Build Docker image
yarn docker:run             # Run container locally
yarn docker:dev             # Run with docker-compose
```

### Web Application (Frontend)
Navigate to `apps/web/` for frontend development:

```bash
# Development
cd apps/web
yarn dev                    # Start Vite development server
yarn build                  # Build for production
yarn preview                # Preview production build

# Testing
yarn test                   # Run Vitest tests
yarn test:ui                # Run tests with UI
yarn test:coverage          # Generate test coverage

# Code Quality
yarn lint                   # Run ESLint
yarn lint:fix               # Fix ESLint issues
yarn format                 # Format code with Prettier
yarn type-check             # TypeScript type checking without emit
```

### Root Level Commands
From the project root:

```bash
# Install all dependencies
yarn install               # Install dependencies for all packages

# Database operations
cd packages/database
# Database setup commands would be here
```

## Core Architecture

### Backend API Architecture
- **Express.js server** with TypeScript
- **Controller-Service-Model pattern**:
  - `src/controllers/` - HTTP request handlers
  - `src/services/` - Business logic layer
  - `src/models/` - Data models and database interactions
  - `src/routes/` - Route definitions and middleware
  - `src/middleware/` - Custom middleware (auth, logging, validation)
  - `src/config/` - Configuration management (database, Firebase, GCP)

### Key Services & Components
- **Authentication**: Firebase Admin SDK integration
- **Database**: PostgreSQL with advanced extensions (pg_trgm, unaccent, pgcrypto)
- **File Storage**: Google Cloud Storage for uploads
- **Caching**: Redis for session management and caching
- **Matching Engine**: Business-opportunity matching system (n8n integration planned)
- **Multilingual Support**: French, English, Malagasy throughout the stack

### API Endpoints Structure
Main API routes (all prefixed with `/api`):
- `/auth` - Authentication and user management
- `/business-profiles` - Business profile CRUD operations
- `/opportunities` - Business opportunity management
- `/matches` - Matching system endpoints
- `/messages` - Real-time messaging system
- `/success-stories` - Community success showcases
- `/upload` - File upload handling

### Frontend Architecture (React/Vite)
- **React 18** with TypeScript
- **Vite** for build tooling and development server
- **React Router** for routing
- **Tailwind CSS** for styling
- **React Query** for state management and API integration
- **React Hook Form** for form handling
- **i18next** for internationalization (FR/EN/MG)

## Database Schema

The PostgreSQL database includes these core tables:
- `users` - User accounts with Firebase UID integration
- `business_profiles` - Multilingual business profiles with verification
- `opportunities` - Business opportunities with targeting and expiration
- `matches` - AI-generated and manual business-opportunity matches
- `messages` - Real-time messaging system
- `success_stories` - Community showcase content
- `uploads` - File upload tracking with GCS integration

Key features:
- **Multilingual columns** (name_fr, name_en, name_mg, description_fr, etc.)
- **Full-text search** with GIN indexes
- **Automatic timestamps** with trigger-based updates
- **Region-specific data** (Madagascar regions and phone number validation)

## Development Environment Setup

### Prerequisites
- Node.js 20+
- PostgreSQL 13+
- Firebase project with Admin SDK
- Google Cloud Project with Storage and Translate APIs
- Redis (optional, for caching)

### Environment Configuration
Create `.env` files in `apps/api/` with:
- `DATABASE_URL` - PostgreSQL connection string
- `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`
- `GCS_BUCKET` - Google Cloud Storage bucket name
- `GOOGLE_APPLICATION_CREDENTIALS` - Path to GCP service account JSON

### Database Setup
Database schema and migrations are in `packages/database/`:
```bash
cd packages/database
# Apply initial schema from schema/init.sql or firebase-compatible-schema.sql
# Run migrations in chronological order from migrations/
```

## Testing Strategy

### API Testing
- **Jest** with **Supertest** for integration testing
- Test files should mirror the source structure
- Focus on testing business logic in services and controller endpoints
- Mock external services (Firebase, GCP) in tests

### Frontend Testing
- **Vitest** for unit and component testing
- **@testing-library/react** for component testing patterns

## Key Patterns & Conventions

### Code Organization
- Use **barrel exports** in index files
- Implement **error boundaries** and proper error handling
- Follow **RESTful API** conventions
- Use **TypeScript strict mode** throughout

### Multilingual Implementation
- All user-facing strings support French (default), English, and Malagasy
- Database stores multilingual content in separate columns
- API responses include multilingual error messages
- Frontend uses i18next with language detection

### Business Logic Patterns
- **Matching Algorithm**: Located in `src/services/` - handles business-opportunity compatibility scoring
- **File Upload**: Integrated with Google Cloud Storage, tracked in database
- **User Roles**: Admin, Partner, Entrepreneur with different permissions
- **Regional Data**: Madagascar-specific regions, phone number formats, business types

## Testing Individual Components

```bash
# Test specific API endpoint
cd apps/api
yarn test src/controllers/authController.test.ts

# Test specific service
yarn test src/services/matchingService.test.ts

# Run tests for specific feature
yarn test --testNamePattern="business profile"
```

## Common Development Tasks

### Adding New API Endpoint
1. Create controller in `src/controllers/`
2. Add route in `src/routes/`
3. Implement service logic in `src/services/`
4. Add validation middleware if needed
5. Write tests for all layers

### Database Changes
1. Create migration file in `packages/database/migrations/`
2. Update `packages/database/schema/` files
3. Test migration locally
4. Update TypeScript types if needed

### Adding Multilingual Content
- Add columns for each language (suffix: `_fr`, `_en`, `_mg`)
- Update API responses to include all language variants
- Add translations to frontend i18n files

## Production Considerations
- Server runs behind proxy (Cloud Run) - trust proxy is configured
- Rate limiting configured for Madagascar's internet infrastructure
- Security headers optimized for Madagascar government domain integration
- CORS configured for production domains