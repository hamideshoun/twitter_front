export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatTweet (tweets, tweet) {
  const { id, likes, replies, text, timestamp, parent, first_name, avatar, hasLiked} = tweet;
  return {
    first_name,
    id,
    timestamp,
    text,
    avatar,
    replies,
    likes,
    hasLiked: hasLiked,
    parentInfo: parent == null || tweets[parent] == null ? null : {
      first_name: tweets[parent].first_name,
      id: id,
    },
  }
}

export function formatActivity (activity) {
  const { type, name, timestamp, text, id } = activity

  return {
    type,
    name,
    timestamp,
    text,
    id,
  }
}