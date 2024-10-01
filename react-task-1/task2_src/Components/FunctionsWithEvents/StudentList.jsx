let StudentListDisplay = (props) => {
    console.log("PRops", props);
    return (
        <>
            <button onClick={props.DeleteFromAppParentRef} className="btn btn-danger">Test</button>
            <button onClick={() => {
                let x = 900;
                let Mydata = {
                    id: 2020,
                    Name: 'ReactJSG06'
                }
                props.DeleteFromAppParentRef(x, Mydata);//function body code inside Parent

            }} className="btn btn-danger">Test2</button>

            <table class="table" id="tbl">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Track</th>
                        <th scope="col">Img</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>

                    </tr>
                </thead>
                <tbody>
                    {props.stdArrayRef.map((student, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">{student.Id}</th>
                                <td>{student.Name}</td>
                                <td>{student.Age}</td>
                                <td>{student.Track}</td>
                                <td>
                                    <img src={student.SImg} style={{
                                        height: "70px", width: '150px'
                                    }} />
                                </td>
                                <td>
                                    <input type="button" value="Delete" onClick={() => props.DeleteStdRef(i)} className="btn btn-outline-danger" />
                                </td>
                                <td>
                                    <input type="button" value={"Edit"} className="btn btn-outline-warning" />
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}

export default StudentListDisplay;