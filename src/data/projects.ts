import { getVideoThumbnailUrl } from "@/src/data/media";

export type ProjectAspect = "portrait" | "landscape" | "square";

export type Project = {
  id: number;
  title: string;
  thumbnail: string;
  video: string;
  aspect: ProjectAspect;
};

type ProjectVideo = Pick<Project, "title" | "video"> & {
  thumbnailOffsetSeconds?: number;
};

const projectVideos: ProjectVideo[] = [
  {
    title: "Project 10",
    video: "https://res.cloudinary.com/djvgxuin8/video/upload/v1790864215/amit/videos/project_10_ym3emm.mp4",
  },
  {
    title: "BAKAJIKI",
    thumbnailOffsetSeconds: 1,
    video: "https://res.cloudinary.com/djvgxuin8/video/upload/v1790863846/amit/videos/BAKAJIKI_fn6azn.mp4",
  },
  {
    title: "Project 05",
    video: "https://res.cloudinary.com/djvgxuin8/video/upload/v1790768862/amit/videos/project-05_p2dsg4.mp4",
  },
  {
    title: "Project 18",
    video: "https://res.cloudinary.com/djvgxuin8/video/upload/v1790863478/amit/videos/project_18_azbxaj.mp4",
  },
  {
    title: "OYEANNA",
    video: "https://res.cloudinary.com/djvgxuin8/video/upload/v1790863860/amit/videos/OYEANNA_1_11.06.26_a7crns.mp4",
  },
  {
    title: "Rajkot Property",
    video: "https://res.cloudinary.com/djvgxuin8/video/upload/v1790863876/amit/videos/my_rajkot_property_changess_1_v16a3r.mp4",
  },
  {
    title: "BABY",
    thumbnailOffsetSeconds: 1,
    video: "https://res.cloudinary.com/djvgxuin8/video/upload/v1790863814/amit/videos/BABY_29.06.26_2_dpw8tq.mp4",
  },
  {
    title: "CARZSPA AMG",
    thumbnailOffsetSeconds: 1,
    video: "https://res.cloudinary.com/djvgxuin8/video/upload/v1790863884/amit/videos/CARZSPA_AMG_6_11.06.26_fcyyj1.mp4",
  },
  {
    title: "SOMNATH",
    thumbnailOffsetSeconds: 1,
    video: "https://res.cloudinary.com/djvgxuin8/video/upload/v1790863721/amit/videos/SOMNATH__2_11.06.26_anj9fh.mp4",
  },
  {
    title: "Project 08",
    thumbnailOffsetSeconds: 1,
    video: "https://res.cloudinary.com/djvgxuin8/video/upload/v1790768921/amit/videos/project-08_ulpj5u.mp4",
  },
  {
    title: "Project 17",
    video: "https://res.cloudinary.com/djvgxuin8/video/upload/v1790863675/amit/videos/project_17_o9zdqg.mp4",
  },
  {
    title: "Project 02",
    thumbnailOffsetSeconds: 1,
    video: "https://res.cloudinary.com/djvgxuin8/video/upload/v1790774475/amit/videos/project-02_ntnynt.mp4",
  },
];

export const projects: Project[] = projectVideos.map((project, index) => {
  const { thumbnailOffsetSeconds = 0, ...projectData } = project;

  return {
    ...projectData,
    id: index + 1,
    thumbnail: getVideoThumbnailUrl(project.video, thumbnailOffsetSeconds),
    aspect: "portrait",
  };
});
