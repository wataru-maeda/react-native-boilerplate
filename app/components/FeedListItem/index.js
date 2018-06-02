import React, { Component } from 'react'
import { Image } from 'react-native'
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'
import styles from './styles'

export default class FeedListItem extends Component {
  render() {
    const { urlToImage, title, description, author, url } = this.props.feed.item
    const { name } = this.props.feed.item.source
    return (
      <Card style={styles.card}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: urlToImage}} />
            <Body>
              <Text>{name}</Text>
              <Text note>{author}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image source={{uri: urlToImage}} style={styles.cardThumbnail}/>
            <Text style={styles.titleText}> {title} </Text>
            <Text note> {description} </Text>
          </Body>
        </CardItem>
        <CardItem>
            <Button full info style={styles.button} onPress={() => this.props.onPress(url)}>
                <Text>Read the article</Text>
            </Button>
        </CardItem>
      </Card>
    )
  }
}