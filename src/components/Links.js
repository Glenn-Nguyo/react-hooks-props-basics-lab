function Links(props) {
    const { linkedin, github } = props;
    return (
      <div id="links">
          <h3>Links</h3>
        <a href={linkedin}> {linkedin} </a>
        <a href={github}> {github} </a>
      </div>
    );
  }
  
  export default Links;
  