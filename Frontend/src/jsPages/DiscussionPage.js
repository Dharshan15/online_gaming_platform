import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from './Navigation';

function DiscussionPage() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);
  const [editedPostText, setEditedPostText] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/api/posts'); // Replace with your backend API endpoint
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createPost = async () => {
    try {
      const response = await axios.post('/api/posts', { text: newPost }); // Replace with your backend API endpoint
      setPosts([...posts, response.data]);
      setNewPost('');
    } catch (error) {
      console.error(error);
    }
  };

  const editPost = async (postId) => {
    setEditingPostId(postId);
    const post = posts.find((p) => p.id === postId);
    setEditedPostText(post.text);
  };

  const updatePost = async () => {
    try {
      await axios.put(`/api/posts/${editingPostId}`, { text: editedPostText }); // Replace with your backend API endpoint
      const updatedPosts = posts.map((post) =>
        post.id === editingPostId ? { ...post, text: editedPostText } : post
      );
      setPosts(updatedPosts);
      cancelEdit();
    } catch (error) {
      console.error(error);
    }
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(`/api/posts/${postId}`); // Replace with your backend API endpoint
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);
    } catch (error) {
      console.error(error);
    }
  };

  const cancelEdit = () => {
    setEditingPostId(null);
    setEditedPostText('');
  };

  return (
    <>
    <section className="vs">
    <Navigation/>
    </section>
    <div className="discussionPage">
      <h1>Discussion Page</h1>
      <div className="newPostForm">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Enter your post (up to 50 words)"
          maxLength={50}
        />
        <button onClick={createPost}>Post</button>
      </div>
      <div className="postsList">
        {posts.map((post) => (
          <div key={post.id} className="post">
            {editingPostId === post.id ? (
              <>
                <textarea
                  value={editedPostText}
                  onChange={(e) => setEditedPostText(e.target.value)}
                  placeholder="Edit your post (up to 50 words)"
                  maxLength={50}
                />
                <button onClick={updatePost}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <p>{post.text}</p>
                <button onClick={() => editPost(post.id)}>Edit</button>
                <button onClick={() => deletePost(post.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default DiscussionPage;
