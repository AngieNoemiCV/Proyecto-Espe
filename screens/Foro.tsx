// screens/ForumScreen.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';

const initialPosts = [
  {
    id: '1',
    user: 'Juan',
    avatar: require('../assets/Juan.png'),
    content: '¡Me encantó el desafío de nivel 3! Fue muy retador pero aprendí mucho.',
    reactions: 5,
    comments: [
      { id: '1', user: 'Ana', content: '¡Yo también lo disfruté mucho!' },
    ],
  },
  // Añadir más publicaciones si es necesario
];

export default function ForumScreen() {
  const [posts, setPosts] = useState(initialPosts);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, { id: Date.now().toString(), user: 'Usuario', content: newComment }],
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    setNewComment('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foro de Desafíos</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <View style={styles.postHeader}>
              <Image source={item.avatar} style={styles.avatar} />
              <Text style={styles.userName}>{item.user}</Text>
            </View>
            <Text style={styles.postContent}>{item.content}</Text>
            <View style={styles.reactionsContainer}>
              <TouchableOpacity style={styles.reactionButton}>
                <Text>👍 {item.reactions}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.commentButton}>
                <Text>💬 {item.comments.length}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.commentsContainer}>
              {item.comments.map(comment => (
                <View key={comment.id} style={styles.comment}>
                  <Text style={styles.commentUser}>{comment.user}:</Text>
                  <Text style={styles.commentContent}>{comment.content}</Text>
                </View>
              ))}
              <TextInput
                style={styles.commentInput}
                placeholder="Añadir un comentario..."
                value={newComment}
                onChangeText={setNewComment}
              />
              <TouchableOpacity
                style={styles.commentButton}
                onPress={() => handleAddComment(item.id)}
              >
                <Text>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        style={styles.forum}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  forum: {
    marginTop: 10,
  },
  postContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postContent: {
    fontSize: 16,
    marginBottom: 10,
  },
  reactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  reactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentsContainer: {
    marginTop: 10,
  },
  comment: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  commentUser: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  commentContent: {
    fontSize: 14,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
