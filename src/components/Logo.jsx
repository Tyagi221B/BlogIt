import myImage from "../Images/logo-no-background.png"
function Logo({width = '100px'}) {
  return (
    <div>
      <img src={myImage} alt="" className="h-16"/>
      {/* <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg" alt="" /> */}
    </div>
  )
}

export default Logo
