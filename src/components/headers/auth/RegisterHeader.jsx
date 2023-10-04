const RegisterHeader = (props) => {
  const {title, description} = props;
  return (
    <>
      <h3 className="text-primary"><b>{title}</b></h3>
      <p>{description}</p>
    </>
  ) 
}

export default RegisterHeader;