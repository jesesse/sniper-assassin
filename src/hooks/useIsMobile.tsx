import React from 'react'

const useIsMobile = () => {
  
  const [isMobile, setIsMobile] = React.useState<null | boolean>(null)

  const calculateIsMobile = () => {
    if (window.innerWidth < 768) return setIsMobile(true)
    setIsMobile(false)
  }

  React.useEffect(()=> {
    calculateIsMobile();
  },[])

  window.addEventListener("resize", calculateIsMobile)

  return isMobile;
}
 
export{ useIsMobile }