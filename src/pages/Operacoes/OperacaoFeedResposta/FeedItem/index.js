import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

// import { Container } from './styles';

const FeedItem = ({ feed }) => (
  <View style={styles.container}>
    <View style={styles.thumb_user}>
      <Image style={styles.avatar_img} source={feed.avatar_user} />
      <Text style={styles.title}>{feed.avatar_name}</Text>
    </View>
    <View>
      <Image source={feed.post_media} style={styles.post_media} />

      <View style={styles.details}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.avatarName}>{feed.avatar_name}</Text>
          <Text style={styles.detailItem}>Descrição</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.avatarName}>Paulo di Tarcio</Text>
          <Text style={styles.detailItem}>Comentário</Text>
        </View>
        <TextInput
          placeholder="Adicionar comentário ..."
          autoCorrect={false}
          autoCapitalize="none"
          autoFocus={false}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  </View>
);

export default FeedItem;
