# React IFrame Component

A lightweight React component for rendering iframes with custom headers. Perfect for embedding authenticated content or adding custom headers to iframe requests.

## Features

- 🚀 Zero external dependencies
- 📦 Lightweight and performant
- 🔐 Support for custom headers (including authentication)
- ⚛️ Built with modern React practices
- 📱 TypeScript support ready

## Installation

```bash
npm install --save @erock530/react-iframe
```

## Quick Start

```jsx
import Iframe from "@erock530/react-iframe";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Iframe
      src="/dashboard"
      headers={{
        Authorization: `Bearer ${token}`,
        "Content-Type": "text/html",
      }}
      width="100%"
      height="600px"
    />
  );
}
```

## API Reference

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `src` | `string` | ✅ | The URL to embed in the iframe |
| `headers` | `object` | ✅ | Custom headers to include with the request |
| `width` | `string \| number` | ❌ | Width of the iframe (default: `100%`) |
| `height` | `string \| number` | ❌ | Height of the iframe (default: `400px`) |
| `...props` | `HTMLIFrameElement` | ❌ | Any additional iframe attributes |

### Example with Authentication

```jsx
import Iframe from "@erock530/react-iframe";
import Cookies from "js-cookie";

function AuthenticatedEmbed() {
  const token = localStorage.getItem("token") || Cookies.get("token");

  return (
    <Iframe
      src="/protected-content"
      headers={{
        Authorization: `Bearer ${token}`,
        "X-Requested-With": "XMLHttpRequest",
      }}
      width="100%"
      height="500px"
      style={{ border: "1px solid #ccc", borderRadius: "8px" }}
    />
  );
}
```

## Development

This project uses a modern development workflow with hot reloading and automatic compilation.

### Local Development Setup

1. **Start the build watcher** (compiles `src/` to `dist/` on changes):
   ```bash
   npm start
   ```

2. **Start the example app** (in a separate terminal):
   ```bash
   cd example
   npm start
   ```

The example app will automatically reload when you make changes to either the library source or the example code.

### Project Structure

```
├── src/           # Component source code
├── dist/          # Compiled output
├── example/       # Example React app for testing
└── package.json   # Package configuration
```

## Publishing

Build and publish to npm:

```bash
npm publish
```

This will:
- Build both CommonJS and ES module versions
- Generate type definitions (if using TypeScript)
- Publish to the npm registry

### Peer Dependencies

Make sure to properly configure peer dependencies in `package.json`. The build system will automatically exclude them from the bundle.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Submit a pull request

## License

MIT License - see [LICENSE] file for details.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.