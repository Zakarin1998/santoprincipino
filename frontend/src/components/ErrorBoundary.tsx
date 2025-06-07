// src/components/ErrorBoundary.tsx
import React, { ErrorInfo } from 'react'

interface State { hasError: boolean }

class ErrorBoundary extends React.Component<{}, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary catturato:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 32, textAlign: 'center' }}>
          <h2>Ops… qualcosa è andato storto.</h2>
          <p>Ricarica la pagina o riprova più tardi.</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
