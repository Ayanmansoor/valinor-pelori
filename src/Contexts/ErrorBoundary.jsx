import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught by Error Boundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="h-screen flex flex-col items-center justify-center text-center">
                    <h1 className="text-3xl font-bold text-red-600">Something went wrong!</h1>
                    <p className="text-gray-700">Please refresh the page or try again later.</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
