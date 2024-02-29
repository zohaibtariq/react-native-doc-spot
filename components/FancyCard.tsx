import {Image, Text, View} from 'react-native';
import React from 'react';
import cardStyles from '../styles/cardStyles';

export default function FancyCard() {
  console.log('Rendering FancyCard...');
  return (
    <View>
      <Text style={[cardStyles.cardHeadingText]}>Trending Places</Text>
      <View style={[cardStyles.card, cardStyles.fancyCard]}>
        <Image
          // resizeMode="cover"
          resizeMode="contain"
          // resizeMode="stretch"
          // resizeMode="repeat"
          // resizeMode="center"
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-stxOsrPINOmDI6P9uVvReI32NJ3SpL-MEno_E2rN_QLFK5p95SvlMmdfUrrU-UEFeg&usqp=CAU',
          }}
          style={[cardStyles.cardImage]}
        />
        <View style={[cardStyles.cardBody]}>
          <Text style={[cardStyles.cardLabel]}>Hawa Mahal 1</Text>
          <Text style={[cardStyles.cardTitle]}>Hawa Mahal 2</Text>
          <Text style={[cardStyles.cardDesc]}>Hawa Mahal 3</Text>
          <Text style={[cardStyles.cardFooter]}>Hawa Mahal 4</Text>
        </View>
      </View>
    </View>
  );
}
