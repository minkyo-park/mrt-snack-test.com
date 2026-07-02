import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import type { BaseLocationHook, BaseSearchHook } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import DiscountCodesPage from "./pages/DiscountCodesPage";
import CardDiscountsPage from "./pages/CardDiscountsPage";
import FlightsPage from "./pages/FlightsPage";
import AccommodationPage from "./pages/AccommodationPage";
import ComparisonPage from "./pages/ComparisonPage";
import FAQPage from "./pages/FAQPage";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/discount-codes" component={DiscountCodesPage} />
      <Route path="/card-discounts" component={CardDiscountsPage} />
      <Route path="/flights" component={FlightsPage} />
      <Route path="/accommodation" component={AccommodationPage} />
      <Route path="/comparison" component={ComparisonPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

interface AppProps {
  // Only supplied by the build-time prerender script (see scripts/prerender.mjs) to
  // pin wouter to a fixed path outside the browser. Client bundle never passes this,
  // so runtime behavior for real users is unchanged.
  ssrHook?: BaseLocationHook;
  ssrSearchHook?: BaseSearchHook;
}

function App({ ssrHook, ssrSearchHook }: AppProps = {}) {
  const routes = ssrHook ? (
    <WouterRouter hook={ssrHook} searchHook={ssrSearchHook}>
      <AppRoutes />
    </WouterRouter>
  ) : (
    <AppRoutes />
  );

  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          {routes}
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
