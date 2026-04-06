import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import DiscountCodesPage from "./pages/DiscountCodesPage";
import CardDiscountsPage from "./pages/CardDiscountsPage";
import FlightsPage from "./pages/FlightsPage";
import AccommodationPage from "./pages/AccommodationPage";
import ComparisonPage from "./pages/ComparisonPage";
import FAQPage from "./pages/FAQPage";

function Router() {
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

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
