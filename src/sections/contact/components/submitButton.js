import { Button, Spinner } from "react-bootstrap";

const SubmitButton = ({ isLoading }) => {
  return isLoading ? (
    <Button type="submit">
      Sending message
      <Spinner animation="border" size="sm" role="status" aria-hidden="true" />
    </Button>
  ) : (
    <Button type="submit">Send message</Button>
  );
};

export default SubmitButton;
