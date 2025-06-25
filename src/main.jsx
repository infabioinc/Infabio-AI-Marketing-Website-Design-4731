import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Performance monitoring
const startTime = performance.now();

console.log('🚀 Starting React app initialization...');

// Initialize app with comprehensive error handling
try {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    throw new Error('Root element not found');
  }

  console.log('✅ Root element found');

  // Clear any existing content
  rootElement.innerHTML = '';
  
  const root = ReactDOM.createRoot(rootElement);
  
  console.log('✅ React root created');
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log('✅ App rendered');
  
  // Log performance metrics
  const endTime = performance.now();
  console.log(`⚡ App initialized in ${Math.round(endTime - startTime)}ms`);
  
  // Mark styles as loaded
  setTimeout(() => {
    document.body.classList.add('styles-loaded');
    console.log('✅ Styles marked as loaded');
  }, 100);
  
} catch (error) {
  console.error('❌ Failed to initialize app:', error);
  console.error('Error stack:', error.stack);
  
  // Enhanced fallback error display
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="
        min-height: 100vh; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%); 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        padding: 2rem;
      ">
        <div style="
          text-align: center; 
          max-width: 600px; 
          background: white; 
          padding: 3rem; 
          border-radius: 1rem; 
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        ">
          <div style="font-size: 4rem; margin-bottom: 1.5rem;">⚠️</div>
          <h1 style="
            color: #1f2937; 
            margin-bottom: 1rem; 
            font-size: 1.75rem; 
            font-weight: 700;
          ">
            Unable to Load Application
          </h1>
          <p style="
            color: #6b7280; 
            margin-bottom: 2rem; 
            line-height: 1.6;
            font-size: 1rem;
          ">
            There was an error loading the Infabio website. This might be due to a network issue or browser compatibility.
          </p>
          <div style="
            background: #fef2f2; 
            border: 1px solid #fecaca; 
            color: #dc2626; 
            padding: 1rem; 
            border-radius: 0.5rem; 
            margin: 1rem 0;
            text-align: left;
            font-family: monospace;
            font-size: 0.875rem;
          ">
            Error: ${error.message || 'Unknown error occurred'}<br>
            ${error.stack ? 'Stack: ' + error.stack.split('\\n')[0] : ''}
          </div>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem;">
            <button 
              onclick="window.location.reload()" 
              style="
                background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); 
                color: white; 
                padding: 0.75rem 1.5rem; 
                border: none; 
                border-radius: 0.5rem; 
                cursor: pointer; 
                font-size: 1rem;
                font-weight: 600;
                transition: transform 0.2s ease;
              "
              onmouseover="this.style.transform='translateY(-2px)'"
              onmouseout="this.style.transform='translateY(0)'"
            >
              Refresh Page
            </button>
            <button 
              onclick="console.log('App Status:', window.checkAppStatus?.() || 'Status function not available')" 
              style="
                background: #f3f4f6; 
                color: #374151; 
                padding: 0.75rem 1.5rem; 
                border: 2px solid #d1d5db; 
                border-radius: 0.5rem; 
                cursor: pointer; 
                font-size: 1rem;
                font-weight: 600;
                transition: all 0.2s ease;
              "
              onmouseover="this.style.borderColor='#3b82f6'; this.style.color='#3b82f6'"
              onmouseout="this.style.borderColor='#d1d5db'; this.style.color='#374151'"
            >
              Debug Info
            </button>
            <button 
              onclick="window.location.href='mailto:hello@infabio.com'" 
              style="
                background: white; 
                color: #374151; 
                padding: 0.75rem 1.5rem; 
                border: 2px solid #d1d5db; 
                border-radius: 0.5rem; 
                cursor: pointer; 
                font-size: 1rem;
                font-weight: 600;
                transition: all 0.2s ease;
              "
              onmouseover="this.style.borderColor='#3b82f6'; this.style.color='#3b82f6'"
              onmouseout="this.style.borderColor='#d1d5db'; this.style.color='#374151'"
            >
              Contact Support
            </button>
          </div>
          <p style="
            color: #9ca3af; 
            font-size: 0.875rem; 
            margin-top: 1.5rem;
          ">
            Press F12 to open developer console for more details
          </p>
        </div>
      </div>
    `;
  }
}

// Additional error handling for unhandled promise rejections
window.addEventListener('unhandledrejection', function(event) {
  console.error('Unhandled promise rejection:', event.reason);
  console.error('Promise:', event.promise);
  event.preventDefault();
});

// Handle global errors
window.addEventListener('error', function(event) {
  console.error('Global error:', event.error);
  console.error('Error details:', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno
  });
});

// Log when main.jsx finishes executing
console.log('✅ main.jsx execution completed');