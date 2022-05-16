import { globalStyles } from "@core/themes/stitches.config";
import MainTemplate from "@core/components/templates/MainLayout";
import ErrorBoundary from "@core/components/atoms/ErrorBoundary";
import Routes from "./Routes";

function App() {
  globalStyles();
  return (
    <ErrorBoundary>
      <MainTemplate>
        <Routes />
      </MainTemplate>
    </ErrorBoundary>
  );
}

export default App;
