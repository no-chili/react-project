import React, { useEffect } from 'react'

const FancyButton = React.forwardRef((props, ref) => {
  useEffect(() => {
    console.log(props);
  }, [])
  return (
    <div>
      <button ref={ref}>
        {props.children}
      </button>
    </div>
  )

})
export default FancyButton 
