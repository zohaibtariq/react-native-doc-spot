import {Image, Text, View} from 'react-native';
import React from 'react';
import cardStyles from '../styles/cardStyles';

export default function FancyCard() {
  return (
    <View>
      <Text style={cardStyles.cardHeadingText}>Trending Places</Text>
      <View style={[cardStyles.card, cardStyles.fancyCard]}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9FFYqtCxKKxd0mtU-xd6tVTq4E--3mqR-w&usqp=CAU',
          }}
          style={cardStyles.cardImage}
        />
        <View style={cardStyles.cardBody}>
          <Text style={cardStyles.cardLabel}>Hawa Mahal</Text>
          <Text style={cardStyles.cardTitle}>Hawa Mahal</Text>
          <Text style={cardStyles.cardDesc}>Hawa Mahal</Text>
        </View>
      </View>
    </View>
  );
}
