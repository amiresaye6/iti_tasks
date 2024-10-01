import Students from "../Data/StudentClass";

let AddnewStudents = (props) => {
    console.log("PRops of Add As Function", props);
    let CustomSaving = () => {
        //get values from inputs
        let id = document.querySelector("#txtId").value;//Call actual Dom Selector inside React Componet ===>Not Lofic Access Actual DOM
        let Name = document.querySelector("#txtName").value;
        //create newStudent
        let newStd = new Students(id, Name, 20, "EL", "images/B.png");
        //call parent function ===>need student as input
        props.SavingAddRef(newStd);
    }

    return (
        <>
            {props.children}
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Id</label>
                    <input type="email" class="form-control" id='txtId' />
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="email" class="form-control" id="txtName" />
                    <label for="exampleInputEmail1" class="form-label">Age</label>
                    <input type="email" class="form-control" />
                    <label for="exampleInputEmail1" class="form-label">Track</label>
                    <input type="email" class="form-control" />
                    <label for="exampleInputEmail1" class="form-label">StudentImg</label>
                    <input type="email" class="form-control" />
                </div>

                <button type="button" class="btn btn-primary" onClick={CustomSaving}>Save</button>
            </form>
        </>
    )
}

export default AddnewStudents;