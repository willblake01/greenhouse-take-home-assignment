import { FidgetSpinner } from 'react-loader-spinner'

const LoadingSpinner = () => {
  return (
    <FidgetSpinner
      height='80'
      width='80'
      ariaLabel='fidget-spinner-loading'
      wrapperStyle={{ height: '620px' }}
      wrapperClass='fidget-spinner-wrapper'
      ballColors={['#000000', '#000000', '#000000']}
      backgroundColor='#FFFFFF'
    />
  )
}

export default LoadingSpinner
// 
