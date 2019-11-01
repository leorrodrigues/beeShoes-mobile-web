import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import {
	MainView,
	ListProducts,
	Product,
	ProductImage,
	ProductTitle,
	ProductPrice,
	ProductButton,
	ButtonText,
	IconText,
	ButtonView,
} from './styles';

import { formatPrice } from '../../utils/format';

class Main extends Component {
	state = {
		products: [],
	};

	async componentDidMount() {
		const response = await api.get('products');

		const data = response.data.map(product => ({
			...product,
			priceFormated: formatPrice(product.price),
		}));

		this.setState({ products: data });
	}

	handleAddProduct = id => {
		const { addToCartRequest } = this.props;
		addToCartRequest(id);
	};

	render() {
		const { products } = this.state;
		const { amount } = this.props;

		return (
			<MainView>
				<ListProducts
					horizontal
					data={products}
					keyExtractor={product => String(product.id)}
					renderItem={({ item }) => (
						<Product>
							<ProductImage source={{ uri: item.image }} />
							<ProductTitle>{item.title}</ProductTitle>
							<ProductPrice>{item.priceFormated}</ProductPrice>
							<ProductButton
								onPress={() => this.handleAddProduct(item.id)}
							>
								<ButtonView>
									<Icon
										name="add-shopping-cart"
										size={32}
										color="white"
									/>
									<IconText>{amount[item.id] || 0}</IconText>
								</ButtonView>
								<ButtonText>Add Product</ButtonText>
							</ProductButton>
						</Product>
					)}
				/>
			</MainView>
		);
	}
}

Main.propTypes = {
	amount: PropTypes.objectOf(PropTypes.number).isRequired,
	addToCartRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	amount: state.cart.reduce((amount, product) => {
		amount[product.id] = product.amount;
		return amount;
	}, {}),
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(CartActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main);
