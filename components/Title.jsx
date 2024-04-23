

import Image from "next/image";
import { Happy_Monkey, Sonsie_One, Original_Surfer, Inter, Hanalei_Fill } from "next/font/google";
import { Bounce, Fade } from "react-awesome-reveal";


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

const hm = Inter({ subsets: ["latin"], weight: '' });


const Title = (props) => {
    return (<>
        {/* <h1 style={{color: "#253976", fontWeight: "bold" }} className={hm.className + "  "}>{props.title}</h1> */}
        {/* <h1 style={{color: "rgba(37,57,118,1)", fontWeight: "bolder" }} className={hm.className + "  "}>{props.title}</h1> */}
        <Fade duration={2000}>
        {/* <h1 style={{ color: "#707faf", fontWeight: "bolder" }} className={hm.className + "  "}>{props.title}</h1> */}
            <h1  className={hm.className + "  "}>{props.title}</h1>



        <hr style={{
            width: "95%",
            height: "2px",
            backgroundColor: "white",
            margin: "2px 0px 30px 0px"
        }} />
        </Fade>

    </>);
}

export default Title;