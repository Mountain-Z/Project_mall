import request from "./request";

// export const BANNER = "banner";
// export const RECOMMEND = "recommend";

export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  }).catch(err => err);
}

export function getHomeData(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  }).catch(err => err);
}
