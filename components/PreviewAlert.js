import { Alert } from 'react-bootstrap';

export default function PreviewAlert() {
  return (
    <Alert variant="info">
      You are in preview mode!{' '}
      {/* TODO: This will lead to API route that will remove preview cookies */}
      <Alert.Link href="/api/exit-preview">Leave preview mode</Alert.Link>
    </Alert>
  );
}
