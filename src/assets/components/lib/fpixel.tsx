/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const FB_PIXEL_ID = 4332319413545079

export const pageview = () => {
  window.fbq('track', 'PageView')
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
  window.fbq('track', name, options)
}

export default FB_PIXEL_ID
