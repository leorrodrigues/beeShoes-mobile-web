import styled from 'styled-components/native';
import Icon from 'react-native-ionicons';

export const HeaderView = styled.SafeAreaView`
	flex: 0.1;
	flex-direction: row;
	justify-content: space-between;
	background-color: #000;
	height: 10;
	align-items: center;
`;

export const LogoButton = styled.TouchableOpacity`
	margin-left: 10px;
	padding: 10px 12px;
	align-items: center;
`;

export const LogoImage = styled.Image`
	width: 200px;
	height: 50px;
`;

export const CartButton = styled.TouchableOpacity`
	margin-right: 10px;
	margin-top: 20px;
	padding: 0px 12px;
	align-items: center;
`;

export const CartIcon = styled(Icon)``;

export const CartBadge = styled.Text`
	position: absolute;
	text-align: center;
	bottom: 23px;
	left: 33px;
	width: 20px;
	height: 20px;
	border-radius: 13px;
	font-size: 14px;
	color: #fff;
	background: #7159c1;
`;
