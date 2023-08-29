import { FidgetSpinner } from 'react-loader-spinner'

const LoadingSpinner = () => {
  return (
    <FidgetSpinner
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{ height: '620px' }}
      wrapperClass="dna-wrapper"
      ballColors={['#FFFFFF', '#FFFFFF', '#FFFFFF']}
      backgroundColor='#018561'
    />
  )
}

export default LoadingSpinner
// 
