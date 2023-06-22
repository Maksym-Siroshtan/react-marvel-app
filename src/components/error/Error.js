import error from './error.gif';

const Error = () => {
  return (
    <img src={error} alt="Error" style={{display: 'block', width:'250px', height: '250px', objectFit: 'contains', margin: '0 auto'}} />
  )
}

export default Error;