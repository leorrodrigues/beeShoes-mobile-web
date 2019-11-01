import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const MainView = styled.View`
	justify-content: center;
	align-items: center;
	background-color: #000;
`;

export const ListProducts = styled.FlatList`
	margin-top: 20px;
`;

export const Product = styled.View`
	padding: 20px;
	margin: 15px;
	border-radius: 4px;
	max-width: ${Dimensions.get('window').width / 1.4};
	min-height: ${Dimensions.get('window').height / 3};
	background-color: #fff;
`;

export const ProductImage = styled.Image`
	width: ${Dimensions.get('window').height / 3};
	height: ${Dimensions.get('window').height / 3};
`;

export const ProductTitle = styled.Text`
	font-size: 20px;
`;

export const ProductPrice = styled.Text`
	margin: 10px;
	font-size: 24px;
	font-weight: bold;
`;

export const ProductButton = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	background: #7159c1;
	border-radius: 4px;
	margin-left: 10px;
	padding: 0 12px;
	border-radius: 4px;
	border: 0;
	margin-top: auto;
	flex-direction: row;
`;

export const ButtonView = styled.View`
	flex-direction: row;
	align-items: center;
	margin-left: -10;
	padding: 12px;
	background: rgba(0, 0, 0, 0.1);
`;

export const ButtonText = styled.Text`
	right: 0px;
	color: #fff;
	margin-left: 20px;
	font-size: 24px;
	font-weight: bold;
`;

export const IconText = styled.Text`
	right: 0px;
	color: #fff;
	font-size: 20px;
	text-align: center;
	font-weight: bold;
`;
