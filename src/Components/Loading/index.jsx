import LoadingGif from './../../assets/Loading.gif'

function Loading() {
    return (
      <div className="loading-container">
        <img src={LoadingGif} alt="Loading..." />
      </div>
    );
  }
export default Loading