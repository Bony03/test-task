import "./UploadInput.scss";

export default function UploadInput({ file, uploadHandler, uploadError }) {
  return (
    <div className="uploadInput">
      <div className="uploadInput__body">
        <input
          type="file"
          className="uploadInput__input"
          onChange={(e) => {
            uploadHandler(e.target.files[0]);
          }}
          accept="image/*,.jpg,.jpeg"
        />
        <span>Upload</span>
        <p className="points">{file ? file.name : "Upload your photo"}</p>
      </div>
      {uploadError && <p className="uploadInput__text-error">{uploadError}</p>}
    </div>
  );
}
