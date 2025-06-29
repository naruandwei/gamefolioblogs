# Gamefolio

A dynamic gaming community platform connecting content creators and indie game developers through innovative content submission and collaboration tools.

## Features

### Content Management
- **Content Submission System**: Submit games, streams, clips, and testimonials with file upload support
- **Admin Panel**: Comprehensive management system for reviewing and managing submitted content
- **GitHub-Powered Blog**: Dynamic blog system that fetches content from external GitHub repository
- **Email Notifications**: Automated email alerts for new submissions using Brevo

### Blog System
- **Dynamic Content**: Fetches blog posts from https://github.com/BetaONEIO/gamefolioblogs
- **Markdown Support**: Full markdown rendering with @tailwindcss/typography styling
- **Category Filtering**: Support for Indie games, Streaming, Gaming news, web3, Crypto
- **Author Integration**: Twitter link support for author profiles
- **Flexible Organization**: Multiple folder structure options for content organization
- **Real-time Updates**: Content updates automatically without redeployment

### Design & UX
- **Responsive Design**: Mobile-first design with Tailwind CSS and Radix UI components
- **Database Integration**: PostgreSQL with Drizzle ORM for reliable data persistence
- **File Upload**: Support for images and videos with progress tracking
- **Form Validation**: Advanced validation with dynamic social link handling

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Node.js + Express
- **Database**: PostgreSQL + Drizzle ORM
- **Styling**: Tailwind CSS + Radix UI
- **Blog**: GitHub API + marked (markdown parser)
- **Email**: Brevo API integration
- **File Upload**: Multer with progress tracking

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   - `DATABASE_URL`: PostgreSQL connection string
   - `BREVO_API_KEY`: For email notifications

3. Run database migrations:
   ```bash
   npm run db:push
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`.

## Admin Access

Default admin credentials:
- Username: `admin`
- Password: `Soiwasafk1!`

Access the admin panel at `/admin` to manage:
- User accounts and team members
- Games catalog with approve/feature/delete functionality
- Content submissions and reviews

## Blog System

The blog system fetches content from the GitHub repository at https://github.com/BetaONEIO/gamefolioblogs

### Blog Structure
- `posts.json`: Contains metadata for all blog posts
- `*.md` files: Individual blog post content in markdown format

### Supported Categories
- Indie games
- Streaming  
- Gaming news
- web3
- Crypto

### Folder Organization Options

**Simple Structure (Recommended for small teams):**
```
gamefolioblogs/
├── posts.json
├── posts/
│   ├── indie-game-marketing-2025.md
│   ├── streaming-setup-guide.md
│   └── gaming-trends-2025.md
```

**Category-Based Structure (For larger teams):**
```
gamefolioblogs/
├── posts.json
├── indie-games/
│   └── unity-vs-unreal-2025.md
├── streaming/
│   └── twitch-setup-guide.md
└── gaming-news/
    └── industry-trends-2025.md
```

**Custom Folder Structure:**
Specify custom folder paths in posts.json:
```json
{
  "slug": "my-post",
  "folderPath": "tutorials",
  "title": "My Tutorial Post"
}
```

## Project Structure

```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   │   ├── blog-list.tsx     # Blog listing page
│   │   │   ├── blog-post.tsx     # Individual blog post
│   │   │   ├── admin.tsx         # Admin panel
│   │   │   └── feature.tsx       # Content submission
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utility functions
├── server/           # Express backend
│   ├── db.ts           # Database connection
│   ├── storage.ts      # Data access layer
│   ├── routes.ts       # API endpoints
│   ├── auth.ts         # Authentication logic
│   └── email.ts        # Email service
├── shared/           # Shared types and schemas
│   └── schema.ts       # Database schema definitions
├── uploads/          # File upload directory
├── gamefolio-posts.json     # Sample blog posts
└── folder-organization-guide.md  # Blog organization guide
```

## API Endpoints

### Public Endpoints
- `GET /api/games` - Fetch games catalog
- `GET /api/streamers` - Fetch streamers
- `GET /api/streams` - Fetch streams  
- `GET /api/clips` - Fetch clips
- `GET /api/testimonials` - Fetch testimonials
- `POST /api/content-submission` - Submit content for review

### Admin Endpoints
- `POST /api/admin/login` - Admin login
- `GET /api/admin/users` - Manage users
- `POST /api/admin/users` - Create new user
- `DELETE /api/admin/users/:id` - Delete user
- `GET /api/admin/submissions` - Get all submissions
- `PATCH /api/admin/submissions/:id/status` - Update submission status
- `DELETE /api/admin/submissions/:id` - Delete submission

### Blog System
The blog system fetches content directly from GitHub:
- Posts metadata: `https://raw.githubusercontent.com/BetaONEIO/gamefolioblogs/main/posts.json`
- Post content: `https://raw.githubusercontent.com/BetaONEIO/gamefolioblogs/main/[folder/]slug.md`

## Email Integration

Email notifications are sent to `hello@gamefolio.com` for:
- New content submissions
- Contact form submissions
- Admin notifications

## Mobile Responsiveness

The platform is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized forms and layouts
- Responsive image handling
- Mobile-optimized typography

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on both desktop and mobile
5. Submit a pull request

## Documentation

- `replit.md`: Project architecture and user preferences
- `folder-organization-guide.md`: Blog organization options
- `github-blog-setup-guide.md`: Blog system setup instructions

## License

This project is licensed under the MIT License.