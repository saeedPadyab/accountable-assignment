//@ts-nocheck
import React from "react";
import Alert from "../../molecules/Alert";

class ErrorBoundary extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Alert type="Error" description="There is a critical error in the application. Please try again later." />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
