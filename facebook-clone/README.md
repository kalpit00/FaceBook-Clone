# Facebook Clone Frontend

This is the frontend application for the Facebook Clone project, built with Next.js and styled with Tailwind CSS.

## Technologies Used

- **Next.js 14**
- **React 18**
- **Redux Toolkit & React-Redux**
- **Next Auth**
- **Tailwind CSS**
- **Axios**
- **React Icons**

## Features

- User authentication with NextAuth
- News feed with posts and comments
- Create, like, and comment on posts
- User profiles
- Friend requests and connections
- Responsive design for mobile and desktop

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kalpit00/FaceBook-Clone.git
   cd FaceBook-Clone/facebook-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   API_URL=http://localhost:8080
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `components/` - Reusable UI components
- `pages/` - Next.js pages and API routes
- `public/` - Static assets
- `src/` - Source code
  - `app/` - App configuration
  - `features/` - Redux slices and features
  - `styles/` - Global styles
  - `utils/` - Utility functions

## Building for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## Testing

```bash
npm run test
# or
yarn test
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next Auth](https://next-auth.js.org/)

## License

This project is licensed under the MIT License.
