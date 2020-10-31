import React,{Component} from 'react';
import Item from './Item'
class Table extends Component {
  constructor(props){
    super(props);
      this.state={
        filterName:'',
        filterStatus:-1
      }
    }
   onChange=(event)=>{
      var target=event.target;
      var name=target.name;
      var value=target.value;
      this.props.onFilter(
          name==='filterName'?value:this.state.filterName,
          name==='filterStatus'?value:this.state.filterStatus
          );
      this.setState({
        [name]:value
      });
   }
  render(){
    var {tasks}=this.props;
    var { filterName,filterStatus}=this.state;
    var elmTasks=tasks.map((task,index)=>{
      return <Item 
              key={task.id} 
              index={index} 
              task={task}
              onUpdateStatus={this.props.onUpdateStatus}
              onDelete={this.props.onDelete}
              onUpdate={this.props.onUpdate}
          /> 
    }) ;
  return (
           
                            
                       
                      <table className="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng thái</th>
                            <th className="text-center">Hành động</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td>
                              <input 
                              type="text" 
                              name="filterName" 
                              className="form-control"
                              value={filterName}
                              onChange={this.onChange}
                               />
                              

                            </td>
                            <td>
                                <select  
                                className="form-control" 
                                name="filterStatus"
                                value={filterStatus}
                              onChange={this.onChange}
                                 >
                        <option value={-1}>Tất cả</option>
                        <option value={0}>Kích hoạt</option>
                        <option value={1}>Ẩn</option>
                      </select>
                            </td>
                            <td></td> 
                          </tr>
                          
                                {elmTasks}
                        </tbody>
                      </table>
        );
      }
}

export default Table;
