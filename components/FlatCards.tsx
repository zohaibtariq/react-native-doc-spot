import React from 'react';
import {Text, View} from 'react-native';
import cardStyles from '../styles/cardStyles';

export default function FlatCards(): React.JSX.Element {
  return (
    <View style={cardStyles.cardContainer}>
      <Text style={cardStyles.cardHeadingText}>Flat Cards Heading</Text>
      <View style={cardStyles.flatCardContainer}>
        <View
          style={[
            cardStyles.card,
            cardStyles.flatCard,
            cardStyles.cardRed,
            cardStyles.flexCenterCenter,
          ]}>
          <Text style={(cardStyles.cardText, cardStyles.flatCardText)}>
            Red
          </Text>
        </View>
        <View
          style={[
            cardStyles.card,
            cardStyles.flatCard,
            cardStyles.cardBlue,
            cardStyles.flexCenterCenter,
          ]}>
          <Text style={(cardStyles.cardText, cardStyles.flatCardText)}>
            Blue
          </Text>
        </View>
        <View
          style={[
            cardStyles.card,
            cardStyles.flatCard,
            cardStyles.cardGreen,
            cardStyles.flexCenterCenter,
          ]}>
          <Text style={(cardStyles.cardText, cardStyles.flatCardText)}>
            Green
          </Text>
        </View>
      </View>
    </View>
  );
}
