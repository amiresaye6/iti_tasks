let StudentsCom = (props) => {
    return (

        <>
            <h2>Students Data</h2>
            <ol>
                {props.StdDataRef.map((std, i) => {
                    return (
                        <li>{std.Name}  <button className="btn btn-danger" onClick={() => {
                            props.DeleteActionFromEndPointsAsRef(std.id)
                        }}>Delete</button></li>
                    )
                })
                }
            </ol>
        </>
    )
}
export default StudentsCom;