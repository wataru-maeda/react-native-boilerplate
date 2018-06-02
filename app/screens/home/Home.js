import React from 'react';
import { Text, View, FlatList, Alert } from 'react-native';
import styles from './styles'

// component
import FeedListItem from '../../components/FeedListItem'

// redux
import { connect } from 'react-redux'
import { updateTechFeeds, updateAppleFeeds } from '../../redux/actions/feedManager'

class Home extends React.Component {

    componentWillMount() {
        const {dispatch} = this.props
        dispatch(updateAppleFeeds())
    }

    render() {
        const { feeds } = this.props
        return (
            <View style={styles.container}>
                <FlatList
                data={feeds}
                keyExtractor={(feed, index)=>feed.title}
                renderItem={this.renderRow}/>
            </View>
        );
    }

    renderRow = (feed) => (
        <FeedListItem feed={feed} onPress={(url)=>{ Alert.alert(url) }}/>
    )
}

const mapStateToProps = state => {
    return { feeds: state.FeedManager.feeds, }
}

export default connect(mapStateToProps)(Home)