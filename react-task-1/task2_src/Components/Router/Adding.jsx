import { Component } from 'react'
import Students from "../Data/StudentClass"
import { Link } from 'react-router-dom'
class Adding extends Component {

    state = {
        txtId: '',
        txtName: '',
        txtAge: '',
        txtTrack: '',
        Simg: ''
    }
    inputsHandler = (e) => {
        console.log(e.target.value);
        // this.setState({
        //     txtId: e.target.value
        // })
        //EACM6 Dynamic prop Name for object
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    CustomSaving = () => {
        let newStd = new Students(this.state.txtId, this.state.txtName, this.state.txtAge, this.state.txtTrack, this.state.Simg);
        this.props.SavingAddRef(newStd);
    }
    render() {
        console.log("This of Adding", this);
        return (
            <>
                {/* draw nested content form component get from parent as JSX */}
                {this.props.children}
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Id</label>
                        <input type="email" class="form-control" value={this.state.txtId}
                            onChange={this.inputsHandler} name="txtId"
                        />
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="email" class="form-control" onChange={this.inputsHandler} name="txtName" />
                        <label for="exampleInputEmail1" class="form-label">Age</label>
                        <input type="email" class="form-control" onChange={this.inputsHandler} name='txtAge' />
                        <label for="exampleInputEmail1" class="form-label">Track</label>
                        <input type="email" class="form-control" onChange={this.inputsHandler} name='txtTrack' />
                        <label for="exampleInputEmail1" class="form-label">StudentImg</label>
                        <input type="email" class="form-control" onChange={this.inputsHandler} name="Simg" />
                    </div>
                    <Link type="button" class="btn btn-primary" to="/StudentList" onClick={this.CustomSaving}>Save</Link>
                </form>
            </>
        )
    }

}
export default Adding;