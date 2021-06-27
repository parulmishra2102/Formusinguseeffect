import { useState,useEffect } from 'react';


const Welcome = (props) => {
    debugger;
  const [userName, setName] = useState('');
debugger

  useEffect(() =>{
      setName(props.banner)
  })
  const welcomeBanner = () => {
    debugger;}

    // setName(props.banner);

 
  return (
    <>
      <h1>Welcome {userName}</h1>
    </>
  );
};
export default Welcome;
