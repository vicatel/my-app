

import Image from "next/image";

const imageStyle = {
    // borderRadius: '50%',
    // border: '1px solid #fff',
    width: "15%",
    height: "10%"
  }
const Title = (props) => {
    return (<>
        {/* <h1 className="text-light">{props.title}</h1> */}
        <Image
            className="vict"
            src= {props.title}
            alt="Next.js Logo"
            
            width={10}
            height={60}
            style={imageStyle}
            priority
          />
        
        <hr style={{
            width: "95%",
            height: "5px",
            backgroundColor: "white",
            margin: "2px 0px 30px 0px"
        }}/>
    </>);
}

export default Title;