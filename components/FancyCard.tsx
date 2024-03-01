import {Image, Text, View} from 'react-native';
import React from 'react';
import cardStyles from '../styles/cardStyles';

export default function FancyCard() {
  console.log('Rendering FancyCard...');
  return (
    <View>
      <Text style={[cardStyles.cardHeadingText]}>Trending Places</Text>
      <View
        style={[
          cardStyles.card,
          cardStyles.fancyCard,
          cardStyles.elevationWithShadow,
        ]}>
        <Image
          // resizeMode="cover"
          // resizeMode="contain"
          // resizeMode="stretch"
          // resizeMode="repeat"
          // resizeMode="center"
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-stxOsrPINOmDI6P9uVvReI32NJ3SpL-MEno_E2rN_QLFK5p95SvlMmdfUrrU-UEFeg&usqp=CAU',
          }}
          style={[cardStyles.cardImage]}
        />
        <View style={[cardStyles.cardBody]}>
          <Text style={[cardStyles.cardTitle, cardStyles.textBlackColor]}>
            Hawa Mahal
          </Text>
          <Text style={[cardStyles.cardLabel, cardStyles.textBlackColor]}>
            Pink City, Jaipur
          </Text>
          <Text style={[cardStyles.cardDesc, cardStyles.textBlackColor]}>
            The Hawa Mahal is a place in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace.
          </Text>
          <Text style={[cardStyles.cardFooter, cardStyles.textBlackColor]}>
            12 mins away
          </Text>
        </View>
      </View>
    </View>
  );
}
