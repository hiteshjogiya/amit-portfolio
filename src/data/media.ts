const hostedVideos: Record<string, string> = {
  "project-01.mp4":
    "https://res.cloudinary.com/djvgxuin8/video/upload/v1790774376/amit/videos/project-01_lt0dik.mp4",
  "project-02.mp4":
    "https://res.cloudinary.com/djvgxuin8/video/upload/v1790774475/amit/videos/project-02_ntnynt.mp4",
  "project-03.mp4":
    "https://res.cloudinary.com/djvgxuin8/video/upload/v1790768858/amit/videos/project-03_q9lxy5.mp4",
  "project-04.mp4":
    "https://res.cloudinary.com/djvgxuin8/video/upload/v1790768862/amit/videos/project-04_v8e1m6.mp4",
  "project-05.mp4":
    "https://res.cloudinary.com/djvgxuin8/video/upload/v1790768862/amit/videos/project-05_p2dsg4.mp4",
  "project-06.mp4":
    "https://res.cloudinary.com/djvgxuin8/video/upload/v1790768862/amit/videos/project-06_omvbye.mp4",
  "project-07.mp4":
    "https://res.cloudinary.com/djvgxuin8/video/upload/v1790768881/amit/videos/project-07_pi6upb.mp4",
  "project-08.mp4":
    "https://res.cloudinary.com/djvgxuin8/video/upload/v1790768921/amit/videos/project-08_ulpj5u.mp4",
  "project-09.mp4":
    "https://res.cloudinary.com/djvgxuin8/video/upload/v1790774415/amit/videos/project-09_y1duai.mp4",
};

const hostedImages: Record<string, string> = {
  "editor-profile.jpg":
    "https://res.cloudinary.com/djvgxuin8/image/upload/v1790769306/amit/images/editor-profile_fkwjvp.jpg",
  "project-01-poster.jpg":
    "https://res.cloudinary.com/djvgxuin8/image/upload/v1790769307/amit/images/project-01-poster_u92mzh.jpg",
  "project-02-poster.jpg":
    "https://res.cloudinary.com/djvgxuin8/image/upload/v1790769309/amit/images/project-02-poster_hkdp32.jpg",
  "project-03-poster.jpg":
    "https://res.cloudinary.com/djvgxuin8/image/upload/v1790769311/amit/images/project-03-poster_kufuqa.jpg",
  "project-04-poster.jpg":
    "https://res.cloudinary.com/djvgxuin8/image/upload/v1790769313/amit/images/project-04-poster_fpttwg.jpg",
  "project-05-poster.jpg":
    "https://res.cloudinary.com/djvgxuin8/image/upload/v1790769316/amit/images/project-05-poster_pvdtvc.jpg",
  "project-06-poster.jpg":
    "https://res.cloudinary.com/djvgxuin8/image/upload/v1790769318/amit/images/project-06-poster_u5twyn.jpg",
  "project-07-poster.jpg":
    "https://res.cloudinary.com/djvgxuin8/image/upload/v1790769320/amit/images/project-07-poster_xqcdqq.jpg",
  "project-08-poster.jpg":
    "https://res.cloudinary.com/djvgxuin8/image/upload/v1790769322/amit/images/project-08-poster_vip45v.jpg",
  "project-09-poster.jpg":
    "https://res.cloudinary.com/djvgxuin8/image/upload/v1790769325/amit/images/project-09-poster_dbrdzp.jpg",
};

export function getVideoUrl(fileName: string) {
  return hostedVideos[fileName] ?? `/videos/${fileName}`;
}

export function getImageUrl(fileName: string) {
  return hostedImages[fileName] ?? `/images/${fileName}`;
}