import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dimensions, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
	CardView,
	CardProduct,
	Product,
	ProductImage,
	ProductDetails,
	ProductTitle,
	ProductPrice,
	ProductButton,
	ProductAmount,
	AmountText,
	SubtotalText,
	TotalView,
	TotalText,
	TotalPrice,
	FinishCartButton,
	FinishText,
	EmptyView,
	EmptyText,
} from './styles';

function Cart({ products, total, removeFromCart, updateAmountRequest }) {
	function decrement(product) {
		updateAmountRequest(product.id, product.amount - 1);
	}

	function increment(product) {
		updateAmountRequest(product.id, product.amount + 1);
	}

	return (
		<CardView>
			{products.length === 0 ? (
				<EmptyView>
					<Icon
						name="remove-shopping-cart"
						size={Dimensions.get('window').width / 3}
						color="#999"
					/>
					<EmptyText>Your shopping cart is empty.</EmptyText>
				</EmptyView>
			) : (
				<ScrollView showsVerticalScrollIndicator={false}>
					{products.map(p => (
						<CardProduct key={p.id}>
							<Product>
								<ProductImage source={{ uri: p.image }} />
								<ProductDetails>
									<ProductTitle>{p.title}</ProductTitle>
									<ProductPrice>
										{p.priceFormatted}
									</ProductPrice>
								</ProductDetails>
								<ProductButton
									onPress={() => removeFromCart(p.id)}
								>
									<Icon
										name="delete-forever"
										size={30}
										color="#7159c1"
									/>
								</ProductButton>
							</Product>
							<ProductAmount>
								<ProductButton onPress={() => decrement(p)}>
									<Icon
										name="remove-circle-outline"
										size={16}
										color="#7159c1"
									/>
								</ProductButton>
								<AmountText editable={false}>
									{p.amount}
								</AmountText>
								<ProductButton onPress={() => increment(p)}>
									<Icon
										name="add-circle-outline"
										size={16}
										color="#7159c1"
									/>
								</ProductButton>
								<SubtotalText>{p.subtotal}</SubtotalText>
							</ProductAmount>
						</CardProduct>
					))}
					<TotalView>
						<TotalText>TOTAL</TotalText>
						<TotalPrice>{total}</TotalPrice>
					</TotalView>
					<FinishCartButton>
						<FinishText>Finish order</FinishText>
					</FinishCartButton>
				</ScrollView>
			)}
		</CardView>
	);
}

Cart.propTypes = {
	products: PropTypes.any,
	total: PropTypes.string.isRequired,
	removeFromCart: PropTypes.func.isRequired,
	updateAmountRequest: PropTypes.func.isRequired,
};

Cart.defaultProps = {
	products: [],
};

const mapStateToProps = state => ({
	products: state.cart.map(product => ({
		...product,
		subtotal: formatPrice(product.price * product.amount),
		priceFormatted: formatPrice(product.price),
	})),
	total: formatPrice(
		state.cart.reduce(
			(total, product) => total + product.price * product.amount,
			0
		)
	),
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(CartActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart);
