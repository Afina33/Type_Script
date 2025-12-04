export interface FeedBackProps {
  like: number;
  dislike: number;
  onLike: () => void;
  onDislike: () => void;
  resetResults: () => void;
}