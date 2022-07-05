import React, { component } from 'react'

class Form extends component {
    //constructor(props) {
        //super(props)
        //this.state = {
           // Username: ''
        //}
    //}
    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input type = 'text' />
                </div>
            </form>
        )
    }
}

export default Form