import React from 'react';

class Cart extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		
			
		return this.props.item.map((item) => {

			return (

				<tr>

					< td >{item.itemname}</td>

					< td >{item.price}</td>
				</tr>

			);

		})
			
	}
	
	
}
export default Cart;