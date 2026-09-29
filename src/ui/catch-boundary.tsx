import { Component, type ErrorInfo, type ReactNode } from 'react';

import { AppErrorBoundary } from './error-boundary';

/** Last console.error messages, so the error screen can show what React logged before throwing. */
const recentErrors: string[] = [];
let installed = false;

export function captureConsoleErrors() {
  // Tests spy on console.error themselves; wrapping it here would break their restore.
  if (installed || process.env.JEST_WORKER_ID) return;
  installed = true;
  const original = console.error;
  console.error = (...args: unknown[]) => {
    const text = args
      .map((a) => (a instanceof Error ? `${a.message}\n${a.stack ?? ''}` : String(a)))
      .join(' ');
    recentErrors.push(text.slice(0, 1500));
    if (recentErrors.length > 5) recentErrors.shift();
    original(...args);
  };
}

interface State {
  error?: Error;
  componentStack?: string;
}

/**
 * Class boundary that also records React's component stack (available in release builds too),
 * which the route-level ErrorBoundary export does not receive.
 */
export class CatchBoundary extends Component<{ children: ReactNode }, State> {
  state: State = {};

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(_error: Error, info: ErrorInfo) {
    this.setState({ componentStack: info.componentStack ?? undefined });
  }

  retry = () => {
    this.setState({ error: undefined, componentStack: undefined });
    return Promise.resolve();
  };

  render() {
    const { error, componentStack } = this.state;
    if (!error) return this.props.children;
    const details = [
      `Component stack:\n${(componentStack ?? '(none)').trim()}`,
      `JS stack:\n${(error.stack ?? '(none)').split('\n').slice(0, 25).join('\n')}`,
      recentErrors.length ? `Console:\n${recentErrors.join('\n---\n')}` : '',
    ]
      .filter(Boolean)
      .join('\n\n');
    return <AppErrorBoundary error={error} retry={this.retry} details={details} />;
  }
}

export function errorDetails(error: Error): string {
  return [
    `JS stack:\n${(error.stack ?? '(none)').split('\n').slice(0, 25).join('\n')}`,
    recentErrors.length ? `Console:\n${recentErrors.join('\n---\n')}` : '',
  ]
    .filter(Boolean)
    .join('\n\n');
}
