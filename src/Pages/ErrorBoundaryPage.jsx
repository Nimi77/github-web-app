// eslint-disable-next-line no-unused-vars
import React , { Component }from 'react';
import PropTypes from 'prop-types'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    // Update state to trigger fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI for when an error occurs
      return (
        <div>
          <h1>Something went wrong</h1>
          <p>We apologize for the inconvenience. Please try again later.</p>
        </div>
      );
    }

    // Render children if there's no error
    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;
