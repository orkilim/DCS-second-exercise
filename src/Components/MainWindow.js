import * as React from 'react'
import Order from './Order.js'
import '../App.css';
import {orders} from '../data.json'

let tempIndex

class MainWindow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: orders,
            location: '',
            name: '',
            date: '',
            index: 3
        }
        this.eachDelivery = this.eachDelivery.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
        this.edit = this.edit.bind(this)
        this.buttonName = 'save'
    }

    //changes the input fields in the form to ones from the selected row
    edit(index,name, date, location) {
        tempIndex=index
        this.setState({ name: name })
        this.setState({ date: date })
        this.setState({ location: location })
        this.buttonName = 'update'
    }

    delete(index) {
        if (index > orders.length || index < 0) {
            alert('no such index in the array')
            return
        }
        else {
            orders.splice(index, 1)
            this.setState({ orders: orders })
        }
    }

    update() {
        if (this.buttonName === 'save') {
            orders.push({ id: this.state.index, location: this.state.location, name: this.state.name, date: this.state.date })
            this.setState({ orders: orders })
            this.setState({ index: this.state.index + 1 })
            this.setState({ name: '' })
            this.setState({ date: '' })
            this.setState({ location: '' })
        }
        if(this.buttonName==='update'){
            orders[tempIndex].date=this.state.date
            orders[tempIndex].name=this.state.name
            orders[tempIndex].location=this.state.location
            this.buttonName='save'
            this.setState({index:tempIndex+1})
            this.state.orders.splice(tempIndex,1,{id:(this.state.index+1).toString(),name:this.state.name,location:this.state.location,date:this.state.date})
            this.setState({ name: '' })
            this.setState({ date: '' })
            this.setState({ location: '' })
            this.setState({ index: this.state.index + 1 })
        }
    }

    eachDelivery(item) {
        return (
            <Order key={item.id} location={item.location} name={item.name} date={item.date} index={item.id} onTrashClick={this.delete} onPencilClick={this.edit}></Order>
        )
    }

    render() {
        return (
            <div id='orangeWindow' >
                <div id='leftWhiteWindow'>
                    {
                        this.state.orders.map(this.eachDelivery)
                    }
                </div>
                <div id='form'>
                    <input className='input' type='text' title={this.state.date} placeholder='date...' value={this.state.date} onChange={(event) => { this.setState({ date: event.currentTarget.value }) }} />
                    <input className='input' type='text' title={this.state.name} placeholder='name...' value={this.state.name} onChange={(event) => { this.setState({ name: event.currentTarget.value }) }} />
                    <input className='input' type='text' title={this.state.location} placeholder='location...' value={this.state.location} onChange={(event) => { this.setState({ location: event.currentTarget.value }) }} />
                    <button id='submit-button' onClick={this.update} >{this.buttonName}</button>
                </div>
            </div>
        )
    }
}

export default MainWindow

