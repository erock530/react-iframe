import { HTMLAttributes } from 'react'

export interface IframeProps
  extends Omit<HTMLAttributes<HTMLIFrameElement>, 'src'> {
  /**
   * The URL to embed in the iframe
   */
  src: string

  /**
   * Custom headers to include with the iframe request
   */
  headers: Record<string, string>

  /**
   * Width of the iframe
   * @default "100%"
   */
  width?: string | number

  /**
   * Height of the iframe
   * @default "400px"
   */
  height?: string | number

  /**
   * Additional CSS class names
   */
  className?: string

  /**
   * Inline styles for the iframe
   */
  style?: React.CSSProperties

  /**
   * Title attribute for accessibility
   */
  title?: string

  /**
   * Allow attribute for iframe permissions
   */
  allow?: string

  /**
   * Sandbox attribute for iframe security
   */
  sandbox?: string

  /**
   * Loading strategy for the iframe
   */
  loading?: 'eager' | 'lazy'

  /**
   * Referrer policy for the iframe
   */
  referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url'
}

/**
 * A React component for rendering iframes with custom headers
 *
 * @example
 * ```tsx
 * import Iframe from '@erock530/react-iframe';
 *
 * function App() {
 *   return (
 *     <Iframe
 *       src="/dashboard"
 *       headers={{
 *         Authorization: 'Bearer token123',
 *         'Content-Type': 'text/html'
 *       }}
 *       width="100%"
 *       height="600px"
 *     />
 *   );
 * }
 * ```
 */
declare const Iframe: React.FC<IframeProps>

export default Iframe
