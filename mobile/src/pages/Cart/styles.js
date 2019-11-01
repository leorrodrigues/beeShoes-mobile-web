import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const CardView = styled.View`
	padding: 15px;
	margin: 15px;
	background-color: #fff;
	border-radius: 4px;
`;

export const CardProduct = styled.View`
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
`;

export const Product = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const ProductImage = styled.Image`
	width: ${Dimensions.get('window').height / 4};
	height: ${Dimensions.get('window').height / 4};
`;

export const ProductDetails = styled.View`
	flex: 1;
	margin-left: 10px;
	padding: 10px;
	flex-direction: column;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
	font-size: 16px;
	font-weight: bold;
	margin-top: 5px;
`;

export const ProductButton = styled.TouchableOpacity`
	padding: 6px;
`;

export const ProductAmount = styled.View`
	flex-direction: row;
	background-color: #eee;
	align-items: center;
	border-radius: 4px;
	padding: 10px;
`;

export const AmountText = styled.TextInput.attrs({
	readonly: true,
})`
	background: #fff;
	padding: 5px;
	margin: 0 5px;
	border: 1px solid #ddd;
	border-radius: 4px;
	min-width: 52px;
	font-weight: bold;
`;

export const SubtotalText = styled.Text`
	text-align: right;
	font-weight: bold;
	font-size: 16px;
	flex: 1;
`;

export const TotalView = styled.View`
	margin-top: 40px;
	align-items: center;
`;

export const TotalText = styled.Text`
	color: #999;
	font-size: 20px;
	font-weight: bold;
`;

export const TotalPrice = styled.Text`
	font-weight: bold;
	font-size: 24px;
`;

export const FinishCartButton = styled.TouchableOpacity`
	margin-top: 10px;
	padding: 10px;
	background-color: #7159c1;
	border-radius: 4px;
`;

export const FinishText = styled.Text`
	text-align: center;
	color: #fff;
	font-size: 24px;
`;

export const EmptyView = styled.View`
	align-content: center;
	align-items: center;
`;

export const EmptyText = styled.Text`
	font-size: 24;
	font-weight: bold;
`;
