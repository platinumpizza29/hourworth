# Hour Logging Application

This is a web application for logging daily work hours. It allows users to log their hours, categorize them, and view summaries of their weekly and monthly work hours. The application is built using Next.js, Prisma, and Clerk for authentication.

## Features

- **User Authentication**: Secure login and registration using Clerk.
- **Log Daily Hours**: Users can log their daily work hours, categorize them, and add optional descriptions.
- **Weekly and Monthly Summaries**: Automatic calculation and display of weekly and monthly work hour summaries.
- **Activity Log**: Track user actions such as adding or updating hour entries.

## Technologies Used

- **Next.js**: A React framework for building fast and user-friendly web applications.
- **Prisma**: An ORM for Node.js and TypeScript that simplifies database access.
- **Clerk**: A user management and authentication service.
- **React Hook Form**: A library for managing form state and validation in React.
- **PostgreSQL**: A powerful, open-source relational database system.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- PostgreSQL database
- Clerk account for authentication

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/hour-logging-app.git
   cd hour-logging-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   DATABASE_URL=your_postgresql_database_url
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   CLERK_API_KEY=your_clerk_api_key
   ```

4. **Set up the database**:
   Run the following command to apply the Prisma schema to your database:

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Generate Prisma Client**:

   ```bash
   npx prisma generate
   ```

6. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- **`/src`**: Contains the main application code.
  - **`/components`**: Reusable React components.
  - **`/actions`**: Server actions for handling business logic.
  - **`/pages`**: Next.js pages.
  - **`/server`**: Server-side logic, including database access.
- **`/prisma`**: Contains the Prisma schema and migration files.

## Usage

- **Log Hours**: Navigate to the "Log Daily Hours" section, fill in the form, and submit to log your hours.
- **View Summaries**: Check the weekly and monthly summaries to see your total logged hours.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com).
