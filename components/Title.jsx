
const Title = (props) => {
    return (<>
        <h1 className="text-light">{props.title}</h1>
        <hr style={{
            width: "90%",
            height: "5px",
            backgroundColor: "white",
            margin: "2px 0px 30px 0px"
        }}/>
    </>);
}

export default Title;