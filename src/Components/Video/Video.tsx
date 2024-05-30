import "./Video.css";

const VideoComponent = () => {
  return (
    <div className="all-video-container">
      <p className="video-p" style={{ fontWeight: "bold" }}>
        Affirmations
      </p>
      <video className="video-comp" width="640" height="360" controls loop>
        <source
          src="https://youtunein-staging.s3.amazonaws.com/4197_20240111_164936.5233.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoComponent;
