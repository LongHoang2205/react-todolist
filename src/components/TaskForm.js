import React,{Component} from 'react';

class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state={
      id:'',
      name:'',
      status:false
        }
    }
    componentWillMount=()=>{
          if(this.props.taskEditing){
            this.setState({
              id:this.props.taskEditing.id,
              name:this.props.taskEditing.name,
              status:this.props.taskEditing.status,
            });

          }
      }

      componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.taskEditing){
            this.setState({
            id:nextProps.taskEditing.id,
            name:nextProps.taskEditing.name,
            status:nextProps.taskEditing.status,
            });

          }else if(!nextProps.taskEditing){
            this.setState({
                id:'',
                name:'',
                 status:false
            });
          }
      }
    onCloseForm=()=>{
      this.props.onCloseForm();
    }
   onHandleChange=(event)=>{
    var target=event.target;
    var name=target.name;
    var value=target.value;
    if (name==='status'){
        value=target.value==='true'?true:false;
    }
    this.setState({
      [name]:value
    })
   }
   onHandleSubmit=(event)=>{
    event.preventDefault();
    this.props.onSubmit(this.state);
    // Cancel And Close Form
    this.onClear();
    this.onCloseForm();
   }

   onClear=()=>{
    this.setState({
      name:'',
      status:false
    })
   }
  render(){ 
      var {id}=this.state;
  return (
    <div>
    <form onSubmit={this.onHandleSubmit}>
          <div className="panel panel-primary">
                        <div className="panel-heading">
                          <h3 className="panel-title">
                             {id !==''?'Cập nhật công việc':'Thêm công viec'}
                              <span 
                              className="fas fa-times-circle text-right"
                              onClick={this.onCloseForm}
                              ></span>
                          </h3>
                        </div>
                        <div className="panel-body">
                          <label>Tên:</label>
                          <input type="text"
                                 
                                  name='name'
                                  className='form-control'
                                  value={this.state.name}
                                  onChange={this.onHandleChange}
                           />
                        </div>
                        <div className="panel-body">
                          <label>Trạng Thái:</label>
                          <select name="status"
                           className="form-control" 
                           value={this.state.status}
                           onChange={this.onHandleChange}
                           >
                            <option value={false}>Ẩn</option>
                            <option value={true}>Kích hoạt</option>
                          </select><br />
                          <div className="text-center">
                         <button type="submit" className="btn btn-warning mr-15">
                              <span className="fa fa-plus mr-5"></span>Lưu lại</button>
                         <button type="button"
                                 className="btn btn-info"
                                 onClick={this.onClear}
                                 >
                              <span className="fa fa-times mr-5"></span>Hủy bỏ</button>
                         </div>
                        </div>
                         </div>
                         </form>
                         </div>
        );
      }
}

export default TaskForm;
