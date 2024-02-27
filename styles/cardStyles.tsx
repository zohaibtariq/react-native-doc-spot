import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardHeadingText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 0,
    alignSelf: 'stretch', // Ensure the heading takes full width
    marginLeft: 4,
    paddingLeft: 0,
    color: '#555',
  },
  cardContainer: {
    flex: 1,
  },

  /* BG Color Cards */
  cardRed: {
    backgroundColor: '#FF0000',
  },
  cardBlue: {
    backgroundColor: '#0000FF',
  },
  cardGreen: {
    backgroundColor: '#00FF00',
  },
  flatCardContainer: {
    flexDirection: 'row',
  },

  /* Card Text */
  cardText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  flatCardText: {},
  elevatedCardText: {},

  /* Card */
  card: {
    height: 100,
    width: '31.2%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    margin: 4,
  },
  flatCard: {
    width: '31.2%',
  },
  elevatedCard: {
    width: 100,
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 100,
  },
  fancyCard: {},
  cardImage: {
    width: 100,
  },
  cardBody: {},
  cardLabel: {},
  cardTitle: {},
  cardDesc: {},
});
