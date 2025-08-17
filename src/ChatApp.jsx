
import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useSignOut } from '@nhost/react';

const GET_CHATS_QUERY = gql`
  query GetChats {
    chats(order_by: { created_at: desc }) {
      id
    }
  }
`;

const CREATE_CHAT_MUTATION = gql`
  mutation CreateChat {
    insert_chats_one(object: {}) {
      id
    }
  }
`;

const ChatApp = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const { signOut } = useSignOut();
  const { loading, error, data, refetch } = useQuery(GET_CHATS_QUERY);
  const [createChat, { loading: creatingChat }] = useMutation(CREATE_CHAT_MUTATION, {
    onCompleted: () => {
      refetch(); 
    }
  });

  if (loading) return <p>Loading chats...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>My Chats</h1>
      <button onClick={signOut}>Sign Out</button>
      <button onClick={() => createChat()} disabled={creatingChat}>
        {creatingChat ? 'Creating...' : 'New Chat'}
      </button>

      <ul>
        {data.chats.map((chat) => (
          <li key={chat.id} onClick={() => setSelectedChat(chat.id)}>
            {chat.id}
          </li>
        ))}
      </ul>

      {selectedChat && <ChatView chatId={selectedChat} />}
    </div>
  );
};

export default ChatApp;