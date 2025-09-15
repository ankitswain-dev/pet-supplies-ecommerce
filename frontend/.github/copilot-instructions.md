# Copilot Instructions for Pet Store Frontend (React + Vite)

## Project Overview
- **Framework:** React (with Vite for build/dev), TailwindCSS for styling, Framer Motion for animation, React Router for navigation.
- **Architecture:**
  - `src/components/`: Reusable UI components (e.g., `Header`, `Footer`, `ProductCard`).
  - `src/pages/`: Route-level views (e.g., `Home`, `Shop`, `Cart`, `ProductDetails`).
  - `src/context/CartContext.jsx`: Global cart state using React Context + Reducer.
  - `src/services/cartService.jsx`: API calls for cart operations (add, remove, clear, fetch).
  - `src/api/axios.js`: Centralized Axios instance, uses `VITE_API_URL` from environment.
  - `src/data/products.js`: Static product data (if backend unavailable).

## Key Patterns & Conventions
- **State Management:** Cart state is managed globally via `CartContext` and reducer. Use `useCart()` to access cart and dispatch actions.
- **API Integration:** All backend calls use the Axios instance in `src/api/axios.js`. Always reference `VITE_API_URL` for base URL.
- **Routing:** Use `react-router-dom` for navigation. Route components are in `src/pages/`.
- **Styling:** TailwindCSS utility classes are used throughout. No CSS-in-JS.
- **Animation:** Framer Motion is used for UI transitions (see `Header.jsx`).
- **Component Structure:** Prefer functional components and hooks. Avoid class components.
- **File Naming:** Use PascalCase for components, camelCase for functions/variables.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (Vite, hot reload)
- **Build for Production:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **Lint:** `npm run lint` (uses ESLint config in `eslint.config.js`)
- **Environment Variables:** Set in `.env` (e.g., `VITE_API_URL`)

## Integration Points
- **Backend API:** All cart operations (`cartService.jsx`) expect a REST API at `VITE_API_URL`.
- **Static Assets:** Images in `public/images/` and SVGs in `public/` or `src/assets/`.

## Examples
- **Add to Cart (frontend only):**
  ```js
  const { dispatch } = useCart();
  dispatch({ type: "ADD_TO_CART", payload: product });
  ```
- **Add to Cart (API):**
  ```js
  await addToCart(userId, productId, quantity);
  ```
- **Navigation:**
  ```jsx
  <Link to="/shop">Shop</Link>
  ```

## Special Notes
- **No TypeScript:** This project is pure JS/JSX.
- **No test setup detected.**
- **All API errors should be surfaced to the user (see `cartService.jsx`).**
- **Do not hardcode API URLs; always use environment variables.**

---
_If any conventions or workflows are unclear or missing, please ask for clarification or provide examples from the codebase._
