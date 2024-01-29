# Vue Microfrontend Application

This project demonstrates a microfrontend architecture using Vite modern federation. It consists of three modules: Container, Products, and Cart. The Container application consumes the Products and Cart modules. The application uses Pinia for store management and a Pub/Sub pattern for communication between modules.

## Project Structure

- `container/`: Container application module.
- `products/`: Products application module.
- `cart/`: Cart application module.

## Dependencies

- Vite: A fast, opinionated web framework for Vue.
- Pinia: Intuitive, type-safe, light, and fast Vuex alternative for Vue 3.
- Concurrently: Utility to run multiple commands concurrently.

## Scripts

```bash
# Clone the repository
git clone https://github.com/your-username/vue-micro-fes.git

# Navigate to the project directory
cd vue-micro-fes

# Install dependencies for all modules
npm install

# Run the development server for all modules
npm run dev-all

# Open your browser and navigate to http://localhost:3000 to see the application.

# Build all modules for production
npm run build-all
```

## License
-This project is licensed under the ISC License.