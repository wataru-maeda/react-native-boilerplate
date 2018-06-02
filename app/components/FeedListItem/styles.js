import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

export default StyleSheet.create({
    card: {
        flex: 1,
        width: screenWidth,
    },
    cardThumbnail: {
        flex: 1,
        width: '100%',
        height: 200,
    },
    titleText: {
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 8, 
    },
    button: {
        width: '100%',
        marginBottom: 8, 
    }
})