import React, { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
  {
    id: 1,
    title: 'Ullamco nostrud eu excepteur id duis sunt deserunt enim tempor.',
    description: 'Non nulla mollit dolor eiusmod adipisicing ipsum mollit dolore sunt occaecat est commodo. Ex occaecat cillum pariatur amet in anim occaecat. Lorem adipisicing veniam tempor aliqua. Reprehenderit aliqua culpa aliquip culpa consectetur adipisicing dolore occaecat cillum dolor laboris. Ullamco aute incididunt anim et exercitation ex exercitation adipisicing minim laboris. Dolore Lorem elit commodo laboris commodo Lorem labore consectetur. Sit labore fugiat tempor ut dolor pariatur aliquip non sunt duis.',
    image: require('../assets/olowogoke_seun.jpg')
  },
  {
    id: 2,
    title: 'Irure exercitation duis consectetur tempor culpa Lorem Lorem deserunt mollit aute amet nulla.',
    description: 'Duis in ullamco excepteur qui labore. Culpa ipsum laborum do excepteur consequat aliquip. Irure velit eiusmod exercitation elit ipsum minim tempor eu sit exercitation ad nostrud aliqua. Minim est id pariatur eiusmod laborum.',
    image: require('../assets/olowogoke_seun.jpg')
  },
  {
    id: 3,
    title: 'Veniam fugiat sit ullamco non culpa reprehenderit tempor proident est ut aute.',
    description: 'Mollit id culpa Lorem magna adipisicing est sunt ipsum velit in amet. Consequat veniam laboris eu voluptate consequat commodo esse ipsum. Amet mollit ut ullamco ad.',
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
              title: 'Irure exercitation duis consectetur tempor culpa Lorem Lorem deserunt mollit aute amet nulla.',
              description: 'Duis in ullamco excepteur qui labore. Culpa ipsum laborum do excepteur consequat aliquip. Irure velit eiusmod exercitation elit ipsum minim tempor eu sit exercitation ad nostrud aliqua. Minim est id pariatur eiusmod laborum.',
              image: require('../assets/olowogoke_seun.jpg')
            },
            {
              id: 3,
              title: 'Veniam fugiat sit ullamco non culpa reprehenderit tempor proident est ut aute.',
              description: 'Mollit id culpa Lorem magna adipisicing est sunt ipsum velit in amet. Consequat veniam laboris eu voluptate consequat commodo esse ipsum. Amet mollit ut ullamco ad.',
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