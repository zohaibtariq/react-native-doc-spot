import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import cardStyles from '../styles/cardStyles';

export default function ElevatedCards(): React.JSX.Element {
  return (
    <View style={cardStyles.cardContainer}>
      <Text style={cardStyles.cardHeadingText}>Elevated Cards Heading</Text>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View
          style={[
            cardStyles.card,
            cardStyles.elevatedCard,
            cardStyles.cardRed,
          ]}>
          <Text style={(cardStyles.cardText, cardStyles.elevatedCardText)}>
            Red
          </Text>
        </View>
        <View
          style={[
            cardStyles.card,
            cardStyles.elevatedCard,
            cardStyles.cardBlue,
          ]}>
          <Text style={(cardStyles.cardText, cardStyles.elevatedCardText)}>
            Blue
          </Text>
        </View>
        <View
          style={[
            cardStyles.card,
            cardStyles.elevatedCard,
            cardStyles.cardGreen,
          ]}>
          <Text style={(cardStyles.cardText, cardStyles.elevatedCardText)}>
            Green
          </Text>
        </View>
        <View
          style={[
            cardStyles.card,
            cardStyles.elevatedCard,
            cardStyles.cardRed,
          ]}>
          <Text style={(cardStyles.cardText, cardStyles.elevatedCardText)}>
            Red
          </Text>
        </View>
        <View
          style={[
            cardStyles.card,
            cardStyles.elevatedCard,
            cardStyles.cardBlue,
          ]}>
          <Text style={(cardStyles.cardText, cardStyles.elevatedCardText)}>
            Blue
          </Text>
        </View>
        <View
          style={[
            cardStyles.card,
            cardStyles.elevatedCard,
            cardStyles.cardGreen,
          ]}>
          <Text style={(cardStyles.cardText, cardStyles.elevatedCardText)}>
            Green
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
