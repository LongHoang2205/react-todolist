import React,{Component} from 'react';

class Item extends Component {
  constructor(props){
    super(props);
   
    }
    onUpdateStatus=()=>{
      this.props.onUpdateStatus(this.props.task.id)
    }
   
    onDelete=()=>{
      this.props.onDelete(this.props.task.id)
    }
    onUpdate=()=>{
      this.props.onUpdate(this.props.task.id)
    }
  render(){ 
    var {task,index}=this.props;
  return (
           <tr>
              <td>{index+1}</td>
              <td>{task.name}</td>
              <td className="text-center mouse">
                  <span 
                      className={task.status===true?"label label-success":"label label-info "}
                       onClick={this.onUpdateStatus}
                  >
                            {task.status===true?"Kích hoạt":"Ẩn"}
                  </span>
              </td>
              <td className="text-center">
                  <button 
                      type="button" 
                      className="btn btn-warning"
                      onClick={this.onUpdate}
                      >
                      <span className="fas fa-pen-fancy mr-5"></span>Sửa
                  </button>
                  &nbsp;
                  <button 
                      type="button"
                      className="btn btn-danger"
                      onClick={this.onDelete}
                  >
                      <span className="fa fa-trash mr-5"></span>Xóa
                  </button>
               </td>
          </tr>
        );
      }
}

export default Item;
