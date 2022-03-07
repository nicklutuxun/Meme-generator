import PropTypes from "prop-types";

function Meme(props) {
const { meme } = props;

  return (
    <section className="section is-medium pt-0 pb-6 has-text-centered" >
      <article className="message is-medium" >
        <div className="message-body" id="output">
          <div className="meme">
            <img id="img" src={meme.url} alt="" width="800rem" height="auto"/>
            <h2 id="top-text" className="top">{meme.topText}</h2>
            <h2 id="bottom-text" className="bottom">{meme.bottomText}</h2>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Meme;

Meme.propTypes = {
  meme: PropTypes.object.isRequired
};