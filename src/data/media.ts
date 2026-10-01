const hostedImages: Record<string, string> = {
  "editor-profile.jpg":
    "https://res.cloudinary.com/djvgxuin8/image/upload/v1790769306/amit/images/editor-profile_fkwjvp.jpg",
};

export function getImageUrl(fileName: string) {
  return hostedImages[fileName] ?? `/images/${fileName}`;
}

export function getVideoThumbnailUrl(videoUrl: string, offsetSeconds = 0) {
  return videoUrl
    .replace("/video/upload/", `/video/upload/so_${offsetSeconds},f_jpg/`)
    .replace(/\.mp4$/, ".jpg");
}

export function getVideoPreviewUrl(videoUrl: string) {
  return videoUrl.replace(
    "/video/upload/",
    "/video/upload/c_limit,w_540,q_auto:eco,vc_auto/",
  );
}

export function getOptimizedVideoUrl(videoUrl: string) {
  return videoUrl.replace(
    "/video/upload/",
    "/video/upload/c_limit,w_720,q_auto:eco,vc_auto/",
  );
}