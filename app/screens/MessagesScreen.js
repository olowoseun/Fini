import React, { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
  {
    id: 1,
    title: 'Title 1',
    description: 'Description 1',
    image: require('../assets/olowogoke_seun.jpg')
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'Description 2',
    image: require('../assets/olowogoke_seun.jpg')
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'Description 3',
    image: require('../assets/olowogoke_seun.jpg')
  },
]

export default function MessagesScreen() {

  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    // delete a message from messages array
    setMessages(messages.filter(m => m.id !== message.id));
    // tell the Server to also remove message from database
  }

  return (
    <Screen>
      <FlatList 
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction 
                onPress={() => handleDelete(item)}
              />
            )}
             />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'Title 2',
              description: 'Description 2',
              image: require('../assets/olowogoke_seun.jpg')
            },
            {
              id: 3,
              title: 'Title 3',
              description: 'Description 3',
              image: require('../assets/olowogoke_seun.jpg')
            },
          ])
        }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
 
})