import React from 'react';
import {Text, Button, View, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput} from 'react-native';

export default function PrivateMessageScreen({ history }){

  let messageDummy = [{
    username: 'Chad',
    profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
    lastMessage: 'Sup you into plants',
    created_at: '3:20 AM',
    id: 1,
  },
  {
    username: 'Karen Boomer',
    profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    lastMessage: 'Please dont talk 2 me',
    created_at: '3:27 AM',
    id: 2,
  },
  {
    username: 'Chad',
    profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
    lastMessage: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.',
    created_at: '8:27 AM',
    id: 3,
  },
  {
    username: 'Karen Boomer',
    profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    lastMessage: 'I have a bf',
    created_at: '8:47 AM',
    id: 4,
  },
  {
    username: 'Chad',
    profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
    lastMessage: 'You are so beautiful',
    created_at: '11:21 AM',
    id: 5,
  },
  {
    username: 'Karen Boomer',
    profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    lastMessage: 'I will block u',
    created_at: '11:27 AM',
    id: 6,
  },
  {
    username: 'Chad',
    profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
    lastMessage: 'Please anser me',
    created_at: '12:20 PM',
    id: 7,
  },
  {
    username: 'Karen Boomer',
    profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    lastMessage: 'No!',
    created_at: '2:27 PM',
    id: 8,
  },
]

  return (
    <ScrollView>
    <Button
    title="Back"
    onPress={() => history.push("/")}/>
      {messageDummy.map(user => (
        <TouchableOpacity style={styles.messagesContainer} key={user.id}>
          <Image style={styles.messagesImage} source={{uri: user.profilePic}}/>
          <View style={styles.vertText} >
            <Text style={styles.messagesUsername}>{user.username}</Text>
            <Text style={styles.messagesText} >{user.lastMessage}</Text>
          </View>
          <Text style={styles.timeStamp}>{user.created_at}</Text>
        </TouchableOpacity>
      ))}
    <TextInput 
    style={styles.input}
      placeholder="Send a message..."/> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  messagesContainer: {
    flexDirection: 'row',
  },
  messagesImage: {
    height: 50,
    width: 50,
    alignSelf: 'center',
    margin: 7,
    borderRadius: 100 / 2,
  },
  messagesText: {
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 5,
    maxWidth: 345,
  },
  messagesUsername: {
    fontSize: 15
  },
  vertText: {
    flexDirection: 'column'
  },
  input: {
    height: 40,
    fontSize: 20,
    backgroundColor: '#E9F1E9',
  },
  timeStamp: {
    color: 'forestgreen',
    position: 'absolute',
    left: 340,
  }
});