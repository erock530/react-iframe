import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Iframe = (props) => {
  const { src } = props

  const iframe = React.createRef()

  const method = 'GET'
  const headers = new Headers({ ...props.headers })
  const options = { method, headers }

  const get = React.useRef(() => {})

  get.current = () => {
    fetch(src, options)
      .then((response) => response.text())
      .then((response) => {
        const frame =
          iframe.current.contentWindow ||
          iframe.current.contentDocument.document ||
          iframe.current.contentDocument

        frame.document.open()
        frame.document.write(response)
        frame.document.close()
      })
      .catch((e) => console.log(`@erock530/react-iframe error: ${e}`))
  }

  useEffect(() => {
    get.current()
  }, [])

  return <iframe src={src} ref={iframe} title='react-iframe' {...props} />
}

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  headers: PropTypes.object
}

export default Iframe
