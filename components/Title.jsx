

import Image from "next/image";
import { Happy_Monkey  } from "next/font/google";


// const imageStyle = {
    // borderRadius: '50%',
    // border: '1px solid #fff',
    // width: "15%",
    // height: "10%"
  // }

   {/* <Image
            className="vict"
            src= {props.title}
            alt="Next.js Logo"
            
            width={10}
            height={60}
            style={imageStyle}
            priority
          /> */}

const hm = Happy_Monkey({ subsets: ["latin"], weight: '400' });


const Title = (props) => {
    return (<>
        {/* <h1 style={{color: "#253976", fontWeight: "bold" }} className={hm.className + "  "}>{props.title}</h1> */}
        <h1 style={{color: "rgba(37,57,118,1)", fontWeight: "bolder" }} className={hm.className + "  "}>{props.title}</h1>
        {/* <h1 className={ + "text-light"}>{props.title}</h1> */}
       
        
        <hr style={{
            width: "95%",
            height: "5px",
            backgroundColor: "white",
            margin: "2px 0px 30px 0px"
        }}/>
    </>);
}

export default Title;