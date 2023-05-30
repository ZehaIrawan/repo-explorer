# Repo Explorer

Welcome to Repo Explorer! This project is a [React](https://reactjs.org/) application that allows users to fetch and display repositories from GitHub based on a specific username.

## Features

- Fetch repositories from GitHub API based on a username
- Display repository details including name, stargazers count, and description
- Show a loader while fetching data from the API

## Technologies Used

- React: JavaScript library for building user interfaces
- Redux Toolkit Query: State management library for handling API data fetching and caching
- Material-UI: UI component library for styling and layout
- Jest and React Testing Library: Testing frameworks for unit testing React components

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ZehaIrawan/repo-explorer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd repo-explorer
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   - Rename the `.env.example` file to `.env`.
   - Provide your GitHub API token in the `.env` file. (Replace `YOUR_GITHUB_TOKEN` with your actual token)

5. Start the development server:

   ```bash
   npm run dev
   ```

## Testing

The project includes unit tests for components. To run the tests, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview) - State management library for handling API data fetching and caching
- [Material-UI](https://mui.com/) - UI component library for styling and layout
- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/react) - Testing frameworks for unit testing React components
