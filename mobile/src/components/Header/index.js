import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
	HeaderView,
	CartButton,
	LogoButton,
	LogoImage,
	CartIcon,
	CartBadge,
} from './styles';
// import Icon from 'react-native-vector-icons/MaterialIcons';

function Header({ navigation, cartSize }) {
	return (
		<HeaderView>
			<LogoButton onPress={() => navigation.navigate('Home')}>
				<LogoImage source={require('../../assets/images/Logo.png')} />
			</LogoButton>
			<CartButton onPress={() => navigation.navigate('Cart')}>
				<CartBadge>{cartSize}</CartBadge>
				<CartIcon name="basket" color="#fff" size={36} />
			</CartButton>
		</HeaderView>
	);
}

Header.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func,
	}).isRequired,
	cartSize: PropTypes.number,
};

Header.defaultProps = {
	cartSize: 0,
};

export default connect(
	state => ({
		cartSize: state.cart.reduce((totalItems, product) => {
			totalItems += product.amount;
			return totalItems;
		}, 0),
	}),
	null
)(Header);
