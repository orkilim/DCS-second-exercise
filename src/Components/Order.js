import * as React from 'react'
import '../App.css';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

class Order extends React.Component {

    constructor(props) {
        super(props)
        this.location = props.location
        this.date = props.date
        this.name = props.name
        this.index = props.index

        this.delete=this.delete.bind(this)
        this.edit=this.edit.bind(this)
    }

    edit(){
        this.props.onPencilClick((this.index)-1,this.name,this.date,this.location)
    }

    delete(){
        this.props.onTrashClick(this.index-1)
    }

    render() {
        return (
            <div className='order' >
                <span className='delivery-content'>{this.index}</span> <span  className='delivery-content'>{this.date}</span> <span className='delivery-content' >{this.name}</span> <span className='delivery-content' >{this.location}</span> <DeleteIcon onClick={()=>{this.delete()}} /> <CreateIcon onClick={()=>{this.edit()}} />
            </div>
        )
    }
}

export default Order