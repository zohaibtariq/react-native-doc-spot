import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const width = screenWidth * 0.96;

export default StyleSheet.create({
  cardHeadingText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 0,
    alignSelf: 'stretch', // Ensure the heading takes full width
    paddingLeft: 0,
    color: '#555',
    marginLeft: 4,
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
    /*minHeight: 100,*/
    // width: '31.2%',
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 10,
    // marginHorizontal: 10,
    // marginLeft: '1%',
    marginLeft: screenWidth * 0.018,
  },
  flatCard: {
    width: '31.2%',
    margin: 4,
    height: 100,
  },
  flexCenterCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  elevatedCard: {
    width: 100,
    margin: 4,
    height: 100,
  },
  elevationWithShadow: {
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 100,
  },
  fancyCard: {
    width: width, // '96%', // width
    backgroundColor: '#FFF',
  },
  cardImage: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 14,
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 12,
    color: '#758AA2',
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    paddingBottom: 20,
  },
  textBlackColor: {
    color: '#000',
  },
});
