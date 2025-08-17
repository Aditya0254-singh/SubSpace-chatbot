<<<<<<< HEAD
import React, { useState } from 'react';
import { gql, useSubscription, useMutation } from '@apollo/client';

const GET_MESSAGES_SUBSCRIPTION = gql`
  subscription GetMessages($chatId: uuid!) {
    messages(
      where: { chat_id: { _eq: $chatId } }
      order_by: { created_at: asc }
    ) {
      id
      content
      is_user_message
    }
  }
`;

const INSERT_MESSAGE_MUTATION = gql`
  mutation InsertMessage($chatId: uuid!, $message: String!) {
    insert_messages_one(
      object: {
        chat_id: $chatId
        content: $message
        is_user_message: true
      }
    ) {
      id
    }
  }
`;

const SEND_MESSAGE_ACTION = gql`
  mutation SendMessage($chatId: uuid!, $message: String!) {
    sendMessage(chat_id: $chatId, message: $message) {
      text
    }
  }
`;

const ChatView = ({ chatId }) => {
  const [message, setMessage] = useState('');
  const { loading, data } = useSubscription(GET_MESSAGES_SUBSCRIPTION, {
    variables: { chatId },
  });
  
  const [insertMessage] = useMutation(INSERT_MESSAGE_MUTATION);
  const [sendMessageAction] = useMutation(SEND_MESSAGE_ACTION);

  if (loading) return <div>Loading messages...</div>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    await insertMessage({ variables: { chatId, message } });

    await sendMessageAction({ variables: { chatId, message } });

    setMessage('');
  };

  return (
    <div>
      <h2>Chat View</h2>
      <div>
        {data.messages.map((msg) => (
          <div key={msg.id} style={{ textAlign: msg.is_user_message ? 'right' : 'left' }}>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

=======
import React, { useState } from 'react';
import { gql, useSubscription, useMutation } from '@apollo/client';

const GET_MESSAGES_SUBSCRIPTION = gql`
  subscription GetMessages($chatId: uuid!) {
    messages(
      where: { chat_id: { _eq: $chatId } }
      order_by: { created_at: asc }
    ) {
      id
      content
      is_user_message
    }
  }
`;

const INSERT_MESSAGE_MUTATION = gql`
  mutation InsertMessage($chatId: uuid!, $message: String!) {
    insert_messages_one(
      object: {
        chat_id: $chatId
        content: $message
        is_user_message: true
      }
    ) {
      id
    }
  }
`;

const SEND_MESSAGE_ACTION = gql`
  mutation SendMessage($chatId: uuid!, $message: String!) {
    sendMessage(chat_id: $chatId, message: $message) {
      text
    }
  }
`;

const ChatView = ({ chatId }) => {
  const [message, setMessage] = useState('');
  const { loading, data } = useSubscription(GET_MESSAGES_SUBSCRIPTION, {
    variables: { chatId },
  });
  
  const [insertMessage] = useMutation(INSERT_MESSAGE_MUTATION);
  const [sendMessageAction] = useMutation(SEND_MESSAGE_ACTION);

  if (loading) return <div>Loading messages...</div>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    await insertMessage({ variables: { chatId, message } });

    await sendMessageAction({ variables: { chatId, message } });

    setMessage('');
  };

  return (
    <div>
      <h2>Chat View</h2>
      <div>
        {data.messages.map((msg) => (
          <div key={msg.id} style={{ textAlign: msg.is_user_message ? 'right' : 'left' }}>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

>>>>>>> bf384a1ffb625aa88b4549375e3c244de2a7f290
export default ChatView;