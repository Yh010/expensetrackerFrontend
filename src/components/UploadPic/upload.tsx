import { useState, ChangeEvent } from "react";
import axios from "axios";

function UploadPic() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const uploadImage = async (filename: string, file: File) => {
    const foldersPath = "tests/test1";
    const options = { headers: { "Content-Type": file.type } };
    try {
      const response = await axios.get<{
        urls: { signedUrl?: string; publicUrl?: string };
      }>(
        `http://localhost:3000/filepath?filename=${filename}&path=${foldersPath}&contentType=${file.type}`
      );
      const s3Urls = response.data?.urls;
      if (!s3Urls.signedUrl) {
        throw new Error("S3 signed url is not defined");
      }
      await axios.put(s3Urls.signedUrl, file, options);
      if (s3Urls.publicUrl) {
        setImageUrl(s3Urls.publicUrl);
      }
    } catch (err) {
      console.error(
        `Error uploading image: ${
          err instanceof Error ? err.message : String(err)
        }`
      );
    }
  };

  const onFileInput = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const timestamp = new Date().getTime();
    const filename =
      file.name
        .split(".")[0]
        .replace(/[&/\\#,+()$~%'":*?<>{}]/g, "")
        .toLowerCase() + `_${timestamp}`;
    const fileExtension = file.name.split(".").pop();
    await uploadImage(`${filename}.${fileExtension}`, file);
  };

  return (
    <div className="header">
      <input type="file" id="file_input" onChange={onFileInput} />
      {imageUrl && (
        <div className="result">
          <a
            href={imageUrl}
            className="image-url"
            target="_blank"
            rel="noopener noreferrer"
          >
            Uploaded Image
          </a>
        </div>
      )}
    </div>
  );
}

export default UploadPic;
