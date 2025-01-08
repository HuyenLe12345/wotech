const ErrorPage = (props) => {
  return (
    <p style={{ textAlign: "center", fontSize: "20px", marginTop: "30px" }}>
      {props.error}
    </p>
  );
};
export default ErrorPage;
